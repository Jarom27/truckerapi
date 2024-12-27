const jwt = require("jsonwebtoken")
const userModel = require("../models/Users")
const passUtils = require("../utils/passwordUtils")

const Login = async (req, res) => {
    const user = await userModel.getUser(req.body.email)
    const match = await passUtils.comparePassword(req.body.password, user.password)
    console.log(req.body, match)
    if (match) {
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" })
        console.log(token)
        return res.json({ token })
    }
}
module.exports = { Login }