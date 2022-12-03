class PriceController {

    /**
     * Создание коэффициентов для прайса
     * @param {*} req 
     * @param {*} res 
     */
    async create(req, res) {

    }

    /**
     * Обновление коэффициентов для прайса
     * @param {*} req 
     * @param {*} res 
     */
    async update(req, res) {

    }

    /**
     * Получение коэффициентов для прайса
     * @param {*} req 
     * @param {*} res 
     */
    async getOne(req, res) {

        res.json('price controller')
    }
}

module.exports = new PriceController()