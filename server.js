// server.js
const express = require('express')

const port = 3000
const server = express()

server.get('/', (req, res) => {
  res.send('<h1>Shite in the bucket</h1>')
})

server.listen(port, () => {
  console.log('The server is listening on port', port)
})