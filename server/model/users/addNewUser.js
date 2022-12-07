const ApiError = require('../../error/ApiError')


/**
 * Создаем новго пользователя в DB
 * @param {Object} db объект DB
 * @param {Object} data  данные пользователя при регистрации
 * @return {Object} результат добавления пользователя
 */
module.exports = async (db, data) => {
    try {
        return (async () => {
            const result = await db.collection('users')
                .insertOne(data)
            console.log(`Создаем новго пользователя: `, data.login); // test

            return result;
        })()
    } catch (err) {
        console.log(`Ошибка (addNewUser.js): `, err);
        return next(ApiError.badRequest('Ошибка добавления новго пользователя (addNewUser.js)'))
    }
}