const router = require('express').Router()
const loginController = require("../controllers/Login")

router.get("/", (req, res) => {
    res.send("Welcome to the Trucker API")
})
router.post("/login", loginController.Login)
router.use("/devices", require("./devices"))

module.exports = router