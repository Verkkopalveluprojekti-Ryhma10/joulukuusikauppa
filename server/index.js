const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./db_config')

const port = 3001

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", async (req,res) => {
    try {
        const connection = await mysql.createConnection(config.db)
        res.status(200).json({message: "Node server is running on port " + port})
    } catch (err) {
        res.status(500).send(err.message)        
    }

})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})