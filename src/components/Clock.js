import React from 'react';
import PropTypes from 'prop-types';

function Clock({ className, minutes, seconds}) {

    // CHECK CORRECT VALUES

    if (minutes < 0) {
        minutes = 0;
    } else if (minutes > 59) {
        minutes = 59;
    }
    if (seconds < 0) {
        seconds = 0;
    } else if (seconds > 59) {
        seconds = 59;
    }
    
    // FILL THE GAPS

    if (minutes.toString().length < 2) {
        minutes = `0${minutes}`;
    }
    if (seconds.toString().length < 2) {
        seconds = `0${seconds}`;
    }

    return <p className={`timebox__clock ${className}`}>Pozostało {minutes}:{seconds}</p>;

}

Clock.defaultProps = {
    className: ''
}

Clock.propTypes = {
    className: PropTypes.string.isRequired,
    minutes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    seconds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

export default Clock;