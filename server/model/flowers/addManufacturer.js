const ApiError = require('../../error/ApiError')
const createDocument = require('../createDocument')


/**
 * Добавление новго производителя цветка
 * @param {Object} db объект DB
 * @param {String} manufacturer  производител цветка
 * @returns {Object} result
 */
module.exports = async (db, manufacturer) => {
    try {
        return (async () => {
            const resultCreate = await createDocument(db, 'flowers', 'manufacturer');

            if (!manufacturer) {
                return ApiError.badRequest('Ошибка добавления новго производителя цветка, не указан производитель (addManufacturer.js)')
            }

            const result = await db.collection('flowers')
                .updateOne({ _id: 'manufacturer' }, { $addToSet: { data: manufacturer } })

            console.log(`Производитель: ${manufacturer}, добавлен`);

            return result;
        })()


    } catch (err) {
        console.log(`Ошибка (addManufacturer.js): `, err);
        return (ApiError.badRequest('Ошибка добавления новго производителя цветка (addManufacturer.js)'))
    }
}