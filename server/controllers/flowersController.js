const ApiError = require('../error/ApiError');
const addGrade = require('../model/flowers/addGrade');
const addGrowth = require('../model/flowers/addGrowth');
const addManufacturer = require('../model/flowers/addManufacturer');
const addNameFlower = require('../model/flowers/addNameFlower');
const getDocument = require('../model/getDocument');
const path = require('path');
const uuid = require('uuid');


class FlowersController {

    /**
     * Создание позиции цветка в DB
     * @param {*} req 
     * @param {*} res 
     * @param {*} next
     */
    async create(req, res, next) {

        const db = req.db
        const { data } = req.body
        const id = uuid.v4()

        try {
            const result = await db.collection('cut')
                .insertOne({ _id: id, data })

            console.log(`RESULT SAVE: `, result); // test
            res.json({ server: 'Данные добавлены' })

        } catch (err) {
            console.log(`Ошибка при добавлении новой позиции цветка: `, err);
            return next(ApiError.badRequest('Ошибка при добавлении новой позиции цветка'))
        }
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
            const result = await addNameFlower(db, name)

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка добавления новго названия цветка, навазние не указано (addNameFlower.js)'))
            }

            res.json({ server: 'Название цветка добавлено', name: name })

        } catch (err) {
            console.log(`Ошибка при добавлении названия цветка: `, err);
            return next(ApiError.badRequest('Ошибка при добавлении названия цветка'))
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
            const result = await addManufacturer(db, manufacturer);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка добавления новго производителя цветка, не указан производитель (addManufacturer.js)'))
            }

            res.json({ server: 'Название производителя добавлено', manufacturer: manufacturer })

        } catch (err) {
            console.log(`Ошибка при добавлении названия цветка: `, err);
            return next(ApiError.badRequest('Ошибка при добавлении названия цветка'))
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
            const result = await addGrade(db, grade)

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка добавления новго сорта цветка, не указан сорт (addGrade.js)'))
            }

            res.json({ server: 'Сорт цветка добавлен', grade: grade })

        } catch (err) {
            console.log(`Ошибка при добавлении сорта цветка: `, err);
            return next(ApiError.badRequest('Ошибка при добавлении сорта цветка'))
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
            const result = await addGrowth(db, growth);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка добавления новой ростовки цветка, не указана ростовка (addGrowth.js)'))
            }

            res.json({ server: 'Ростовка цветка добавлена', growth: growth })

        } catch (err) {
            console.log(`Ошибка при добавлении ростовки цветка: `, err);
            return next(ApiError.badRequest('Ошибка при добавлении ростовки цветка'))
        }
    }

    /**
     * Добавление Фото цветка в список
     * @param {*} req 
     * @param {*} res 
     */
    async createPhoto(req, res, next) {
        try {
            console.log(`CREATE PHOTO`);  // test
            const db = req.db;

            console.log(`FILES:::: `, req.files);

            if (!req.files || Object.keys(req.files).length === 0) {
                console.log(`No file....`); // test
                return next(ApiError.internal('Нет файла!!!'))
            }

            const { img } = req.files
            let fileName = 'flower-' + uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', 'flower', fileName))

            res.json({ server: 'Загрузка файла', fileName: fileName })


        } catch (err) {
            console.log(`Ошибка при добавлении рисунка: `, err);
            return next(ApiError.badRequest('Ошибка при добавлении рисунка'))
        }

    }

    /**
     * Получаем массив сортов цветка
     * @param {*} req 
     * @param {*} res 
     */
    async getGrade(req, res) {
        const { collection, document } = req.body
        const db = req.db;

        try {
            const result = await getDocument(db, collection, document);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка получения массива сорта цветов'))
            }

            res.json({ server: 'Массив сорта цветов', result: result })

        } catch (err) {
            console.log(`Ошибка получения массива сорта цветков: `, err);
            return next(ApiError.badRequest('Ошибка получения массива сорта цветов'))
        }
    }

    /**
     * Получаем массив длин цветка
     * @param {*} req 
     * @param {*} res 
     */
    async getGrowth(req, res, next) {
        const { collection, document } = req.body
        const db = req.db;

        try {
            const result = await getDocument(db, collection, document);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка получения массива ростовки цветов'))
            }

            res.json({ server: 'Массив ростовки цветов', result: result })

        } catch (err) {
            console.log(`Ошибка получения массива ростовки цветков: `, err);
            return next(ApiError.badRequest('Ошибка получения массива ростовки цветов'))
        }
    }

    /**
     * Получаем массив производителей цветка
     * @param {*} req 
     * @param {*} res 
     */
    async getManufacturer(req, res, next) {
        const { collection, document } = req.body
        const db = req.db;

        try {
            const result = await getDocument(db, collection, document);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка получения массива производителя цветов'))
            }

            res.json({ server: 'Массив производителя цветов', result: result })

        } catch (err) {
            console.log(`Ошибка получения массива производителя цветков: `, err);
            return next(ApiError.badRequest('Ошибка получения массива производителя цветов'))
        }
    }

    /**
     * Получаем массив названий цветов
     * @param {*} req 
     * @param {*} res 
     */
    async getName(req, res, next) {
        const { collection, document } = req.body
        const db = req.db;

        try {
            const result = await getDocument(db, collection, document);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.internal('Ошибка получения массива названия цветов'))
            }

            res.json({ server: 'Массив названия цветов', result: result })

        } catch (err) {
            console.log(`Ошибка получения массива названия цветков: `, err);
            return next(ApiError.badRequest('Ошибка получения массива названия цветов'))
        }

    }

    /**
     * Получаем массив фото цветка
     * @param {*} req 
     * @param {*} res 
     */
    async getPhoto(req, res) {

    }

    /**
     * Обновление позиции цветка
     * @param {*} req 
     * @param {*} res 
     */
    async update(req, res) {

    }

    /**
     * Получение всех позиций цветов, срезки
     * @param {*} req 
     * @param {*} res 
     */
    async getAll(req, res) {
        // const { collection, document } = req.body
        const db = req.db;

        try {
            const result = await db.collection('cut')
                .find({}).toArray()

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.internal('Ошибка получения массива срезки цветов'))
            }

            res.json({ server: 'Массив срезки цветов', result: result })

        } catch (err) {
            console.log(`Ошибка получения массива срезки цветков: `, err);
            return next(ApiError.badRequest('Ошибка получения массива срезки цветов'))
        }



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
     * Удаление выбранной позиции цветка,
     * поле archive переводим в true
     * @param {*} req 
     * @param {*} res 
     */
    async deleteOne(req, res, next) {
        try {
            const db = req.db
            const { id } = req.body
            console.log(`body:::: `, id); // test

            const result = await db.collection('cut')
                .updateOne({ _id: id }, { $set: { 'data.archive': true } })

            res.json({ delete: 'OK' })

        } catch (err) {
            console.log(`Ошибка при перемещении в архив срезки цветков: `, err);
            return next(ApiError.badRequest('Ошибка при перемещении в архив срезки цветков'))
        }
    }
}

module.exports = new FlowersController();