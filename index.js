const express = require('express');

const server = express() 

const port = 3001

/* request i response se dva parametri na callback rutata*/
server.get('/', (request, response) => {    
    /*tuka se obrabotuva requestot na inicijalnata ruta */
    response.status(200).send('hi all or not')

})

server.get ('/users', (req, res) => {
try {

    const array = ['Petko','Stanko','Mirko']

    const name = req.query.name

    if (name && array.includes(name)) {
        res.status(200).send(name)
    } 
    else {
        res.status(200).send(array)
    }
    } catch (err) {
        console.error(err)
        res.status(500).send ('errorrrrrrrrrrrrrrrrr')
    }
})





server.get('/users/:id', (request, response) => {
    

    const array = [
        'baksla1',
        'baskla2',
        'baksla3'
    ]
    const id = request.params.id 

    if(array[id]) {
        response.status(200).send(array[id])
    } else {
        response.status(200).send('page not found')
    }

    // The route param value is in the request object
    request.params.id  

    response.status(200).send(array[request.params.id])
    
})





// server.post('/')
// server.delete('/')

server.listen(port, () => {
    console.log(`Server started on port ${port}, hello world!`)
})