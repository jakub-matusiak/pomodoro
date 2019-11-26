import React from 'react';

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("Wystąpił następujący błąd", error, errorInfo);
    }

    render() {
        const { message, children } = this.props;
        return this.state.hasError ? message : children;
    }
}

export default Error;