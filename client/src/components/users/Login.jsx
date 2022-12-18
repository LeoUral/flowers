import React from "react";
import ModalMiddle from "../ModalMiddle";

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <ModalMiddle
                    textHeader={`Вход в систему 'Рыжая лавка'`}
                    textFooter=''
                />
            </>
        )
    }
}

