/* eslint-disable default-case */
import React from "react";
import InputDataUser from "./users/InputDataUser";

export default class ModalMiddle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textHeader: '',
            textFooter: '',
            login: '',
            password: '',
        }
        this.doChange = this.doChange.bind(this);

    }

    doChange(e) {
        switch (e.target.dataset.change) {
            case 'login': this.setState({ login: e.target.value })
                break

            case 'password': this.setState({ password: e.target.value })
                break

            case 'button_login': console.log(`CLICK LOGIN`)
                break

            case 'button_registration': console.log(`CLICK REGISTRATION`)
                break
        }

        setTimeout(() => {
            console.log(`login: `, this.state.login); // test
            console.log(`password: `, this.state.password); //test
        })
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
                    <div className="shadow">

                    </div>
                    <div className="modal_middle_window" >
                        <header className="modal_middle_window_head" >
                            <span> {this.state.textHeader}</span>
                            <div className="close_modal" >
                                <div className="close_modal_cross" > &#10006; </div>
                            </div>
                        </header>
                        <div className="modal_middle_windo_context" >
                            <InputDataUser
                                doChange={this.doChange}
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