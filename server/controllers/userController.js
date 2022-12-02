const ApiError = require('../error/ApiError')

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {

        const { id } = req.query
        // проверка работы ошибок. Удалить! // test
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)

    }

}

module.exports = new UserController();