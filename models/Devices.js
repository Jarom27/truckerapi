const mongo = require("../database/")

const getDevicesByUser = async (userId) => {
    const db = await mongo.getDatabase().db()
    const devices = await db.collection("gps_devices").find({ user_id: userId }).toArray()
    return devices
}

module.exports = { getDevicesByUser }