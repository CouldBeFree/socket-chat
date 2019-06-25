const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const port = 4000;

const expressServer = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

const io = socketio(expressServer);

io.on('connection', (socket) => {
    socket.emit('messageFromServer', { data: 'Welcome to the socketio server' });
    socket.on('dataToServer', (dataFromClient) => {
        console.log(dataFromClient);
    });
    socket.join('level1');
    socket.to('level1').emit('joined', `${socket.id} says I have joined level1 room`)
});

io.of('/admin').on('connection', socket => {
   console.log('Someone connected to the admin namespace');
   io.of('/admin').emit('welcome', 'Welcome to the admin channel')
});
