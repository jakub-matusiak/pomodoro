import React from 'react';
import uuidv4 from 'uuid';

class TimeboxCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            totalTimeInMinutes: ''
        }
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    }

    handleTotalTimeInMinutesChange = (e) => {
        this.setState({ totalTimeInMinutes: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate({
            id: uuidv4(),
            title: this.state.title,
            totalTimeInMinutes: this.state.totalTimeInMinutes
        });
        this.setState({
            title: '',
            totalTimeInMinutes: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="timebox-creator">
                <label
                    className="timebox-creator__label"
                    htmlFor="action"
                >Co robisz?</label>
                <input
                    className="timebox-creator__input"
                    type="text"
                    id="action"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <label
                    className="timebox-creator__label"
                    htmlFor="time"
                >Ile minut?</label>
                <input
                    className="timebox-creator__input timebox-creator__input--time"
                    type="number"
                    id="time"
                    min="0"
                    value={this.state.totalTimeInMinutes}
                    onChange={this.handleTotalTimeInMinutesChange}
                />
                <button
                    className="timebox-creator__button"
                >Dodaj zadanie</button>
            </form>
        );
    }
}

export default TimeboxCreator;