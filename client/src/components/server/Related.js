import { URL, PORT } from './_variables'
import doCheck from './doCheck'

class Related {
    constructor() {
        this.URL = URL;
        this.PORT = PORT;
    }

    /**
     * Добавление новой позиции сопутствующих в DB
     * @param {Object} data данные по цветку
     * @returns 
     */
    async create(data) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/related/create`

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
 * @returns {Object} Назвазние файла на сервере
 */
    async createPhoto(formData) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/related/create_photo`

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

    /**
     * Добавление группы упаковки в базу
     * @param {String} data 
     * @returns 
     */
    async createGroup(data) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/related/group`

            const userBody = {
                group: data
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
     * Добавление участника в базу
     * @param {String} data 
     * @returns 
     */
    async createDescription(data) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/related/description`

            const userBody = {
                type: data
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
     * Добавление формы упаковки в базу
     * @param {String} data 
     * @returns 
     */
    async createForm(data) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/related/form`

            const userBody = {
                color: data
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
     * Добавление единицы измерения упаковки в базу
     * @param {String} data 
     * @returns 
     */
    async createSize(data) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/related/size`

            const userBody = {
                units: data
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
     * Получение массива раздела упаковки (группа, цвет, тип, ед.изм)
     * коллекция: package
     * @param {String} docum ID документа из базы (color, type, group, units)
     * @returns 
     */
    async getOne(docum) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/related/get_one`
            const userBody = {
                collection: 'package',
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
     * Получаем все позиции упаковки
     * @returns 
     */
    async getAll() {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/related/get_all`
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

            console.log(`result package:::: `, result); // test
            return result;

        } catch (err) {
            console.log(`ОШИБКА: `, err);
            console.log({ messageError: err.message })
            return []
        }
    }

    /**
    * перемеещние в архив одной позиции срезки по ID
    * @returns 
    */
    async deletePackOne(id) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/related/delete`
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

            console.log(`result del:::: `, result); // test
            return result;

        } catch (err) {
            console.log(`ОШИБКА: `, err);
            return { messageError: err.message }
        }
    }


}
export default new Related();