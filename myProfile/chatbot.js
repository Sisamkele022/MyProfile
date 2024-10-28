// Show or hide the chatbot
function toggleChat() {
    const chatbotBody = document.getElementById('chatbot-body');
    chatbotBody.style.display = chatbotBody.style.display === 'block' ? 'none' : 'block';
}

// Send message function
function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');
    
    if (input.value.trim() === "") return; // Prevent empty messages

    // Append user's message
    const userMessage = document.createElement('p');
    userMessage.textContent = `You: ${input.value}`;
    messagesContainer.appendChild(userMessage);

    // Simulate bot response
    setTimeout(() => {
        const botResponse = document.createElement('p');
        botResponse.textContent = `Bot: I'm just a simple bot. You said "${input.value}"`;
        messagesContainer.appendChild(botResponse);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
    }, 1000);

    input.value = ""; // Clear input
}

// Show the chatbot on page load
document.addEventListener('DOMContentLoaded', () => {
    const chatbotContainer = document.getElementById('chatbot');
    chatbotContainer.style.display = 'block'; // Show the chatbot on page load
});
