const { ObjectId } = require("mongodb"); // Importar ObjectId desde MongoDB
const deviceModel = require("../models/Devices")
const getDevicesByUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        if (!ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "ID de usuario inválido" });
        }

        const objectIdUserId = new ObjectId(userId);

        console.log(`UserId convertido a ObjectId: ${objectIdUserId}`);

        const devices = await deviceModel.getDevicesByUser(objectIdUserId);

        res.status(200).json(devices);
    } catch (error) {
        console.error("Error al obtener dispositivos:", error.message);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = { getDevicesByUser };