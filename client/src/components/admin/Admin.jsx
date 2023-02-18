import React from 'react'
import ModalAdmin from './ModalAdmin';

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <>
                <div>
                    <ModalAdmin
                        textHeader={`ADMIN PANEL`}
                        textFooter={`Рыжая лавка`}
                        doClose={this.props.doClose}
                    />
                </div>
            </>
        )
    }
}