import React from 'react';

import TimeboxCreator from './TimeboxCreator';
import Timebox from './Timebox';
import ErrorBoundary from './ErrorBoundary';
import TimeboxesAPI from '../api/AxiosTimeboxesApi';

class TimeboxList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeboxes: [],
            hasError: false,
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        TimeboxesAPI.getAllTimeboxes().then(
            (timeboxes) => this.setState({ timeboxes })
        ).catch(
            (error) => this.setState({ error })
        ).finally(
            () => this.setState({ loading: false })
        )
    }

    addTimebox = (timebox) => {
        TimeboxesAPI.addTimebox(timebox).then(
            (addTimebox) => this.setState(prevState => {
                const timeboxes = [...prevState.timeboxes, addTimebox];
                return { timeboxes };
            })
        )
    }

    removeTimebox = (indexToRemove) => {
        TimeboxesAPI.removeTimebox(this.state.timeboxes[indexToRemove]).then(
            () => this.setState(prevState => {
                const timeboxes = prevState.timeboxes.filter((timebox, i) => i !== indexToRemove);
                return { timeboxes };
            })
        )
        
    }

    updateTimebox = (indexToUpdate, timeboxToUpdate) => {
        TimeboxesAPI.replaceTimebox(timeboxToUpdate).then(
            (updatedTimebox) => this.setState(prevState => {
                const timeboxes = prevState.timeboxes.map((timebox, i) => i === indexToUpdate ? updatedTimebox : timebox);
                return { timeboxes };
            })
        )
    }

    handleCreate = (createdTimebox) => {
        this.addTimebox(createdTimebox);
    }

    render() {
        return (
            <>
                <TimeboxCreator onCreate={this.handleCreate} />
                <ErrorBoundary message="Nie udało się wyrenderować listy">
                { this.state.loading ? "Trwa ładowanie..." : null }
                { this.state.error ? "Nie udało się załadować zawartości..." : null }
                {
                    this.state.timeboxes.map((timebox, i) => (
                        <Timebox
                            key={timebox.id}
                            title={timebox.title}
                            totalTimeInMinutes={timebox.totalTimeInMinutes}
                            onDelete={() => this.removeTimebox(i)}
                            onEdit={() => this.updateTimebox(i, {...timebox, title: 'updated timebox'})}
                        />
                    ))
                }
                </ErrorBoundary>
            </>
        );
    }
}

export default TimeboxList;