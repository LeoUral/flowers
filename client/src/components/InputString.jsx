import React, { useState, useEffect } from 'react';

const InputString = ({ title, placeholder, keyInput, doChangeSelect }) => {

    const [text, setText] = useState('');
    const [keyText, setKeyText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        setKeyText(e.target.dataset.key)
    }


    useEffect(() => {
        doChangeSelect({ key: keyText, text: text })
    }, [text, keyText])


    return (
        <>
            <div
                className='input_string_title'
            >
                {title}
            </div>
            <input
                type='text'
                className='input_string'
                placeholder={placeholder}
                data-key={keyInput}
                onChange={handleChange}
            />
        </>
    )
}

export default InputString;