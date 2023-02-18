const ApiError = require('../../error/ApiError')
const createDocument = require('../createDocument')

/**
 * Добавление новой группы сопутствующих
 * @param {*} db 
 * @param {*} group 
 * @returns 
 */
module.exports = async (db, group) => {
    try {
        const resultCreate = await createDocument(db, 'related', 'group');

        if (!group) {
            return ApiError.badRequest('Ошибка добавления новой группы (addGroup.js)')
        }

        const result = await db.collection('related')
            .updateOne({ _id: 'group' }, { $addToSet: { data: group } })

        console.log(`Группа: ${group}, добавлена`);

        return result;

    } catch (err) {
        console.log(`Ошибка (addGroup.js): `, err);
        return (ApiError.badRequest('Ошибка добавления новой группы (addGroup.js)'))
    }
}