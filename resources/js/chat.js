document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname === '/chat') {
        const sendButton = document.getElementById('sendButton');
        if (sendButton) {
            sendButton.addEventListener('click', sendMessage);
        } else {
            console.log("Send button not found on chat page.");
        }
    }
});

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim() === '') {
        alert('Please enter a message!');
        return;
    }

    const userName = currentUserName || 'Guest';

    axios.post('/chat', { message, user_name: userName })
        .then(response => {
            console.log('Message sent successfully', response);

            const messageBox = document.getElementById('chatBox');

            const senderName = response.data.user_name === currentUserName ? 'You' : response.data.user_name;

            messageBox.innerHTML += `<p><strong>${senderName}:</strong> ${response.data.message}</p>`;

            messageInput.value = '';

            messageBox.scrollTop = messageBox.scrollHeight;
        })
        .catch(error => {
            console.error('Error sending message', error);
        });
}
