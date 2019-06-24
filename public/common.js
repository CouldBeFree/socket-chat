const socket = io('http://localhost:4000');
const socket2 = io('http://localhost:4000/admin');

console.log(socket.io);
socket.on('connection', () => {
    console.log(socket.id);
});

socket.on('messageFromServer', (dataFromServer) => {
    console.log(dataFromServer);
    socket.emit('dataToServer', {data: "Data from the Client"})
});

socket2.on('welcome', dataFromServer => {
    console.log(dataFromServer);
});

document.getElementById('message-form').addEventListener('submit', event => {
    event.preventDefault();
    const newMessage = document.querySelector('#user-message').value;
    socket.emit('newMessageToServer', {text: newMessage})
});
