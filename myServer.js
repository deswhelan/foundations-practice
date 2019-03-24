const express = require('express')
const myRoutes = require('./myRoutes')

const port = 3000
const server = express()

server.get('/', myRoutes.myIndex);

server.get('/cavan', myRoutes.cavan);

server.get('/fighters', myRoutes.fighters);

server.listen(port, () => {
  console.log('The server is listening on port', port)
})