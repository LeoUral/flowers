const ApiError = require('../../error/ApiError')


module.exports = async (db, login) => {

    console.log(`Delete seesion with login: ${login}`); // test

    const result = await db.collection('users')
        .updateOne({ _id: 'sessions' }, { $unset: { [login]: 1 } })

    return result
}