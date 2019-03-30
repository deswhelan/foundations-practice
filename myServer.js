const express = require('express')
const myRoutes = require('./myRoutes')

const port = 3000
const server = express()

server.get('/', myRoutes.myIndex);

server.get('/cavan', myRoutes.cavan);

server.get('/fighters', myRoutes.fighters);

server.get('/:contents/:vessel', myRoutes.whatsInTheVessel);

server.listen(port, () => {
  console.log('The server is listening on port', port)
})

module.exports = server