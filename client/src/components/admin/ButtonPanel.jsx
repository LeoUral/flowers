import React from 'react'

const ButtonPanel = ({ handleClickBtnPanel }) => {

    return (
        <>
            <div className='button_panel' >
                <button
                    className='btn_panel'
                    data-btn='flowers'
                    onClick={handleClickBtnPanel}
                >
                    Срезка
                </button>
                <button
                    className='btn_panel'
                    data-btn='package'
                    onClick={handleClickBtnPanel}
                >
                    Упаковка
                </button>
                <button
                    className='btn_panel'
                    data-btn='related'
                    onClick={handleClickBtnPanel}
                >
                    Сопутствующие
                </button>
                <button
                    className='btn_panel'
                    data-btn='bouqet'
                    onClick={handleClickBtnPanel}
                >
                    Букеты
                </button>
                <button
                    className='btn_panel'
                    data-btn='price'
                    onClick={handleClickBtnPanel}
                >
                    Цена
                </button>
                <button
                    className='btn_panel'
                    data-btn='order'
                    onClick={handleClickBtnPanel}
                >
                    Заказы
                </button>
                <button
                    className='btn_panel'
                    data-btn='clients'
                    onClick={handleClickBtnPanel}
                >
                    Клиенты
                </button>
            </div>
        </>
    )
}

export default ButtonPanel;