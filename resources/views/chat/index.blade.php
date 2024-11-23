<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat</title>
    @vite(['resources/css/app.css', 'resources/css/chat.css', 'resources/js/app.js'])
</head>
<body>
    <div class="chat-container">
        <div id="chatBox">
            @foreach($messages as $message)
                <p><strong>{{ $message->user_name === Auth::user()->name ? 'You' : $message->user_name }}:</strong> {{ $message->message }}</p>
            @endforeach
        </div>
        <input type="text" id="messageInput" placeholder="Type a message...">
        <button id="sendButton">Send</button>
    </div>
</body>

<script>
    const currentUserName = "{{ Auth::check() ? Auth::user()->name : 'Guest' }}";
</script>
</html>
