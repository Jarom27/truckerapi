const express = require('express')
const app = express()
const body_parser = require('body-parser')
const mongo = require("./database")
const cors = require('cors')
require("dotenv").config()

const HOST = process.env.API_HOST
const PORT = process.env.API_PORT
app.use(body_parser.json())
    .use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader(
            "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Z-key"
        )
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        next()
    })
    .use(cors({ methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"] }))
    .use(cors({ origin: "*" }))

app.use(require("./routes/"))
mongo.initDb((err) => {
    if (err) {
        console.error(err)
    }
    else {
        app.listen(PORT, () => {
            console.log(`Database is listening and running on port ${PORT}`)
        })
    }
})