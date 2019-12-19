import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onLoginAttempt({
            email: this.emailInput.current.value,
            password: this.passwordInput.current.value
        });
        this.emailInput.current.value = '';
        this.passwordInput.current.value = '';
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="login-form">
                <div className="login-form__error">{this.props.errorMessage}</div>
                <label
                    className="login-form__label"
                    htmlFor="login"
                >Login</label>
                <input
                    className="login-form__input"
                    type="email"
                    id="login"
                    ref={this.emailInput}
                />
                <label
                    className="login-form__label"
                    htmlFor="password"
                >Hasło</label>
                <input
                    className="login-form__input"
                    type="password"
                    id="password"
                    ref={this.passwordInput}
                />
                <button
                    className="login-form__button"
                >Zaloguj się</button>
            </form>
        );
    }
}

export default LoginForm;