import Users from './Users'

const doCheck = async () => {
    try {
        return (async () => {
            return await Users.check()
        })()
    } catch (err) {
        console.log(`Ошибка сессии: `, err);
        return false;
    }
}

export default doCheck;