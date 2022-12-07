const ApiError = require('../../error/ApiError')

/**
 * Проверяем логин на наличие в DB
 * @param {*} db Объект DB
 * @param {String} Логин
 * @return {Boolean} true / false ( есть / нет)
 */
module.exports = async (db, login) => {
    try {
        return (async () => {
            const result = await db.collection('users')
                .findOne({ _id: login })

            if (!result) {
                return false
            }

            console.log(`Такой логин уже есть!`);
            return true
        })()

    } catch (err) {
        console.log(`Ошибка (checkLogin.js): `, err);
        return next(ApiError.badRequest('Ошибка обращения к DB (checkLogin.js)'))
    }
}