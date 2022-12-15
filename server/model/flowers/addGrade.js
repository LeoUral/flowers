const ApiError = require('../../error/ApiError')
const createDocument = require('../createDocument')

/**
 * Добавление сорта цветка
 * @param {Object} db объект DB
 * @param {String} grade сорт цветка
 * @returns {Object} result
 */
module.exports = async (db, grade) => {
    try {
        return (async () => {
            const resultCreate = await createDocument(db, 'flowers', 'grade');

            if (!grade) {
                console.log(`Не указан сорт`); // test
                return ApiError.badRequest('Ошибка добавления новго сорта цветка, не указан сорт (addGrade.js)')
            }

            const result = await db.collection('flowers')
                .updateOne({ _id: 'grade' }, { $addToSet: { data: grade } })

            console.log(`Сорт: ${grade}, добавлен`);

            return result;
        })()

    } catch (err) {
        console.log(`Ошибка (addGrade.js): `, err);
        return (ApiError.badRequest('Ошибка добавления новго сорта цветка (addGrade.js)'))
    }
}