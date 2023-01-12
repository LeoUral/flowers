import React from 'react'
import AddNewFlower from './AddNewFlower';

export default class Flowers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div>
                    FLOWERS COMPONENT
                    <AddNewFlower />

                </div>
            </>
        )
    }
}