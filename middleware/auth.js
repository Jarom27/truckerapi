const jwt = require("jsonwebtoken")

const validateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log("validating")
    if (!token) return res.status(401).json({ message: 'Token no proporcionado' });

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(token)
        //res.status(200).json({ message: 'Acceso concedido', user: decoded });
        next()
    } catch (err) {
        console.log(err)
        res.status(403).json({ message: 'Token inválido' });
    }
}
module.exports = { validateToken }