const ApiError = require('../../error/ApiError')
const createDocument = require('../createDocument')

/**
 * Добавление нового типа упаковки
 * @param {*} db 
 * @param {*} type 
 * @returns 
 */
module.exports = async (db, type) => {
    try {
        const resultCreate = await createDocument(db, 'package', 'type');

        if (!type) {
            return ApiError.badRequest('Ошибка добавления нового типа (addType.js)')
        }

        const result = await db.collection('package')
            .updateOne({ _id: 'type' }, { $addToSet: { data: type } })

        console.log(`Тип: ${type}, добавлена`);

        return result;

    } catch (err) {
        console.log(`Ошибка (addType.js): `, err);
        return (ApiError.badRequest('Ошибка добавления нового типа (addType.js)'))
    }
}