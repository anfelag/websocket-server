

const socketController = socket => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconetado', socket.id);
    });

    // Captura el mensaje del cliente
    socket.on('enviar-mensaje', ( payload, callback ) => {
        
        const id = 'abc123';
        callback( id );
        // Se envía un mensaje desde el servidor
        socket.broadcast.emit('enviar-mensaje', payload);
    })
}


module.exports = {
    socketController
}