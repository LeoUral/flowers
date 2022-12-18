import React, { useState } from 'react';


const InputDataUser = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const doChangeLogin = (e) => {
        setLogin(e.target.value)
        console.log(`E::: `, login); // test
    }

    const doChangePassword = (e) => {
        setPassword(e.target.value)
        console.log(`Pass::: `, login); // test
    }

    return (
        <>
            <div className='box_flex'>
                <div className='text_box'> LOGIN: </div>
                <div className='input_box'>
                    <input
                        type="text"
                        className='input_login'
                        onChange={doChangeLogin}
                        value={login}
                    />
                </div>
            </div>

            <div className='box_flex'>
                <div className='text_box'>PASSWOD: </div>
                <div className='input_box'>
                    <input
                        type="text"
                        className='input_login'
                        onChange={doChangePassword}
                        value={password}
                    />
                </div>
            </div>

        </>
    )
}

export default InputDataUser