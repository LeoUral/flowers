const ApiError = require('../../error/ApiError')
const createDocument = require('../createDocument')

/**
 * Добавление новой формы сопутствующих
 * @param {*} db 
 * @param {*} formRelated 
 * @returns 
 */
module.exports = async (db, formRelated) => {
    try {
        const resultCreate = await createDocument(db, 'related', 'form');

        if (!formRelated) {
            return ApiError.badRequest('Ошибка добавления новой формы сопутствующих товаров (addForm.js)')
        }

        const result = await db.collection('related')
            .updateOne({ _id: 'form' }, { $addToSet: { data: formRelated } })

        console.log(`Форма: ${formRelated}, добавлена`);

        return result;

    } catch (err) {
        console.log(`Ошибка (addForm.js): `, err);
        return (ApiError.badRequest('Ошибка добавления новой формы сопутствующих товаров (addForm.js)'))
    }
}