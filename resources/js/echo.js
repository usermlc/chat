import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    encrypted: true,
});

window.Echo.channel('chat')
    .listen('MessageSent', (event) => {
        alert('Event received: ' + data.message);
        const messageBox = document.getElementById('chatBox');
        messageBox.innerHTML += `<p><strong>${event.user.name}:</strong> ${event.message.message}</p>`;
        messageBox.scrollTop = messageBox.scrollHeight;
    });

