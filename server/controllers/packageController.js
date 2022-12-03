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
    async createPhoto(req, res) {

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