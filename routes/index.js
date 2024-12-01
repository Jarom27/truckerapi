const express = require('express')
const router = express.Router()

router.use('/api', require('./api'))
router.get("/", (req, res) => {
    res.send("Hi from trucker mex API")
})

module.exports = router