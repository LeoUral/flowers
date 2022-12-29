import React from 'react';


const InputDataRegistration = ({ doChange, checked }) => {


    return (
        <>
            <div className='box_flex'>
                <div className='text_box'> Имя: </div>
                <div className='input_box'>
                    <input
                        type="text"
                        className='input_login'
                        data-change='name'
                        onChange={doChange}
                    // value={login}
                    />
                </div>
            </div>

            <div className='box_flex'>
                <div className='text_box'>Фамилия: </div>
                <div className='input_box'>
                    <input
                        type="text"
                        className='input_login'
                        data-change='surname'
                        onChange={doChange}
                    // value={password}
                    />
                </div>
            </div>

            <div className='box_flex'>
                <div className='text_box'>Отчество: </div>
                <div className='input_box'>
                    <input
                        type="text"
                        className='input_login'
                        data-change='patron'
                        onChange={doChange}
                    // value={password}
                    />
                </div>
            </div>

            <div className='box_flex'>
                <div className='text_box'>Телефон: </div>
                <div className='input_box'>
                    <input
                        type="text"
                        className='input_login'
                        data-change='phone'
                        onChange={doChange}
                    // value={password}
                    />
                </div>
            </div>

            <form>
                <div className='box_flex'>
                    <div className='text_box'>Пол: </div>
                    <div className='input_box'> Муж:
                        <input
                            type="radio"
                            className='input_login'
                            data-change='gender'
                            value='man'
                            checked={checked}
                            onChange={doChange}
                        // value={password}
                        />
                    </div>
                    <div className='input_box'> Жен:
                        <input
                            type="radio"
                            className='input_login'
                            data-change='gender'
                            value='woman'
                            checked={!checked}
                            onChange={doChange}
                        // value={password}
                        />
                    </div>
                </div>
            </form>

            <div className='box_flex_button'>
                <div className='input_box_button'>
                    <input
                        type="button"
                        className='input_button'
                        data-change='button_save'
                        onClick={doChange}
                        value={'SAVE'}
                    />
                </div>

            </div>

        </>
    )
}

export default InputDataRegistration