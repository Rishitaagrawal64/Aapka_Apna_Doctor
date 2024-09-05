document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.querySelector('.chat-footer button');
    const inputField = document.querySelector('.chat-footer input');
    const chatBody = document.querySelector('.chat-body');

    sendButton.addEventListener('click', () => {
        const messageText = inputField.value.trim();
        if (messageText) {
            const userMessage = document.createElement('div');
            userMessage.classList.add('message', 'user-message');
            userMessage.innerHTML = `<p>${messageText}</p>`;
            chatBody.appendChild(userMessage);
            inputField.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    });
});
