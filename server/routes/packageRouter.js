const Router = require('express')
const router = new Router()
const packageController = require('../controllers/packageController')

router.post('/create', packageController.create)
router.post('/color', packageController.createColor)
router.post('/group', packageController.createGroup)
router.post('/photo', packageController.createPhoto)
router.post('/type', packageController.createType)
router.post('/units', packageController.createUnits)
router.post('/update', packageController.update)
router.get('/get_all', packageController.getAll)
router.get('/get_one', packageController.getOne)
router.post('/delete', packageController.deleteOne)


module.exports = router