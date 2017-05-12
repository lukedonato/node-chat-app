const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'luke',
    text: 'hithere',
    createdAt: new Date()
  });

  socket.on('createMessage', (newMsg) => {
    newMsg.createdAt = new Date();
    console.log(newMsg);
  })

  socket.on('disconnect', () => {
    console.log('user disconnect');
  });
});



server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
