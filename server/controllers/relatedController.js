const ApiError = require('../error/ApiError');
const path = require('path');
const uuid = require('uuid');
const getDocument = require('../model/getDocument');
const addGroup = require('../model/related/addGroup');
const addDescription = require('../model/related/addDescription');
const addForm = require('../model/related/addForm');
const addSize = require('../model/related/addSize');


class RelatedController {

    /**
     * Создание позиции сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async create(req, res, next) {
        const db = req.db
        const { data } = req.body
        const id = uuid.v4()

        try {
            const result = await db.collection('relat')
                .insertOne({ _id: id, data })

            console.log(`RESULT SAVE: `, result); // test
            res.json({ server: 'Данные добавлены' })

        } catch (err) {
            console.log(`Ошибка при добавлении новой позиции сопутствующих товаров: `, err);
            return next(ApiError.badRequest('Ошибка при добавлении новой позиции сопутствующих товаров'))
        }
    }

    /**
     * Добавление группы сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async createGroup(req, res, next) {
        const group = req.body.group;
        const db = req.db;
        try {
            const result = await addGroup(db, group);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка добавления новой группы в сопутствующих (relatedController.js)'))
            }

            res.json({ server: 'Группа добавлена', group: group })

        } catch (err) {
            console.log(`Ошибка добавления новой группы: `, err);
            return next(ApiError.badRequest('Ошибка добавления новой группы'))
        }
    }

    /**
     * Добавление описания сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async createDescription(req, res, next) {
        const description = req.body.description;
        const db = req.db;
        try {
            const result = await addDescription(db, description);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка добавления нового описания сопутствующих (relatedController.js)'))
            }

            res.json({ server: 'Описание добавлена', description: description })

        } catch (err) {
            console.log(`Ошибка добавления нового описания: `, err);
            return next(ApiError.badRequest('Ошибка добавления нового описания'))
        }
    }

    /**
     * Добавление форм сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async createForm(req, res, next) {
        const formRelated = req.body.formRelated;
        const db = req.db;
        try {
            const result = await addForm(db, formRelated);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка добавления новой формы сопутствующих (relatedController.js)'))
            }

            res.json({ server: 'Форма добавлена', formRelated: formRelated })

        } catch (err) {
            console.log(`Ошибка добавления новой формы: `, err);
            return next(ApiError.badRequest('Ошибка добавления новой формы'))
        }
    }

    /**
     * Добавление размеров сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async createSize(req, res) {
        const sizeRelated = req.body.sizeRelated;
        const db = req.db;
        try {
            const result = await addSize(db, sizeRelated);

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.badRequest('Ошибка добавления нового размера сопутствующих (relatedController.js)'))
            }

            res.json({ server: 'Размер добавлен', sizeRelated: sizeRelated })

        } catch (err) {
            console.log(`Ошибка добавления нового размера: `, err);
            return next(ApiError.badRequest('Ошибка добавления нового размера'))
        }
    }

    /**
     * Добавление фото сопутствующих товаров
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
            let fileName = 'related-' + uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', 'related', fileName))

            res.json({ server: 'Загрузка файла', fileName: fileName })


        } catch (err) {
            console.log(`Ошибка при добавлении рисунка: `, err);
            return next(ApiError.badRequest('Ошибка при добавлении рисунка'))
        }
    }

    /**
     * Обновление позиции сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async update(req, res) {

    }

    /**
     * Получение всех позиций сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async getAll(req, res, next) {
        const db = req.db;

        try {
            const result = await db.collection('relat')
                .find({}).toArray()

            if (result && result.status === 400) {
                console.log(`result: `, result); // test
                return next(ApiError.internal('Ошибка получения массива сопутствующих'))
            }

            res.json({ server: 'Массив сопутствующих', result: result })

        } catch (err) {
            console.log(`Ошибка получения массива сопутствующих: `, err);
            return next(ApiError.badRequest('Ошибка получения массива сопутствующих'))
        }
    }

    /**
     * Получение выбранной позиции сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async getOne(req, res, next) {
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
     * Удаление выбранной позиции сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async deleteOne(req, res) {
        try {
            const db = req.db
            const { id } = req.body
            console.log(`body:::: `, id); // test

            const result = await db.collection('relat')
                .updateOne({ _id: id }, { $set: { 'data.archive': true } })

            res.json({ delete: 'OK' })

        } catch (err) {
            console.log(`Ошибка при перемещении в архив сопутствующих: `, err);
            return next(ApiError.badRequest('Ошибка при перемещении в архив сопутствующих'))
        }
    }
}

module.exports = new RelatedController();