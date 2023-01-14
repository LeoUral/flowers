import { URL, PORT } from './_variables'

class Flowers {
    constructor() {
        this.URL = URL
        this.PORT = PORT
    }

    /**
     * Получаем массив название цветов
     * @returns {Array} массив названия цветов
     */
    async getName() {
        try {
            const url = `${this.URL}${PORT}/api/flowers/get_name`
            const userBody = {
                collection: 'flowers',
                document: 'name',
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

            return result.result.data;

        } catch (err) {
            console.log(`ОШИБКА: `, err);
            return { messageError: err.message }
        }
    }

    /**
     * Получаем массив производителей
     * @returns 
     */
    async getManufacturer() {
        try {
            const url = `${this.URL}${PORT}/api/flowers/get_manufacturer`
            const userBody = {
                collection: 'flowers',
                document: 'manufacturer',
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

            return result.result.data;

        } catch (err) {
            console.log(`ОШИБКА: `, err);
            return { messageError: err.message }
        }
    }

    /**
     * Получаем массив сортов цветов
     * @returns 
     */
    async getGrade() {
        try {
            const url = `${this.URL}${PORT}/api/flowers/get_grade`
            const userBody = {
                collection: 'flowers',
                document: 'grade',
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

            return result.result.data;

        } catch (err) {
            console.log(`ОШИБКА: `, err);
            return { messageError: err.message }
        }
    }

    /**
     * Получаем массив ростовки цветов
     * @returns 
     */
    async getGrowth() {
        try {
            const url = `${this.URL}${PORT}/api/flowers/get_growth`
            const userBody = {
                collection: 'flowers',
                document: 'growth',
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

            return result.result.data;

        } catch (err) {
            console.log(`ОШИБКА: `, err);
            return { messageError: err.message }
        }
    }

}
export default new Flowers();