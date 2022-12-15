const ApiError = require('../../error/ApiError')
const createDocument = require('../createDocument')

/**
 * Добавление ростовки цветка
 * @param {Object} db объект DB
 * @param {String} growth ростовка цветка
 * @returns {Object} result
 */
module.exports = async (db, growth) => {
    try {
        return (async () => {
            const resultCreate = await createDocument(db, 'flowers', 'growth');

            if (!growth) {
                console.log(`Не указана ростовка`); // test
                return ApiError.badRequest('Ошибка добавления новой ростовки цветка, не указана ростовка (addGrowth.js)')
            }

            const result = await db.collection('flowers')
                .updateOne({ _id: 'growth' }, { $addToSet: { data: growth } })

            console.log(`Ростовка: ${growth}, добавлена`);

            return result;
        })()

    } catch (err) {
        console.log(`Ошибка (addGrowth.js): `, err);
        return (ApiError.badRequest('Ошибка добавления новой ростовки цветка (addGrowth.js)'))
    }
}