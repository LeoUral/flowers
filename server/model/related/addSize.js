const ApiError = require('../../error/ApiError')
const createDocument = require('../createDocument')

/**
 * Добавление нового размера сопутствующих
 * @param {*} db 
 * @param {*} sizeRelated 
 * @returns 
 */
module.exports = async (db, sizeRelated) => {
    try {
        const resultCreate = await createDocument(db, 'related', 'size');

        if (!sizeRelated) {
            return ApiError.badRequest('Ошибка добавления нового размера сопутствующих товаров (addSize.js)')
        }

        const result = await db.collection('related')
            .updateOne({ _id: 'size' }, { $addToSet: { data: sizeRelated } })

        console.log(`Размер: ${sizeRelated}, добавлена`);

        return result;

    } catch (err) {
        console.log(`Ошибка (addSize.js): `, err);
        return (ApiError.badRequest('Ошибка добавления нового размера сопутствующих товаров (addSize.js)'))
    }
}