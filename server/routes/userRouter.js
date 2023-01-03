const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.post('/clients', userController.clients)
router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logOut)
router.get('/auth', userController.check)

module.exports = router