let socket = io();

socket.on('connect', function () {
  console.log('connected to server');

  socket.on('newMessage', function (newMsg) {
    console.log('New message', newMsg);
    let li = $('<li></li>');
    li.text(`${newMsg.from}: ${newMsg.text}`);

    $('#messages').append(li);
  });

  socket.on('disconnect', () => {
    console.log('disconnected from server');
  });

});

$('#message-form').on('submit', function(e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  }, function (){

  });
});
