class BasketController {

    /**
     * Создание позиции заказа в корзине
     * @param {*} req 
     * @param {*} res 
     */
    async create(req, res) {

    }

    /**
     * Обновление выбранной позиции в корзине
     * @param {*} req 
     * @param {*} res 
     */
    async update(req, res) {

    }

    /**
     * Получение выбранной позиции из корзины
     * @param {*} req 
     * @param {*} res 
     */
    async getOne(req, res) {

        res.json('basket get one')
    }

    /**
     * Получение всех заказв(позиций) из корзины
     * @param {*} req 
     * @param {*} res 
     */
    async getAll(req, res) {

    }

    /**
     * Удаление выбранной позиции из корзины
     * @param {*} req 
     * @param {*} res 
     */
    async deleteOne(req, res) {

    }
}

module.exports = new BasketController()