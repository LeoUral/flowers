const ApiError = require('../../error/ApiError')
const createDocument = require('../createDocument')


/**
 * Добавление названия цветка в массив (список)
 * @param {Object} db объект DB
 * @param {String} name название цветка
 * @returns {Object} result
 */
module.exports = async (db, name) => {
    try {
        return (async () => {
            const resultCreate = await createDocument(db, 'flowers', 'name');

            if (!name) {
                return ApiError.badRequest('Ошибка добавления новго названия цветка, навазние не указано (addNameFlower.js)')
            }

            const result = await db.collection('flowers')
                .updateOne({ _id: 'name' }, { $addToSet: { data: name } })

            console.log(`Название: ${name}, добавлено`);

            return result;
        })()

    } catch (err) {
        console.log(`Ошибка (addNameFlower.js): `, err);
        return (ApiError.badRequest('Ошибка добавления новго названия цветка (addNameFlower.js)'))
    }

}