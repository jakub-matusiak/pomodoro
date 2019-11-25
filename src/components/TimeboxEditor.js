import React from 'react';

function TimeboxEditor(props) {
    const { title, totalTimeInMinutes, isEditable, onTitleChange, onTotalTimeInMinutesChange, onConfirm } = props;

    return (
        <div className={`timebox-editor ${isEditable ? '' : 'inactive'}`}>
            <label
                className="timebox-editor__label"
                htmlFor="action"
            >Co robisz?</label>
            <input
                className="timebox-editor__input"
                type="text"
                id="action"
                value={title}
                disabled={!isEditable}
                onChange={onTitleChange}
            />
            <label
                className="timebox-editor__label"
                htmlFor="time"
            >Ile minut?</label>
            <input
                className="timebox-editor__input timebox-editor__input--time"
                type="number"
                id="time"
                min="0"
                value={totalTimeInMinutes}
                disabled={!isEditable}
                onChange={onTotalTimeInMinutesChange}
            />
            <button
                className="timebox-editor__button"
                disabled={!isEditable}
                onClick={onConfirm}
            >Zatwierdź</button>
        </div>
    );
}

export default TimeboxEditor;