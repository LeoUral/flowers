import React from 'react'
import AddNewPackage from './AddNewPackage';

export default class Package extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            package: []
        }
    }

    async componentDidMount() {

    }

    render() {
        return (
            <>
                <div>
                    PACKAGE COMPONENT
                    <AddNewPackage />
                </div>

            </>
        )
    }
}