const express = require('express')
const myRoutes = require('./myRoutes')

const port = 3000
const server = express()

server.get('/', myRoutes.myIndex)

// server.get('/', (req, res) => {
//   res.send('<h1>Hello Simey</h1>')
// })


server.listen(port, () => {
  console.log('The server is listening on port', port)
})