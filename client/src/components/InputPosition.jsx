import React from 'react';


const InputPosition = ({ dataSet, doChange }) => {


    return (
        <>
            <div className='box_flex'>
                <div className='text_box'> : </div>
                <div className='input_box'>
                    <input
                        type="text"
                        className='input_login'
                        data-change={dataSet}
                        onChange={doChange}
                    // value={login}
                    />
                </div>
            </div>

        </>
    )
}

export default InputPosition