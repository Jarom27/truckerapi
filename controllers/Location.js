const db = require('../database/db')

const getLocationDevice = async (req, res) => {
    const db_manager = await db.connect()
    const id = req.params.id
    try {
        const [rows, fields] = await db_manager.execute("SELECT * FROM location_logs WHERE Device_id = ? ORDER BY location_time DESC", [id])
        console.log(rows)
        res.json(rows)
    } catch (error) {
        console.error(error)
    } finally {
        db_manager.end()
    }
}
module.exports = { getLocationDevice }
