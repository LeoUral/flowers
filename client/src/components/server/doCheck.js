import Users from './Users'

const doCheck = async () => {
    try {
        return (async () => {
            const result = await Users.check()
            return result.session
        })()
    } catch (err) {
        console.log(`Ошибка сессии: `, err);
        return false;
    }
}

export default doCheck;