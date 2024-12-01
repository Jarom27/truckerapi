const router = require('express').Router()

router.use('/devices', require('./devices'))
router.use('/location', require('./location'))
module.exports = router
