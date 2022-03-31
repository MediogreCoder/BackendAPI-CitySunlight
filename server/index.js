let app = require('./app')

const PORT = 9000
let server = app.listen(PORT)

server.on('listening', () => console.log('listening on port' + PORT))
server.on('error', ()=> console.error("error" , error))