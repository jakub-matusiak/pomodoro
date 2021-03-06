import React from 'react';

import TimeboxList from './TimeboxList';
import EditableTimebox from './EditableTimebox';
import ErrorBoundary from './ErrorBoundary';
import LoginForm from './LoginForm';
import AuthenticationAPI from '../api/AxiosAuthenticationApi';
import jwt from 'jsonwebtoken';

class App extends React.Component {
    state = {
        accessToken: null,
        previousLoginAttemptFailed: false
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.setState({
                accessToken: localStorage.getItem('token')
            });
        }
    }

    isUserLoggedIn() {
        return !!this.state.accessToken;
    }

    getUserEmail() {
        const decodedToken = jwt.decode(this.state.accessToken);
        return decodedToken.email;
    }

    handleLoginAttempt = (credentials) => {
        AuthenticationAPI.login(credentials)
            .then( ({ accessToken }) => {
                this.setState({
                    accessToken,
                    previousLoginAttemptFailed: false
                });
                localStorage.setItem('token', accessToken);
            }).catch( () => {
                this.setState({
                    previousLoginAttemptFailed: true
                });
            });
    }

    handleLogout = () => {
        this.setState({
            accessToken: null,
            previousLoginAttemptFailed: false
        });
        localStorage.removeItem('token');
    }

    render() {
        return (
            <div className="App">
                <ErrorBoundary message="Coś nie działa w całej aplikacji">
                    {
                        this.isUserLoggedIn() ? 
                        <>
                            <header className="header">
                                <span className="header__welcome">Cześć, {this.getUserEmail()}!</span>
                                <button className="header__logout" onClick={this.handleLogout}>Wyloguj się</button>
                            </header>
                            <TimeboxList accessToken={this.state.accessToken} />
                            <EditableTimebox />
                        </> :
                        <>
                            <header className="header">
                                <span className="header__welcome">Cześć, nieznajomy!</span>
                                <p className="header__paragraph">Zaloguj się aby przejść dalej.</p>
                            </header>
                            <LoginForm
                                errorMessage={ this.state.previousLoginAttemptFailed ? "Nie udało się zalogować!" : null }
                                onLoginAttempt={this.handleLoginAttempt}
                            />
                        </>
                    }
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;