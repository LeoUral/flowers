import React from 'react'
import Login from './users/Login';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        return (
            <>
                <Login />
            </>
        )
    }
}