require('dotenv').config();
const { log } = require('console');
const crypto = require("crypto");
const ApiError = require('../error/ApiError');
const addNewUser = require('../model/users/addNewUser');
const checkLogin = require('../model/users/checkLogin');
const getUserData = require('../model/users/getUserData');
const SECRET = process.env.SECRET || 'Jc4EUsxLADBu_sm0g2lnX'

class UserController {

    /**
     * Регистрация нового клиента
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async registration(req, res, next) {
        const {
            login,
            password,
            name,
            surname,
            patron,
            phone,
            gender
        } = req.body;
        const db = req.db;

        try {
            //*: проверить логин на наличие (если true - ошибка, false - регистрируем)
            const checkLogo = await checkLogin(db, login);

            if (checkLogo) {
                return next(ApiError.badRequest('Такой пользователь уже есть'))
            }

            //*: Хешировать пароль
            const confusionPassword = crypto.createHash("sha256", SECRET).update(password).digest("hex");

            //*: Сохранить весть объект в DB, collection: users
            const data = {
                _id: login,
                login: login,
                password: confusionPassword,
                name: name,
                surname: surname,
                patron: patron,
                phone: phone,
                gender: gender
            }
            const resultCreateNewUser = await addNewUser(db, data); // off

            // res.json({ 'registration': 'OK' })
            res.json(resultCreateNewUser) //* response: {"acknowledged": true, "insertedId": "LEO"} / {"messageError": "Такой пользователь уже есть"}

        } catch (err) {
            console.log(`Ошибка при регистрации: `, err);
            next(ApiError.internal('Ошибка при регистрации'))
        }
    }

    /**
     * Вход в систему
     * @param {*} req 
     * @param {*} res 
     */
    async login(req, res, next) {
        const { login, password } = req.body;
        const db = req.db;

        //*: получить данные пользователя по логину
        const userData = await getUserData(db, login);

        //*: хешировать введенный пароль
        const confusionPassword = crypto.createHash("sha256", SECRET).update(password).digest("hex");

        //*: сравнить пароли
        if (!userData || userData.password !== confusionPassword || userData.login !== login) {
            console.log(`НЕТ ВХОДА`);
            next(ApiError.badRequest('Нет входа'))
        }

        //todo: если сходятся пароли и логин, то созадть сессию
        console.log(`Вход в систему, созадть сессию`);

        res.json({ server: 'вход' })

    }

    /**
     * Проверка на наличие сессии
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async check(req, res, next) {

        // const { id } = req.query
        // проверка работы ошибок. Удалить! // test
        // if (!id) {
        //     return next(ApiError.badRequest('Не задан ID'))
        // }
        res.json('check')

    }

}

module.exports = new UserController();