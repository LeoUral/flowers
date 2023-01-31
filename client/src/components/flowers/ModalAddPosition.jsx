import React from 'react'
import InputPosition from './InputPosition';

/**
 * Модальное окно для сохранения новой позиции для срезки
 * @param {*} param0 
 * @returns 
 */
const ModalAddPosition = ({ nameHeader, dataSet, doChange, doClickClose }) => {

    return (
        <>
            <div className='modal_add' >
                <div className='shadow_add'></div>
                <div className='modal_add_position'>

                    <header className='modal_add_position_head' >
                        <span> {nameHeader} </span>
                        <div className="close_modal"
                            onClick={doClickClose}
                        >
                            <div className="close_modal_cross" > &#10006; </div>
                        </div>
                    </header>

                    <div className='modal_add_position_context' >

                        <InputPosition
                            doChange={doChange}
                            dataSet={dataSet}
                        />

                        <div className='box_flex_button'>
                            <div className='input_box_button'>
                                <input
                                    type="button"
                                    className='input_button'
                                    data-change='button_add'
                                    onClick={doChange}
                                    value={'Добавить'}
                                />
                            </div>

                        </div>


                    </div>

                </div>


            </div>
        </>
    )
}

export default ModalAddPosition;