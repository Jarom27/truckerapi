const router = require('express').Router()
const locationController = require('../controllers/Location')
router.get("/:id", locationController.getLocationDevice)

module.exports = router