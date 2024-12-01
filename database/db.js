const mysql = require('mysql2/promise.js')

async function connect() {
    try {
        const connection = await mysql.createConnection({
            "host": process.env.DB_HOST,
            "port": process.env.DB_PORT,
            "database": process.env.DB_NAME,
            "user": process.env.DB_USER,
            "password": process.env.DB_PASS
        })
        return connection
    } catch (error) {
        console.log(`${error}`)
    }
}

module.exports = { connect }