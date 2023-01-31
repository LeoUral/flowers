/* eslint-disable jsx-a11y/alt-text */
import React from 'react'


/**
 * Компонент сохранения рисунка
 * @param {String} srcImg  полный URL до рисунка с названием
 * @returns {Function} handleChangeFile - Object file
 */
const SaveImage = ({ handleChangeFile, srcImg }) => {

    return (
        <>
            <div className='new_flower_box' >
                <form
                    // ref='uploadForm'
                    id='uploadForm'
                    encType="multipart/form-data"
                >
                    <input
                        className='input_file'
                        type='file'
                        name='img'
                        onChange={handleChangeFile}
                    />
                </form>
            </div>
            <div className='new_flower_box_img' >
                <img
                    className='img_flower'
                    src={srcImg}
                />
            </div>
        </>
    )

}

export default SaveImage;