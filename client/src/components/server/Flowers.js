import { URL, PORT } from './_variables'
import doCheck from './doCheck'

class Flowers {
    constructor() {
        this.URL = URL
        this.PORT = PORT
    }

    /**
     * Добавление новой позиции цветка в DB
     * @param {Object} data данные по цветку
     * @returns 
     */
    async createFlower(data) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/flowers/create`

            const userBody = { data }

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
     * Сохранение рисунков на сервере
     * @param {Object} formData 
     * @returns {Object} Навазние файла на сервере
     */
    async createPhoto(formData) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/flowers/create_photo`

            const response = await fetch(url, {
                method: 'POST',
                // headers: {
                //     "Content-Type": "multipart/form-data"
                // },
                body: formData
            })

            const result = await response.json();

            if (result.messageError) {
                console.log(`>>> result ERROR: `, result.messageError);
                throw new Error(result.messageError)
            }
            console.log(`RESULT PHOTO: `, result); // test
            return result;

        } catch (err) {
            console.log(`ОШИБКА: `, err);
            return { messageError: err.message }
        }
    }

    async getOne(docum) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/flowers/get_one`
            const userBody = {
                collection: 'flowers',
                document: docum,
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
            console.log({ messageError: err.message })
            return []
        }
    }

    /**
     * Добавление позиции названия цветка
     * @param {String} data 
     * @returns 
     */
    async addName(data) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/flowers/create_name`
            const userBody = {
                name: data,
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
     * Добавление производителя в базу
     * @param {String} data 
     * @returns 
     */
    async addManufacturer(data) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/flowers/create_manufacturer`
            const userBody = {
                manufacturer: data,
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
     * Добавление позиции сорта в базу
     * @param {String} data 
     * @returns 
     */
    async addGrade(data) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/flowers/create_grade`
            const userBody = {
                grade: data,
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
     * Добавление позиции ростовки цветка
     * @param {*} data 
     * @returns 
     */
    async addGrowth(data) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/flowers/create_growth`
            const userBody = {
                growth: data,
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
     * Получить всю срезку цветов
     * @returns 
     */
    async getAllCut() {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/flowers/get_all`
            const userBody = {

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

            console.log(`result cut:::: `, result); // test
            return result;

        } catch (err) {
            console.log(`ОШИБКА: `, err);
            return { messageError: err.message }
        }
    }

    /**
     * перемеещние в архив одной позиции срезки по ID
     * @returns 
     */
    async deleteCutOne(id) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/flowers/delete`
            const userBody = {
                id: id
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

            // console.log(`result del:::: `, result); // test
            return result;

        } catch (err) {
            console.log(`ОШИБКА: `, err);
            return { messageError: err.message }
        }
    }

}
export default new Flowers();