/* eslint-disable default-case */
import React from "react";
import InputDataRegistration from "./InputDataRegistration";

export default class ModalMiddleRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textHeader: '',
            textFooter: '',
            name: '',
            surname: '',
            patron: '',
            phone: '',
            gender: '',
            chacked: true,
        }
        this.doChange = this.doChange.bind(this);
        this.changeGender = this.changeGender.bind(this);
    }


    doChange(e) {
        switch (e.target.dataset.change) {
            case 'name': this.setState({ name: e.target.value })
                break

            case 'surname': this.setState({ surname: e.target.value })
                break

            case 'patron': this.setState({ patron: e.target.value })
                break

            case 'phone': this.setState({ phone: e.target.value })
                break

            case 'button_save': console.log(`CLICK button_save`)
                this.props.doSendRegistration({
                    name: this.state.name,
                    surname: this.state.surname,
                    patron: this.state.patron,
                    phone: this.state.phone,
                    gender: this.state.gender,
                })
                break

            case 'gender': this.changeGender(e.target.value)
                break
        }

        setTimeout(() => {
            console.log(`>>>`, e.target.dataset.change);
            console.log(e.target.value);
        })
    }

    changeGender(resultValue) {

        if (resultValue === 'man') {
            this.setState({
                chacked: true,
                gender: 'man'
            })
        }

        if (resultValue === 'woman') {
            this.setState({
                chacked: false,
                gender: 'woman'
            })
        }
    }

    componentDidMount() {
        this.setState({
            textHeader: this.props.textHeader,
            textFooter: this.props.textFooter,
        })
    }

    render() {
        return (
            <>
                <div className="modal" >
                    <div className="shadow" >

                    </div>
                    <div className="modal_middle_window2" >
                        <header className="modal_middle_window_head" >
                            <span> {this.state.textHeader}</span>
                            <div className="close_modal" >
                                <div className="close_modal_cross" onClick={this.props.doClose} > &#10006; </div>
                            </div>
                        </header>
                        <div className="modal_middle_windo_context" >
                            <InputDataRegistration
                                doChange={this.doChange}
                                checked={this.state.chacked}
                            />
                        </div>
                        <footer className="modal_middle_window_footer" >
                            <span> {this.state.textFooter}</span>
                        </footer>
                    </div>

                </div>
            </>
        )
    }
}