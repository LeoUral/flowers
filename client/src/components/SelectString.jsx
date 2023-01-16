import React, { useState, useEffect } from 'react';

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