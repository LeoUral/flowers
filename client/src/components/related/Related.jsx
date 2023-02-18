import React from 'react'
import AddNewRelated from './AddNewRelated';

export default class Related extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div>
                    RELATED COMPONENT
                    <AddNewRelated />
                </div>
            </>
        )
    }
}