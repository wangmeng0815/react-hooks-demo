import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(err, info) {
        this.setState({
            hasError: true
        });
    }

    render() {
        if(this.state.hasError) {
            return <div>Something Wrong!</div>
        }
        return this.props.children;
    }
}

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: ''
        };
    }

    handleClick = () => {

    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick}>走你</button>
                <div>用户名: {this.state.user.push(1)}</div>
            </div>
        )
    }
}

class Err extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Profile />
            </ErrorBoundary>
        )
    }
}

export default Err;
