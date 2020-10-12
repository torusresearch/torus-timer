var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
var server = require('http').createServer(app)
var io = require('socket.io')(server);
var port = process.env.PORT || 3000
server.listen(port)

io.on('connection', (socket) => {
  socket.on('timeout', (timeout) => {
    setTimeout(() => {
      socket.emit('timeout_complete',{})
    }, timeout)
  })
});
