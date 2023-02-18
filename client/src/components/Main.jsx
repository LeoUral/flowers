import React from 'react'
import NaviBar from './NaviBar';
import Login from './users/Login';
import Registration from './users/Registration';
import Users from './server/Users';
import Admin from './admin/Admin';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: true,
            showRegistration: false,
            showAdmin: false,
            login: '',
        }

        this.doRegistration = this.doRegistration.bind(this);
        this.doCloseRegistration = this.doCloseRegistration.bind(this);
        this.doStart = this.doStart.bind(this);
        this.doExit = this.doExit.bind(this);
        this.doSignIn = this.doSignIn.bind(this);
        this.doCloseAdmin = this.doCloseAdmin.bind(this);
    }

    doCloseAdmin() {
        this.setState({ showAdmin: false })
        localStorage.removeItem('login');
        this.doSignIn();
    }

    doExit() {
        try {
            (async () => {
                // todo: сделать выход из системы с удалением сессии. На backend функция есть
                console.log(`Exit from system`); // test   
                const result = await Users.logOut(localStorage.getItem('login'))
                this.setState({ login: '' })
                localStorage.removeItem('login')
                console.log(`RESULT: `, result); // test
            })()
        } catch (err) {
            console.log(`Ошибка при выходе из системы`);
        }

    }

    doSignIn() {
        this.setState({
            showLogin: true,
        })
    }

    doStart(key) {

        if (key === 'admin') {
            console.log(`go ADMIN`); // test
            this.setState({
                showLogin: false,
                showAdmin: true,
                login: localStorage.getItem('login')
            })
        } else {
            console.log(`go USER`); // test
            this.setState({
                showLogin: false,
                login: localStorage.getItem('login')
            })
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

    componentDidMount() {
        if (localStorage.getItem('session')) {
            this.setState({
                showLogin: false,
                login: localStorage.getItem('login'),
            })
        }

        //! на время написания, после удалить
        if (localStorage.getItem('login') === 'Admin') {
            this.setState({
                showLogin: false,
                showAdmin: true,
            })
        }
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
                {this.state.showAdmin &&
                    <Admin
                        doClose={this.doCloseAdmin}
                    />
                }

                <NaviBar
                    login={this.state.login}
                    handleExit={this.doExit}
                    handleSignIn={this.doSignIn}
                />
            </>
        )
    }
}