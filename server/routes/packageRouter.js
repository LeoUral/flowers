const Router = require('express')
const router = new Router()
const packageController = require('../controllers/packageController')

router.post('/create', packageController.create)
router.post('/create_color', packageController.createColor)
router.post('/create_group', packageController.createGroup)
router.post('/create_photo', packageController.createPhoto)
router.post('/create_type', packageController.createType)
router.post('/create_units', packageController.createUnits)
router.post('/update', packageController.update)
router.post('/get_all', packageController.getAll)
router.post('/get_one', packageController.getOne)
router.post('/delete', packageController.deleteOne)


module.exports = router