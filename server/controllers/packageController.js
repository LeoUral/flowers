const ApiError = require('../error/ApiError');
const path = require('path');
const uuid = require('uuid');
const addGroup = require('../model/package/addGroup');
const addType = require('../model/package/addType');
const addColor = require('../model/package/addColor');
const addUnits = require('../model/package/addUnits');
const getDocument = require('../model/getDocument');


class PackageController {

    /**
     * Создание позиции упаковки и расходиники
     * @param {*} req 
     * @param {*} res 
     */
    async create(req, res, next) {
        const db = req.db
        const { data } = req.body
        const id = uuid.v4()

        try {
            const result = await db.collection('pack')
                .insertOne({ _id: id, data })

            console.log(`RESULT SAVE: `, result); // test
            res.json({ server: 'Данные добавлены' })

        } catch (err) {
            console.log(`Ошибка при добавлении новой позиции упаковки: `, err);
            return next(ApiError.badRequest('Ошибка при добавлении новой позиции упаковки'))
        }
    }

    /**
     * Добавление группы упаковок и расходников
     * @param {*} req 
     * @param {*} res 
     * @param {*} next
     * @returns {*} void
     */
    async createGroup(req, res, next) {
        const group = req.body.group;
        const db = req.db;
        try {
            const result = await addGroup(db, group);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка добавления новой группы в упаковке (packageController.js)'))
            }

            res.json({ server: 'Группа добавлена', group: group })

        } catch (err) {
            console.log(`Ошибка добавления новой группы: `, err);
            return next(ApiError.badRequest('Ошибка добавления новой группы'))
        }

    }

    /**
     * Добавление типа упаковки и расходников
     * @param {*} req 
     * @param {*} res 
     * @param {*} next
     * @returns {*} void
     */
    async createType(req, res, next) {
        const type = req.body.type;
        const db = req.db;
        try {
            const result = await addType(db, type);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка добавления нового типа упаковки (packageController.js)'))
            }

            res.json({ server: 'Тип добавлен', type: type })

        } catch (err) {
            console.log(`Ошибка добавления нового типа: `, err);
            return next(ApiError.badRequest('Ошибка добавления нового типа'))
        }
    }

    /**
     * Добавлене цвета упаковки и расходников
     * @param {*} req 
     * @param {*} res 
     * @param {*} next
     * @returns {*} void
     */
    async createColor(req, res) {
        const color = req.body.color;
        const db = req.db;
        try {
            const result = await addColor(db, color);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка добавления нового цвета (packageController.js)'))
            }

            res.json({ server: 'Цвет добавлен', color: color })

        } catch (err) {
            console.log(`Ошибка добавления нового цвета: `, err);
            return next(ApiError.badRequest('Ошибка добавления нового цвета'))
        }
    }

    /**
     * Добавление единиц измерения упаковки и расходников
     * @param {*} req 
     * @param {*} res 
     */
    async createUnits(req, res) {
        const units = req.body.units;
        const db = req.db;
        try {
            const result = await addUnits(db, units);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка добавления единицы измерения (packageController.js)'))
            }

            res.json({ server: 'Цвет добавлен', units: units })

        } catch (err) {
            console.log(`Ошибка добавления единицы измерения: `, err);
            return next(ApiError.badRequest('Ошибка добавления единицы измерения'))
        }
    }

    /**
     * Добавление фото упаковки и расходников
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
            let fileName = 'package-' + uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', 'package', fileName))

            res.json({ server: 'Загрузка файла', fileName: fileName })


        } catch (err) {
            console.log(`Ошибка при добавлении рисунка: `, err);
            return next(ApiError.badRequest('Ошибка при добавлении рисунка'))
        }
    }


    /**
     * Обновление позиции упаковки и расходники
     * @param {*} req 
     * @param {*} res 
     */
    async update(req, res) {

    }

    /**
     * Получение всех позиций упаковок и расходников
     * @param {*} req 
     * @param {*} res 
     */
    async getAll(req, res) {
        const db = req.db;

        try {
            const result = await db.collection('pack')
                .find({}).toArray()

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.internal('Ошибка получения массива упаковки'))
            }

            res.json({ server: 'Массив упаковки', result: result })

        } catch (err) {
            console.log(`Ошибка получения массива упаковки: `, err);
            return next(ApiError.badRequest('Ошибка получения массива упаковки'))
        }
    }

    /**
     * Получение выбранной позиции упаковки или расходинков
     * @param {*} req 
     * @param {*} res 
     */
    async getOne(req, res) {
        const { collection, document } = req.body
        const db = req.db;

        try {
            const result = await getDocument(db, collection, document);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest(`Ошибка получения массива: ${document}`))
            }

            res.json({ server: `Массив ${document}`, result: result })

        } catch (err) {
            console.log(`Ошибка получения массива ${document}: `, err);
            return next(ApiError.badRequest(`Ошибка получения массива ${document}`))
        }

    }

    /**
     * Удаление выбранной позиции упаковки и расходников
     * @param {*} req 
     * @param {*} res 
     */
    async deleteOne(req, res, next) {
        try {
            const db = req.db
            const { id } = req.body
            console.log(`body:::: `, id); // test

            const result = await db.collection('pack')
                .updateOne({ _id: id }, { $set: { 'data.archive': true } })

            res.json({ delete: 'OK' })

        } catch (err) {
            console.log(`Ошибка при перемещении в архив упаковки: `, err);
            return next(ApiError.badRequest('Ошибка при перемещении в архив упаковки'))
        }
    }
}

module.exports = new PackageController();