const Router = require('express')
const router = new Router()
const flowersController = require('../controllers/flowersController')

router.post('/create', flowersController.create)
router.post('/create_grade', flowersController.createGrade)
router.post('/create_growth', flowersController.createGrowth)
router.post('/create_manufacturer', flowersController.createManufacturer)
router.post('/create_name', flowersController.createName)
router.post('/create_photo', flowersController.createPhoto)
router.post('/update', flowersController.update)
router.get('/get_all', flowersController.getAll)
router.get('/get_one', flowersController.getOne)
router.post('/delete', flowersController.deleteOne)


module.exports = router