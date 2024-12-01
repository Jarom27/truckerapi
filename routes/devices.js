const router = require('express').Router()
const deviceController = require('../controllers/Devices')
router.get('/', deviceController.getAllDevices)
router.get('/:id', deviceController.getSingleDevice)
module.exports = router