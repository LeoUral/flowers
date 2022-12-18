import React from "react";
import InputDataUser from "./users/InputDataUser";

export default class ModalMiddle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textHeader: '',
            textFooter: '',
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
                            <InputDataUser />
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