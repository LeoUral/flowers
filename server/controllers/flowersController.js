const ApiError = require('../error/ApiError');
const addGrade = require('../model/flowers/addGrade');
const addGrowth = require('../model/flowers/addGrowth');
const addManufacturer = require('../model/flowers/addManufacturer');
const addNameFlower = require('../model/flowers/addNameFlower');

class FlowersController {

    /**
     * Создание позиции цветка
     * @param {*} req 
     * @param {*} res 
     */
    async create(req, res) {

    }

    /**
     * Добавление названия цветка в список
     * @param {*} req 
     * @param {*} res 
     * @param {*} next
     * @returns {Object} result
     */
    async createName(req, res, next) {
        const name = req.body.name;
        const db = req.db;
        try {
            (async () => {
                const result = await addNameFlower(db, name)

                if (result?.status === 400) {
                    console.log(`result: `, result); // test
                    return next(ApiError.internal('Ошибка добавления новго названия цветка, навазние не указано (addNameFlower.js)'))
                }

                res.json({ server: 'Название цветка добавлено', name: name })
            })()
        } catch (err) {
            console.log(`Ошибка при добавлении названия цветка: `, err);
            return next(ApiError.internal('Ошибка при добавлении названия цветка'))
        }

    }

    /**
     * Добавление производителя цветка в список
     * @param {*} req 
     * @param {*} res 
     * @param {*} next
     * @returns {*} void
     */
    async createManufacturer(req, res, next) {
        const manufacturer = req.body.manufacturer;
        const db = req.db;
        try {
            (async () => {
                const result = await addManufacturer(db, manufacturer);

                if (result?.status === 400) {
                    console.log(`result: `, result); // test
                    return next(ApiError.internal('Ошибка добавления новго производителя цветка, не указан производитель (addManufacturer.js)'))
                }

                res.json({ server: 'Название производителя добавлено', manufacturer: manufacturer })
            })()
        } catch (err) {
            console.log(`Ошибка при добавлении названия цветка: `, err);
            return next(ApiError.internal('Ошибка при добавлении названия цветка'))
        }
    }

    /**
     * Добавление Сорта цветка в список
     * @param {*} req 
     * @param {*} res 
     * @param {*} next
     * @returns {*} void
     */
    async createGrade(req, res, next) {
        const grade = req.body.grade;
        const db = req.db;
        try {
            (async () => {
                const result = await addGrade(db, grade)

                if (result?.status === 400) {
                    console.log(`result: `, result); // test
                    return next(ApiError.internal('Ошибка добавления новго сорта цветка, не указан сорт (addGrade.js)'))
                }

                res.json({ server: 'Сорт цветка добавлен', grade: grade })
            })()

        } catch (err) {
            console.log(`Ошибка при добавлении сорта цветка: `, err);
            return next(ApiError.internal('Ошибка при добавлении сорта цветка'))
        }

    }

    /**
     * Добавление Ростовки цветка в список
     * @param {*} req 
     * @param {*} res 
     * @param {*} next
     * @returns {*} void
     */
    async createGrowth(req, res, next) {
        const growth = req.body.growth;
        const db = req.db;
        try {
            (async () => {
                const result = await addGrowth(db, growth);

                if (result?.status === 400) {
                    console.log(`result: `, result); // test
                    return next(ApiError.internal('Ошибка добавления новой ростовки цветка, не указана ростовка (addGrowth.js)'))
                }

                res.json({ server: 'Ростовка цветка добавлена', growth: growth })
            })()

        } catch (err) {
            console.log(`Ошибка при добавлении ростовки цветка: `, err);
            return next(ApiError.internal('Ошибка при добавлении ростовки цветка'))
        }
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