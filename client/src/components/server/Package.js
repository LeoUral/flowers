import { URL, PORT } from './_variables'
import doCheck from './doCheck'

class Package {
    constructor() {
        this.URL = URL;
        this.PORT = PORT;
    }

    /**
     * Добавление новой позиции упаковки в DB
     * @param {Object} data данные по цветку
     * @returns 
     */
    async createPackage(data) {

        if (!await doCheck()) {
            throw new Error('Нет авторизации')
        }
        try {
            const url = `${this.URL}${PORT}/api/package/create`

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
            const url = `${this.URL}${PORT}/api/package/create_photo`

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


}
export default new Package();