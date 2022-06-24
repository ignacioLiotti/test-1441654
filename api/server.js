const { urlencoded } = require('express')
const express = require('express')
const morgan = require('morgan')
require('./db')
const app = express()
const connect = require('./db')

// import mongodb connection
const archivoDB = require('./db')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

const dbSync = async () => {
    try {
        await connect()
        console.log('DB connected')
        app.listen(3002, () => {
            console.log('Server running on port 3002')
        })
    }
    catch (error) {
        console.log(error)
    }
}

dbSync()

// app.listen(3002,  () => {
// })
