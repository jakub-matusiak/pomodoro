import React from 'react';
import PropTypes from 'prop-types';

function Timebox({ title, totalTimeInMinutes, onDelete, onEdit }) {
    if (totalTimeInMinutes <= 0) {
        throw new Error("Całkowity czas musi być większy od 0");
    }
    return (
        <section className="timebox timebox--inactive">
            <p className="timebox__title timebox__title--inactive">{title} - {totalTimeInMinutes} min.</p>
            <button
                className="timebox__button"
                onClick={onDelete}
            >Usuń</button>
            <button
                className="timebox__button"
                onClick={onEdit}
            >Zmień</button>
        </section>
    );
}

Timebox.propTypes = {
    title: PropTypes.string.isRequired,
    totalTimeInMinutes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}

export default Timebox;