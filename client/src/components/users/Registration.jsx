import React from 'react';
import ModalMiddleRegistration from './ModalMiddleRegistration';


export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.doSendRegistration = this.doSendRegistration.bind(this);
    }

    async doSendRegistration(objRegistration) {
        console.log(`REGISTRATION::: `, objRegistration); // test
    }


    render() {
        return (
            <div>
                <ModalMiddleRegistration
                    textHeader={`Регистрация в системе: 'Рыжая лавка'`}
                    textFooter=''
                    doClose={this.props.doClose}
                    doSendRegistration={this.doSendRegistration}
                />
            </div>
        )
    }
}