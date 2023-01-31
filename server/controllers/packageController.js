class PackageController {

    /**
     * Создание позиции упаковки и расходиники
     * @param {*} req 
     * @param {*} res 
     */
    async create(req, res) {

    }

    /**
     * Добавление группы упаковок и расходников
     * @param {*} req 
     * @param {*} res 
     */
    async createGroup(req, res) {

    }

    /**
     * Добавление типа упаковки и расходников
     * @param {*} req 
     * @param {*} res 
     */
    async createType(req, res) {

    }

    /**
     * Добавлене цвета упаковки и расходников
     * @param {*} req 
     * @param {*} res 
     */
    async createColor(req, res) {

    }

    /**
     * Добавление единиц измерения упаковки и расходников
     * @param {*} req 
     * @param {*} res 
     */
    async createUnits(req, res) {

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

    }

    /**
     * Получение выбранной позиции упаковки или расходинков
     * @param {*} req 
     * @param {*} res 
     */
    async getOne(req, res) {

        res.json('package controller -> getOne')
    }

    /**
     * Удаление выбранной позиции упаковки и расходников
     * @param {*} req 
     * @param {*} res 
     */
    async deleteOne(req, res) {

    }
}

module.exports = new PackageController();