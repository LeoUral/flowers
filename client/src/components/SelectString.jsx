import React, { useState, useEffect } from 'react';

const SelectString = ({ title, keySelect }) => {

    const handleSelect = (e) => {
        console.log(e.target.value, e.target.dataset.key);
    }

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
                <option> text 1 </option>
                <option> text 2 </option>
                <option> text 3 </option>
            </select>
        </>
    )
}

export default SelectString;