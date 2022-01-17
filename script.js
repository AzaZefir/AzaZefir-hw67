
$(function() {
    let socket = new WebSocket('ws://localhost:9009');
    let message = $('#textMessage');
    let sendMessageBtn = $('#sendMessageBtn');
    let chat = $('#chat');            
    sendMessageBtn.click((event) => {
    socket.send(message.val());
    chat.append(`<div class='alert alert-warning'>You: ${message.val()}</div>`)
    message.val('');    
    });            
    socket.onmessage = (event) => {
        chat.append(`<div class='alert alert-info'>${event.data}</div>`)
    }
});


