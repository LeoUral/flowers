import React from 'react'
import parseDate from '../parseDate';
import { URL_IMG_RELATED } from '../variables'


const ModalRelated = ({ textHeader, textFooter, closeModal, relatedData }) => {

    const imgSrc = `${URL_IMG_RELATED}${relatedData.data.photo}`

    return (
        <>
            <div className="modal" >
                <div className="shadow shadow-cut">

                </div>
                <div className="modal_middle_window modal-fixed" >
                    <header className="modal_middle_window_head" >
                        <span> {relatedData.data.groupRelated} - {relatedData.data.descriptionRelated}</span>
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
                                    <span> Группа сопутствующих товаров:</span>
                                    <span> {relatedData.data.groupRelated} </span>
                                </div>
                                <div>
                                    <span> Описание:</span>
                                    <span> {relatedData.data.descriptionRelated} </span>
                                </div>
                                <div>
                                    <span> Форма:</span>
                                    <span> {relatedData.data.formRelated} </span>
                                </div>
                                <div>
                                    <span> Размер:</span>
                                    <span> {relatedData.data.sizeRelated} </span>
                                </div>
                                <div>
                                    <span> Дата поставки: </span>
                                    <span> {parseDate(relatedData.data.datePurchase)} </span>
                                </div>
                                <div>
                                    <span> Цена поставки:</span>
                                    <span> {relatedData.data.pricePurchase} руб. </span>
                                </div>
                                <div>
                                    <span> Кол-во на складе:</span>
                                    <span> {relatedData.data.quantity} {relatedData.data.units} </span>
                                </div>
                                <div>
                                    <span> ИТОГО:</span>
                                    <span> {+relatedData.data.pricePurchase * +relatedData.data.quantity} руб. </span>
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

export default ModalRelated;