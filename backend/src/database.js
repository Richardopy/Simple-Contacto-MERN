const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1/dbtest'

mongoose.connect(URI)

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Mongo se esta conectando a la base de datos: ', URI)
})