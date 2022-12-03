const ApiError = require('../error/ApiError')

class FlowersController {

    /**
     * Создание позиции цветка
     * @param {*} req 
     * @param {*} res 
     */
    async create(req, res) {

    }

    /**
     * Добавление Названия цветка в список
     * @param {*} req 
     * @param {*} res 
     */
    async createName(req, res) {

    }

    /**
     * Добавление Производителя цветка в список
     * @param {*} req 
     * @param {*} res 
     */
    async createManufacturer(req, res) {

    }

    /**
     * Добавление Сорта цветка в список
     * @param {*} req 
     * @param {*} res 
     */
    async createGrade(req, res) {

    }

    /**
     * Добавление Ростовки цветка в список
     * @param {*} req 
     * @param {*} res 
     */
    async createGrowth(req, res) {

    }

    /**
     * Добавление Фото цветка в список
     * @param {*} req 
     * @param {*} res 
     */
    async createPhoto(req, res) {

    }

    /**
     * Обновление позиции цветка
     * @param {*} req 
     * @param {*} res 
     */
    async update(req, res) {

    }

    /**
     * Получение всех позиций цветов
     * @param {*} req 
     * @param {*} res 
     */
    async getAll(req, res) {

        res.json('flowers all')
    }

    /**
     * Получение одной позиции выбранного цветка
     * @param {*} req 
     * @param {*} res 
     */
    async getOne(req, res) {

        res.json('flowers controller')
    }

    /**
     * Удаление выбранной позиции цветка
     * @param {*} req 
     * @param {*} res 
     */
    async deleteOne(req, res) {

    }
}

module.exports = new FlowersController();