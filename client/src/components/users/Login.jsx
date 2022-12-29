import React from "react";
import ModalMiddleLogin from "./ModalMiddleLogin";
import Users from "../server/Users";

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.doLogin = this.doLogin.bind(this);
    }

    async doLogin(login, password) {
        try {
            (async () => {
                const result = await Users.sendDataLogin(login, password)

                console.log(`RESULT LOGIN:::: `, result); // test

                if (result.messageError) {
                    console.log(result.messageError);
                    localStorage.removeItem('session');
                }

                if (result.sessionId) {
                    localStorage.setItem('session', result.sessionId)
                    console.log(`Вход разрешен`);
                }

            })()
        } catch (err) {
            console.log(`Ошибка входа.`);
        }
    }

    render() {
        return (
            <>
                <ModalMiddleLogin
                    textHeader={`Вход в систему 'Рыжая лавка'`}
                    textFooter=''
                    doLogin={this.doLogin}
                    doRegistration={this.props.doRegistration}
                />
            </>
        )
    }
}

