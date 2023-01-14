const ApiError = require('../error/ApiError')

/**
 * Получаем документ из DB
 * @param {Object} db объект DB
 * @param {String} collection Название библиотеки в DB
 * @param {String} document ID документа в указанной библиотеке
 * @returns {Object}
 */
module.exports = async (db, collection, document) => {
    try {
        return (async () => {
            const resultDocum = await db.collection(collection)
                .findOne({ _id: document })

            return resultDocum
        })()
    } catch (err) {
        console.log(`Ошибка (getDocument.js): `, err);
        return (ApiError.badRequest('Ошибка получения документа из DB (getDocument.js)'))
    }
}