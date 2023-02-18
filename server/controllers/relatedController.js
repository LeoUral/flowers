const ApiError = require('../error/ApiError');
const path = require('path');
const uuid = require('uuid');
const getDocument = require('../model/getDocument');
const addGroup = require('../model/related/addGroup')


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
    async createDescription(req, res) {

    }

    /**
     * Добавление форм сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async createForm(req, res) {

    }

    /**
     * Добавление размеров сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async createSize(req, res) {

    }

    /**
     * Добавление фото сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async createPhoto(req, res) {

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
    async getAll(req, res) {

    }

    /**
     * Получение выбранной позиции сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async getOne(req, res) {

        res.json('related Controller --> get One')
    }

    /**
     * Удаление выбранной позиции сопутствующих товаров
     * @param {*} req 
     * @param {*} res 
     */
    async deleteOne(req, res) {

    }
}

module.exports = new RelatedController();