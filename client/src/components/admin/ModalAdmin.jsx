/* eslint-disable default-case */
import React from "react";
import Flowers from "../flowers/Flowers";
import Pack from '../package/Pack';
import Related from '../related/Related';
import Bouqet from '../bouqet/Bouqet';
import Price from '../price/Price';
import Order from '../order/Order';
import Clients from '../clients/Clients';
import ButtonPanel from "./ButtonPanel";

export default class ModalAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textHeader: '',
            textFooter: '',
            textFooter2: 'срезка',
            showFlowers: true,
            showPackage: false,
            showRelated: false,
            showBouqet: false,
            showPrice: false,
            showOrder: false,
            showClients: false,

        }
        this.handleClickBtnPanel = this.handleClickBtnPanel.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
    }

    handleClickClose() {
        this.props.doClose();
    }

    // todo: Добавить соответствующие компоненты

    handleClickBtnPanel(e) {
        switch (e.target.dataset.btn) {
            case 'flowers': console.log('flowers');
                this.setState({
                    textFooter2: `срезка`,
                    showFlowers: true,
                    showPackage: false,
                    showRelated: false,
                    showBouqet: false,
                    showPrice: false,
                    showOrder: false,
                    showClients: false,
                })
                break;

            case 'package': console.log('package');
                this.setState({
                    textFooter2: `упаковка`,
                    showFlowers: false,
                    showPackage: true,
                    showRelated: false,
                    showBouqet: false,
                    showPrice: false,
                    showOrder: false,
                    showClients: false,
                })
                break;

            case 'related': console.log('related');
                this.setState({
                    textFooter2: `сопутствующие`,
                    showFlowers: false,
                    showPackage: false,
                    showRelated: true,
                    showBouqet: false,
                    showPrice: false,
                    showOrder: false,
                    showClients: false,
                })
                break;

            case 'bouqet': console.log('bouqet');
                this.setState({
                    textFooter2: `букеты`,
                    showFlowers: false,
                    showPackage: false,
                    showRelated: false,
                    showBouqet: true,
                    showPrice: false,
                    showOrder: false,
                    showClients: false,
                })
                break;

            case 'price': console.log('price');
                this.setState({
                    textFooter2: `цена`,
                    showFlowers: false,
                    showPackage: false,
                    showRelated: false,
                    showBouqet: false,
                    showPrice: true,
                    showOrder: false,
                    showClients: false,
                })
                break;

            case 'order': console.log('order');
                this.setState({
                    textFooter2: `заказы`,
                    showFlowers: false,
                    showPackage: false,
                    showRelated: false,
                    showBouqet: false,
                    showPrice: false,
                    showOrder: true,
                    showClients: false,
                })
                break;

            case 'clients': console.log('clients');
                this.setState({
                    textFooter2: `клиенты`,
                    showFlowers: false,
                    showPackage: false,
                    showRelated: false,
                    showBouqet: false,
                    showPrice: false,
                    showOrder: false,
                    showClients: true,
                })
                break;
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
                    <div className="modal_window" >
                        <header className="modal_window_head" >
                            <span> {this.state.textHeader}</span>
                            <div className="close_modal" >
                                <div
                                    className="close_modal_cross"
                                    onClick={this.handleClickClose}
                                >
                                    &#10006;
                                </div>
                            </div>
                        </header>
                        <div className="modal_windo_context" >
                            <ButtonPanel
                                handleClickBtnPanel={this.handleClickBtnPanel}
                            />
                            {this.state.showFlowers &&
                                <Flowers />
                            }

                            {this.state.showPackage &&
                                <Pack />
                            }

                            {this.state.showRelated &&
                                <Related />
                            }

                            {this.state.showBouqet &&
                                <Bouqet />
                            }

                            {this.state.showPrice &&
                                <Price />
                            }

                            {this.state.showOrder &&
                                <Order />
                            }

                            {this.state.showClients &&
                                <Clients />
                            }


                        </div>
                        <footer className="modal_window_footer" >
                            <span> {this.state.textFooter}: <b>{this.state.textFooter2}</b> </span>
                        </footer>
                    </div>

                </div>
            </>
        )
    }
}