
// Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

const socket = io();


socket.on('connect', () => {
    // console.log('Conectado')

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor')

    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

// Se recibe el mensaje enviado desde el servidor
socket.on('enviar-mensaje', ( payload ) => {
    console.log(payload)
})

btnSend.addEventListener('click', () => {
    const message = txtMessage.value;
    const payload = {
        message,
        id: 'abc123',
        date: new Date().getTime()
    }

    socket.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log(id)
    })
})