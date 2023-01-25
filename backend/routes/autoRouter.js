const Router = require('express')
const router = new Router()
const autoController = require('../controllers/autoController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), autoController.create)
router.get('/', autoController.getAll)
router.get('/:id', autoController.getOne)


module.exports = router