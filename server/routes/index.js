const Router = require('express')
const router = new Router()
const bouquetRouter = require('./bouquetRouter')
const flowersRouter = require('./flowersRouter')
const userRouter = require('./userRouter')
const orderRouter = require('./orderRouter')
const relatedRouter = require('./relatedRouter')
const packageRouter = require('./packageRouter')

router.use('/user', userRouter)
router.use('/flowers,', flowersRouter)
router.use('/bouquet', bouquetRouter)
router.use('/order', orderRouter)
router.use('/package', packageRouter)
router.use('/related', relatedRouter)

module.exports = router