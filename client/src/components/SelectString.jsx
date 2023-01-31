import React, { useState, useEffect } from 'react';

/**
 * Компонент выбора одного значения из массива занчений SELECT
 * @param {String} title заглавие
 * @param {String} keySelect ключ компонента - возвращается в объекте
 * @param {Array} arr массив занчений
 * @param {String} placeholder placeholder подпись в позиции
 * @returns {Function} doChangeSelect { key: key, text: select }
 */
const SelectString = ({ title, keySelect, arr, placeholder, doChangeSelect }) => {

    const [select, setSelect] = useState('')
    const [key, setKey] = useState('')

    const handleSelect = (e) => {
        setSelect(e.target.value);
        setKey(e.target.dataset.key)
    }

    useEffect(() => {
        doChangeSelect({ key: key, text: select })
    }, [select])

    return (
        <>
            <div
                className='select_string_title'
            >
                {title}
            </div>
            <select
                className='select_string'
                data-key={keySelect}
                onChange={handleSelect}
            >
                <option
                    className='placeholder_option'
                > {placeholder} </option>
                {
                    arr && arr.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <option>
                                    {item}
                                </option>
                            </React.Fragment>

                        )
                    })
                }
            </select>
        </>
    )
}

export default SelectString;