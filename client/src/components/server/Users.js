import { URL, PORT } from './_variables'

class Users {
    constructor() {
        this.URL = URL
        this.PORT = PORT
    }

    /**
     * Отправляем данные пользователя на регистрацию
     * @param {Object} data Данные пользователя
     * @returns {Object} 
     */
    async sendDataUsers(data) {
        try {
            const url = `${this.URL}${PORT}/api/user/registration`
            const userBody = {
                login: data.login,
                password: data.password,
                name: data.name,
                surname: data.surname,
                patron: data.patron,
                phone: data.phone,
                gender: data.gender,
            }

            if (!data.login || data.password) {
                throw new Error('Не указан логин или пароль')
            }

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userBody)
            })

            const result = await response.json();

            if (result.messageError) {
                console.log(`>>> result ERROR: `, result.messageError);
                throw new Error(result.messageError)
            }

            return result;

        } catch (err) {
            console.log(`ОШИБКА: `, err);
            return { messageError: err.message }
        }
    }

    /**
     * Отправляем данные для входа в систему
     * @param {String} login 
     * @param {String} password 
     * @returns {Object} Object (sessionId / messageError)
     */
    async sendDataLogin(login, password) {
        try {
            const url = `${this.URL}${PORT}/api/user/login`
            const userBody = {
                login: login,
                password: password,
            }

            if (!login || !password) {
                throw new Error('Не указан логин или пароль')
            }

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userBody)
            })

            const result = await response.json();

            if (result.messageError) {
                console.log(`>>> result ERROR: `, result.messageError);
                throw new Error(result.messageError)
            }

            return result;

        } catch (err) {
            console.log(`ОШИБКА: `, err);
            return { messageError: err.message }
        }
    }
}
export default new Users();