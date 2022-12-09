const ApiError = require('../../error/ApiError')
const uuid = require('uuid');
const createDocument = require('../createDocument');

/**
 * Создание сессии
 * @param {Object} db ОБъект DB
 * @param {String} login login пользователя
 * @returns {String} sessionID (ID сессии)
 */
module.exports = async (db, login) => {
    try {
        return (async () => {
            const resultCreateDocument = await createDocument(db, 'users', 'sessions') // проверяем наличие, если нет, то созадем документ
            console.log(`${resultCreateDocument ? 'Создан новй документ' : 'Документ уже есть'}`); // test

            const sessionId = uuid.v4();
            console.log(`session ID::::: `, sessionId); // test

            const result = await db.collection('users')
                .updateOne(
                    { _id: 'sessions' },
                    { $set: { [login]: { sessionId: sessionId, time: Date.now() } } }

                )

            return sessionId;
        })()

    } catch (err) {
        console.log(`Ошибка (createSession.js): `, err);
        return next(ApiError.badRequest('Ошибка записи сессии в DB (createSession.js)'))
    }

}