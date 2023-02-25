const ApiError = require('../../error/ApiError')
const createDocument = require('../createDocument')

/**
 * Добавление нового описания сопутствующих
 * @param {*} db 
 * @param {*} description 
 * @returns 
 */
module.exports = async (db, description) => {
    try {
        const resultCreate = await createDocument(db, 'related', 'description');

        if (!description) {
            return ApiError.badRequest('Ошибка добавления нового описание сопутствующих товаров (addDescription.js)')
        }

        const result = await db.collection('related')
            .updateOne({ _id: 'description' }, { $addToSet: { data: description } })

        console.log(`Описание: ${description}, добавлено`);

        return result;

    } catch (err) {
        console.log(`Ошибка (addDescription.js): `, err);
        return (ApiError.badRequest('Ошибка добавления нового описание сопутствующих товаров (addDescription.js)'))
    }
}