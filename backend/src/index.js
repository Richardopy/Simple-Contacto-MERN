require('dotenv').config()

const app = require('./app')
require('./database')

async function main() {
    await app.listen(app.get('port'))
    console.log('El servidor se ejecuta en el puerto', app.get('port'));
}

main();