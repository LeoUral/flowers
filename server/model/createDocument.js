const ApiError = require('../error/ApiError')

/**
 * Проверка и создание документа
 * @param {Object} db 
 * @param {String} nameCollection название коллекции
 * @param {String} nameDocument id документа
 * @returns {Boolean} true / false (создан новый / был старый)
 */
module.exports = async (db, nameCollection, nameDocument) => {

    try {
        const resultDocum = await db.collection(nameCollection)
            .findOne({ _id: nameDocument })

        if (!resultDocum) {
            const result = await db.collection(nameCollection)
                .insertOne({ _id: nameDocument })

            return true
        }

        return false


    } catch (err) {
        console.log(`Ошибка (createDocument.js): `, err);
        return (ApiError.badRequest('Ошибка создания документа в DB (createDocument.js)'))
    }

}