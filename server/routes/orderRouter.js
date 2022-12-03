const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/create', orderController.create)
router.post('/update', orderController.update)
router.get('/get_all', orderController.getAll)
router.get('/get_one', orderController.getOne)
router.post('/delete', orderController.deleteOne)

module.exports = router