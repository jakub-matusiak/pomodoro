import React from 'react';

import TimeboxCreator from './TimeboxCreator';
import Timebox from './Timebox';

class TimeboxList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeboxes: []
        }
    }

    addTimebox = (timebox) => {
        this.setState(prevState => {
            const timeboxes = [timebox, ...prevState.timeboxes];
            return { timeboxes };
        });
    }

    removeTimebox = (indexToRemove) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.filter((timebox, i) => i !== indexToRemove);
            return { timeboxes };
        });
    }

    updateTimebox = (indexToUpdate, updatedTimebox) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.map((timebox, i) => i === indexToUpdate ? updatedTimebox : timebox);
            return { timeboxes };
        });
    }

    handleCreate = (createdTimebox) => {
        this.addTimebox(createdTimebox);
    }

    render() {
        return (
            <>
                <TimeboxCreator onCreate={this.handleCreate} />
                {this.state.timeboxes.map((timebox, i) => (
                    <Timebox
                        key={timebox.id}
                        title={timebox.title}
                        totalTimeInMinutes={timebox.totalTimeInMinutes}
                        onDelete={() => this.removeTimebox(i)}
                        onEdit={() => this.updateTimebox(i, {...timebox, title: 'updated timebox'})}
                    />
                ))}
                
            </>
        );
    }
}

export default TimeboxList;