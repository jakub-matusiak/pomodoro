import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({className, percent, trackRemaning }) {
    return (
        <div className={`progress ${className}`}>
            <div className="progress__bar" style={{width: `${percent}%`}}></div>
        </div>
    );
}

ProgressBar.defaultProps = {
    className: '',
    trackRemaning: false
}

ProgressBar.propTypes = {
    className: PropTypes.string,
    percent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    trackRemaning: PropTypes.bool
}

export default ProgressBar;