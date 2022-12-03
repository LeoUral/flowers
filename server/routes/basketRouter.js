const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/create', basketController.create)
router.post('/update', basketController.update)
router.get('/get_all', basketController.getAll)
router.get('/get_one', basketController.getOne)
router.post('/delete', basketController.deleteOne)


module.exports = router