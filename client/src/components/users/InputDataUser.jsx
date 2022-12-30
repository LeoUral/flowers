import React from 'react';


const InputDataUser = ({ doChange }) => {


    return (
        <>
            <div className='box_flex'>
                <div className='text_box'> LOGIN: </div>
                <div className='input_box'>
                    <input
                        type="text"
                        className='input_login'
                        data-change='login'
                        onChange={doChange}
                    // value={login}
                    />
                </div>
            </div>

            <div className='box_flex'>
                <div className='text_box'>PASSWOD: </div>
                <div className='input_box'>
                    <input
                        type="password"
                        className='input_login'
                        data-change='password'
                        onChange={doChange}
                    // value={password}
                    />
                </div>
            </div>

            <div className='box_flex_button'>
                <div className='input_box_button'>
                    <input
                        type="button"
                        className='input_button'
                        data-change='button_login'
                        onClick={doChange}
                        value={'LOGIN'}
                    />
                </div>

                <div className='input_box_button'>
                    <input
                        type="button"
                        className='input_button'
                        data-change='button_registration'
                        onClick={doChange}
                        value={'REGISTRATION'}
                    />
                </div>
            </div>

        </>
    )
}

export default InputDataUser