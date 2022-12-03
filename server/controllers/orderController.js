class OrderController {

    /**
     * Создание заказа
     * @param {*} req 
     * @param {*} res 
     */
    async create(req, res) {

    }

    /**
     * Обновление заказа
     * @param {*} req 
     * @param {*} res 
     */
    async update(req, res) {

    }

    /**
     * Получить все заказы
     * @param {*} req 
     * @param {*} res 
     */
    async getAll(req, res) {

    }

    /**
     * Получить выбранный заказ
     * @param {*} req 
     * @param {*} res 
     */
    async getOne(req, res) {

        res.json(' order Controller -> getOne ')
    }

    /**
     * Удалить выбранный закза
     * @param {*} req 
     * @param {*} res 
     */
    async deleteOne(req, res) {

    }
}

module.exports = new OrderController()