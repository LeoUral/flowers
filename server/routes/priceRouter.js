const Router = require('express')
const router = new Router()
const priceController = require('../controllers/priceController')

router.post('/create', priceController.create)
router.post('/update', priceController.update)
router.get('/get_one', priceController.getOne)


module.exports = router