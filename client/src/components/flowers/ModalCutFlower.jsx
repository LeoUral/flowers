import React from 'react'
import parseDate from '../parseDate';
import { URL_IMG_FLOWER } from '../variables'


const ModalCutFlower = ({ textHeader, textFooter, closeModal, cutDataFlower }) => {

    console.log(`cutDataFlower::: `, cutDataFlower); // test

    const imgSrc = `${URL_IMG_FLOWER}${cutDataFlower.data.imageFlower}`

    return (
        <>
            <div className="modal" >
                <div className="shadow shadow-cut">

                </div>
                <div className="modal_middle_window modal-fixed" >
                    <header className="modal_middle_window_head" >
                        <span> {cutDataFlower.data.name}</span>
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
                                    <span> Наименование:</span>
                                    <span> {cutDataFlower.data.name} </span>
                                </div>
                                <div>
                                    <span> Производитель:</span>
                                    <span> {cutDataFlower.data.manufacturer} </span>
                                </div>
                                <div>
                                    <span> Сорт:</span>
                                    <span> {cutDataFlower.data.grade} </span>
                                </div>
                                <div>
                                    <span> Рост:</span>
                                    <span> {cutDataFlower.data.growth} </span>
                                </div>
                                <div>
                                    <span> Дата поставки: </span>
                                    <span> {parseDate(cutDataFlower.data.datePurchase)} </span>
                                </div>
                                <div>
                                    <span> Цена поставки:</span>
                                    <span> {cutDataFlower.data.pricePurchase} руб. </span>
                                </div>
                                <div>
                                    <span> Кол-во на складе:</span>
                                    <span> {cutDataFlower.data.quantity} шт. </span>
                                </div>
                                <div>
                                    <span> ИТОГО:</span>
                                    <span> {+cutDataFlower.data.pricePurchase * +cutDataFlower.data.quantity} руб. </span>
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

export default ModalCutFlower;