const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/DevlightsTest')

const connect = mongoose.connection

connect.on('connected', () => {console.log('Conectado a MongoDB')})
connect.on('error', () => {console.log('Error en la conexion a MongoDB')})

module.export = mongoose


// const connect = async () => {
//     try { mongoose.connect('mongodb://localhost:27017/sadasda', { useNewUrlParser: true, useUnifiedTopology: true }) }
//     catch (error) { console.log(error) }
// }