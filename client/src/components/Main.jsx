import React from 'react'
import Login from './users/Login';
import Registration from './users/Registration';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: true,
            showRegistration: false
        }

        this.doRegistration = this.doRegistration.bind(this);
        this.doCloseRegistration = this.doCloseRegistration.bind(this);
    }

    doCloseRegistration() {
        this.setState({
            showLogin: true,
            showRegistration: false,
        })
    }

    doRegistration() {
        this.setState({
            showLogin: false,
            showRegistration: true,
        })
    }

    render() {
        return (
            <>
                {this.state.showLogin &&
                    <Login
                        doRegistration={this.doRegistration}
                    />}
                {this.state.showRegistration &&
                    <Registration
                        doClose={this.doCloseRegistration}
                    />}
            </>
        )
    }
}