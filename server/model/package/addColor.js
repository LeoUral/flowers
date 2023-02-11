const ApiError = require('../../error/ApiError')
const createDocument = require('../createDocument')

/**
 * Добавление нового цвета упаковки
 * @param {*} db 
 * @param {*} color 
 * @returns 
 */
module.exports = async (db, color) => {
    try {
        const resultCreate = await createDocument(db, 'package', 'color');

        if (!color) {
            return ApiError.badRequest('Ошибка добавления нового цвета (addColor.js)')
        }

        const result = await db.collection('package')
            .updateOne({ _id: 'color' }, { $addToSet: { data: color } })

        console.log(`Цвет: ${color}, добавлена`);

        return result;

    } catch (err) {
        console.log(`Ошибка (addColor.js): `, err);
        return (ApiError.badRequest('Ошибка добавления нового цвета (addColor.js)'))
    }
}