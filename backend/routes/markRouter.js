const Router = require('express')
const router = new Router()
const markController = require('../controllers/markController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), markController.create )
router.get('/', markController.getAll)


module.exports = router