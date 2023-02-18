import React from 'react'
import parseDate from '../parseDate';
import { URL_IMG_PACKAGE } from '../variables'


const ModalPackage = ({ textHeader, textFooter, closeModal, packData }) => {

    const imgSrc = `${URL_IMG_PACKAGE}${packData.data.photo}`

    return (
        <>
            <div className="modal" >
                <div className="shadow shadow-cut">

                </div>
                <div className="modal_middle_window modal-fixed" >
                    <header className="modal_middle_window_head" >
                        <span> {packData.data.groupPackage} - {packData.data.typePackage}</span>
                        <div className="close_modal" >
                            <div
                                className="close_modal_cross"
                                onClick={() => { closeModal() }}
                            >
                                &#10006;
                            </div>
                        </div>
                    </header>
                    <div className="modal_middle_windo_context" >
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ width: '45%', margin: '0 20px' }}>
                                <div>
                                    <span> Группа упаковки:</span>
                                    <span> {packData.data.groupPackage} </span>
                                </div>
                                <div>
                                    <span> Тип упаковки:</span>
                                    <span> {packData.data.typePackage} </span>
                                </div>
                                <div>
                                    <span> Цвет:</span>
                                    <span> {packData.data.colorPackage} </span>
                                </div>
                                <div>
                                    <span> Ед.изм:</span>
                                    <span> {packData.data.units} </span>
                                </div>
                                <div>
                                    <span> Дата поставки: </span>
                                    <span> {parseDate(packData.data.datePurchase)} </span>
                                </div>
                                <div>
                                    <span> Цена поставки:</span>
                                    <span> {packData.data.pricePurchase} руб. </span>
                                </div>
                                <div>
                                    <span> Кол-во на складе:</span>
                                    <span> {packData.data.quantity} {packData.data.units} </span>
                                </div>
                                <div>
                                    <span> ИТОГО:</span>
                                    <span> {+packData.data.pricePurchase * +packData.data.quantity} руб. </span>
                                </div>
                            </div>
                            <div style={{ width: '45%', margin: '0 20px' }}>
                                <img className='img_flower' src={imgSrc} />
                            </div>
                        </div>
                    </div>
                    <footer className="modal_middle_window_footer" >
                        <span> {textFooter}</span>
                    </footer>
                </div>

            </div>
        </>
    )
}

export default ModalPackage;