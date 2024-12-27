const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let database

const initDb = (callback) => {
    if (database) {
        console.log("DB is already initialized")
        return callback(null, database)
    }
    MongoClient.connect(process.env.MONGO_URL)
        .then((client) => {
            database = client
            callback(null, database)
        })
        .catch((err) => {
            callback(err)
        })
}

const getDatabase = () => {
    if (!database) {
        throw Error("Database is uninitialized")
    }
    return database
}
module.exports = {
    initDb,
    getDatabase
}