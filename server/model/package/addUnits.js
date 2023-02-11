const ApiError = require('../../error/ApiError')
const createDocument = require('../createDocument')

/**
 * Добавление новой единицы измерения
 * @param {*} db 
 * @param {*} units 
 * @returns 
 */
module.exports = async (db, units) => {
    try {
        const resultCreate = await createDocument(db, 'package', 'units');

        if (!units) {
            return ApiError.badRequest('Ошибка добавления единицы измерения (addUnits.js)')
        }

        const result = await db.collection('package')
            .updateOne({ _id: 'units' }, { $addToSet: { data: units } })

        console.log(`Единица измерения: ${units}, добавлена`);

        return result;

    } catch (err) {
        console.log(`Ошибка (addUnits.js): `, err);
        return (ApiError.badRequest('Ошибка добавления единицы измерения (addUnits.js)'))
    }
}