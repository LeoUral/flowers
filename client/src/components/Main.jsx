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
        this.doStart = this.doStart.bind(this);
    }

    doStart(key) {

        if (key === 'admin') {
            console.log(`go ADMIN`); // test
            this.setState({ showLogin: false })
            // todo: запустить панель администратора
        } else {
            console.log(`go USER`); // test
            this.setState({ showLogin: false })
        }
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
                        doStart={this.doStart}
                    />}
                {this.state.showRegistration &&
                    <Registration
                        doClose={this.doCloseRegistration}
                    />}
            </>
        )
    }
}