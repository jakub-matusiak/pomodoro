import React from 'react';
import PropTypes from 'prop-types';

import Clock from './Clock';
import ProgressBar from './ProgressBar';
import { getMinutesAndSecondsFromDurationInSeconds } from '../lib/time';

class CurrentTimebox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            isPaused: false,
            pausesCount: 0,
            elapsedTimeInSeconds: 0
        }
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.togglePause = this.togglePause.bind(this);
        this.intervalId = null;
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    handleStart() {
        this.setState({
            isRunning: true
        });
        this.startTimer();
    }

    handleStop() {
        this.setState({
            isRunning: false,
            isPaused: false,
            pausesCount: 0,
            elapsedTimeInSeconds: 0
        });
        this.stopTimer();
    }

    togglePause() {
        this.setState(
            function(prevState) {
                const isPaused = !prevState.isPaused;

                if (isPaused) {
                    this.stopTimer();
                } else {
                    this.startTimer();
                }

                return {
                    isPaused,
                    pausesCount: isPaused ? prevState.pausesCount + 1 : prevState.pausesCount
                }
            }
        );
        
    }

    startTimer() {
        if (this.intervalId === null) {
            this.intervalId = window.setInterval(
                () => {
                    this.setState(
                        (prevState) => ({elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 0.1})
                    )
                },
                100
            );
        }
    }

    stopTimer() {
        window.clearInterval(this.intervalId);
        this.intervalId = null;
    }

    render() {
        const { isRunning, isPaused, pausesCount, elapsedTimeInSeconds } = this.state;
        const { title, totalTimeInMinutes, isEditable, onEdit } = this.props;
        const totalTimeInSeconds = totalTimeInMinutes * 60;
        const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeInSeconds;
        const [minutesLeft, secondsLeft] = getMinutesAndSecondsFromDurationInSeconds(timeLeftInSeconds);
        const progressInPercent = (elapsedTimeInSeconds / totalTimeInSeconds) * 100;

        return (
            <section className={`timebox ${isEditable ? 'inactive' : ''}`}>
                <h2 className="timebox__title">{title}</h2>
                <Clock
                    className={isPaused ? 'inactive' : ''}
                    minutes={minutesLeft}
                    seconds={secondsLeft}
                />
                <ProgressBar
                    className={isPaused ? 'inactive' : ''}
                    percent={progressInPercent}
                />
                <div className="navigation">
                    <button
                        className="navigation__button"
                        disabled={isEditable}
                        onClick={onEdit}
                    >Zmień</button>
                    <button
                        className="navigation__button"
                        disabled={isRunning || isEditable}
                        onClick={this.handleStart}
                    >Start</button>
                    <button
                        className="navigation__button"
                        disabled={!isRunning || isEditable}
                        onClick={this.handleStop}
                    >Stop</button>
                    <button
                        className="navigation__button"
                        disabled={!isRunning || isEditable}
                        onClick={this.togglePause}
                    >{isPaused ? 'Wznów' : 'Pauza'}</button>
                </div>
                <p className="breaks">Liczba przerw: {pausesCount}</p>
            </section>
        );
    }
}

CurrentTimebox.propTypes = {
    isRunning: PropTypes.bool,
    isEditable: PropTypes.bool,
    onEdit: PropTypes.func,
    pausesCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default CurrentTimebox;