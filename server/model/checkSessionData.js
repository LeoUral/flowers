require('dotenv').config();
const ApiError = require('../error/ApiError')

const TIMER = process.env.TIMER || 120
const timer = Number(TIMER) // Время жизни токена сессии в минутах

/**
 * Проверяем наличие сессии данного пользователя
 * @param {Object} db 
 * @param {String} login 
 * @param {String} sessionId 
 * @returns {Boolean} true / false (есть сессия / нет сессии)
 */
module.exports = async (db, login, sessionId) => {

    try {
        return (async () => {
            const result = await db.collection('users')
                .findOne({ _id: 'sessions' })
            console.log(`TIMER::::: `, (result[login]?.time - (Date.now() - 1000 * 60 * timer))); // test

            if (
                result[login]?.sessionId === sessionId &&
                result[login]?.time > (Date.now() - 1000 * 60 * timer)
            ) {
                return true
            } else {
                return false
            }
        })()

    } catch (err) {
        console.log(`Ошибка (getSessionData.js): `, err);
        return next(ApiError.badRequest('Ошибка при получении сессии в DB (getSessionData.js)'))
    }
}