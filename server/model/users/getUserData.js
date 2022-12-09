const ApiError = require('../../error/ApiError')

/**
 * Получаем данные пользователя
 * @param {Object} db Объект DB
 * @param {String} login login пользователя
 * @returns {Object} Регистрационный объект пользователя
 */
module.exports = async (db, login) => {
    try {
        return (async () => {

            return await db.collection('users')
                .findOne({ _id: login })

        })()
    } catch (err) {
        console.log(`Ошибка (getUserData.js): `, err);
        return next(ApiError.badRequest('Ошибка получения данных пользователя (getUserData.js)'))
    }

}