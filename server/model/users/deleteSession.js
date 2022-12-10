const ApiError = require('../../error/ApiError')


module.exports = async (db, login) => {

    console.log(`Delete seesion with login: ${login}`); // test

    try {
        return (async () => {
            const result = await db.collection('users')
                .updateOne({ _id: 'sessions' }, { $unset: { [login]: 1 } })

            return result
        })()
    } catch (err) {
        console.log(`Ошибка (deleteSession.js): `, err);
        return (ApiError.badRequest('Ошибка при удалении сессии в DB (deleteSession.js)'))
    }

}