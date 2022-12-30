import React from 'react';
import ModalMiddleRegistration from './ModalMiddleRegistration';
import Users from '../server/Users'


export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.doSendRegistration = this.doSendRegistration.bind(this);
        this.saveRegistrationData = this.saveRegistrationData.bind(this);
    }

    async doSendRegistration(objRegistration) {
        console.log(`REGISTRATION::: `, objRegistration); // test
        // todo 1: проверка заполнения полей
        // todo 2: сохранение данных в DB        
        await this.saveRegistrationData(objRegistration)
        // todo 3: Информировать о новом пользователе или сообщить об ошибке
        // * 4: закрываем регистрацию, открываем вход в систему
        this.props.doClose()
    }

    /**
     * Сохранение данных нового пользователя
     * @param {Object} objReg 
     */
    async saveRegistrationData(objReg) {
        try {
            (async () => {
                const result = await Users.sendDataUsers(objReg)
                console.log(`RESULT::: `, result); // test
            })()
        } catch (err) {
            console.log(`Ошибка при сохранении данных регистрации: `, err);
        }
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