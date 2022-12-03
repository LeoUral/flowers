const Router = require('express')
const router = new Router()
const bouquetController = require('../controllers/bouquetController')

router.post('/create', bouquetController.create)
router.post('/photo', bouquetController.createPhoto)
router.post('/update', bouquetController.update)
router.get('/get_all', bouquetController.getAll)
router.get('/get_one', bouquetController.getOne)
router.post('/delete', bouquetController.deleteOne)


module.exports = router