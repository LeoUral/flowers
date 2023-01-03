import React from 'react'

const NaviBar = ({ handleExit, handleSignIn, login }) => {

    return (
        <>
            <div className='navibar' >
                <div className='navibar_left' >
                    <div className='navibar_logo' >
                        Рыжая лавка
                    </div>
                </div>


                <div className='navibar_right' >
                    <div className='navi_button'
                        onClick={handleSignIn}
                    >
                        {login ? login : 'Вход / Регистрация'}

                    </div>
                    <div className='navi_button'
                        onClick={handleExit}
                    >
                        Выход
                    </div>
                </div>
            </div>

        </>
    )
}


export default NaviBar