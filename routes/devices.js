const router = require("express").Router()
const deviceController = require("../controllers/Device")
const validation = require("../middleware/auth")
router.get("/:userId", validation.validateToken, deviceController.getDevicesByUser)

module.exports = router