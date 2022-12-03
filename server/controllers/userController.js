const ApiError = require('../error/ApiError')

class UserController {

    /**
     * Регистрация нового клиента
     * @param {*} req 
     * @param {*} res 
     */
    async registration(req, res) {
        const {
            login,
            password,
            name,
            surname,
            patron,
            phone,
            gender
        } = req.body

        const db = req.db;
    }

    /**
     * Вход в систему
     * @param {*} req 
     * @param {*} res 
     */
    async login(req, res) {

    }

    /**
     * Проверка на правильность входа
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