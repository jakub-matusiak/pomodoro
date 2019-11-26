import React from 'react';

import TimeboxEditor from './TimeboxEditor';
import CurrentTimebox from './CurrentTimebox';

class EditableTimebox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Uczę się biblioteki React!',
            totalTimeInMinutes: 25,
            isEditable: true
        }
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    handleTotalTimeInMinutesChange = (e) => {
        this.setState({
            totalTimeInMinutes: e.target.value
        });
    }

    handleConfirm = () => {
        this.setState({
            isEditable: false
        });
    }

    handleEdit = () => {
        this.setState({
            isEditable: true
        });
    }

    render() {
        const { title, totalTimeInMinutes, isEditable } = this.state;

        return (
            <>
                <React.StrictMode>
                    { isEditable ? (
                        <TimeboxEditor
                            title={title}
                            totalTimeInMinutes={totalTimeInMinutes}
                            isEditable={isEditable}
                            onConfirm={this.handleConfirm}
                            onTitleChange={this.handleTitleChange}
                            onTotalTimeInMinutesChange={this.handleTotalTimeInMinutesChange}
                        />
                    ) : (
                        <CurrentTimebox
                            title={title}
                            totalTimeInMinutes={totalTimeInMinutes}
                            isEditable={isEditable}
                            onEdit={this.handleEdit}
                        />
                    )}
                </React.StrictMode>
            </>
        );
    }
}

export default EditableTimebox;