const mongoose = require('mongoose')

const connect = async () => {
    try { mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true }) }
    catch (error) { console.log(error) }
}

const conn = mongoose.connection


module.exports = connect