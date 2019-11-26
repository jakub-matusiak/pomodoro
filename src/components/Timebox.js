import React from 'react';

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

export default Timebox;