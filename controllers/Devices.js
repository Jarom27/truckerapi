const db = require('../database/db.js')

const getAllDevices = async (req, res) => {
    const db_manager = await db.connect()
    try {

        const [rows, fields] = await db_manager.execute("SELECT * FROM devices")
        console.log(rows)
        res.json(rows)
    } catch (error) {
        console.log(`${error}`)
    } finally {
        db_manager.end()
    }

}
const getSingleDevice = async (req, res) => {
    const db_manager = await db.connect()
    const id = req.params.id
    try {
        const [rows, fields] = await db_manager.execute(`SELECT * FROM devices WHERE devices.Device_id = ${id}`)
        console.log(rows)
        res.json(rows)
    } catch (error) {

    } finally {
        db_manager.end()
    }
}
const addDevice = (req, res) => {

}
const updateDevice = (req, res) => {

}
const deleteDevice = (req, res) => {

}

module.exports = { getAllDevices, getSingleDevice, addDevice, updateDevice, deleteDevice }