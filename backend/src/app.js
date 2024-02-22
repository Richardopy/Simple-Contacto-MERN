const express = require('express')
const cors = require('cors')
const app = express();

//configuraciones
app.set('port', process.env.PORT || 4000)

//Middleware
app.use(cors())
app.use(express.json())

//rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a mi api rest full');
})

app.use('/api/usuarios', require('./routes/usuario'))


module.exports = app;