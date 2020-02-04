const express = require('express');

const server = express() 

const port = 3001

/* request i response se dva parametri na callback rutata*/
server.get('/', (request, response) => {    
    /*tuka se obrabotuva requestot na inicijalnata ruta */
    response.send('hi all or not')

})

// server.post('/')
// server.delete('/')

server.listen(port, () => {
    console.log(`Server started on port ${port}, hello world!`)
})