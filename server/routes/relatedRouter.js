const Router = require('express')
const router = new Router()
const relatedController = require('../controllers/relatedController')

router.post('/create', relatedController.create)
router.post('/form', relatedController.createForm)
router.post('/group', relatedController.createGroup)
router.post('/description', relatedController.createDescription)
router.post('/photo', relatedController.createPhoto)
router.post('/size', relatedController.createSize)
router.post('/update', relatedController.update)
router.get('/get_all', relatedController.getAll)
router.get('/get_one', relatedController.getOne)
router.post('/delete', relatedController.deleteOne)


module.exports = router