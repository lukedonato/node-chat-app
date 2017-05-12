let socket = io();

socket.on('connect', function () {
  console.log('connected to server');

  socket.on('newMessage', function (newMsg) {
    console.log('New message', newMsg);
  });

  socket.on('disconnect', () => {
    console.log('disconnected from server');
  });

  socket.emit('createMessage', {
    from: 'jen@example.com',
    text: 'hey. this is luke'
  });
});
