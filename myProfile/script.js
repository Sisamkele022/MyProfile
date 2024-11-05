// JavaScript
const chatbotIcon = document.querySelector('.chatbot-icon');
const chatbotWindow = document.querySelector('.chatbot-window');
const chatbotBody = document.querySelector('.chatbot-body');
const inputField = document.querySelector('.chatbot-footer input');
const sendButton = document.querySelector('.chatbot-footer button');
const closeButton = document.querySelector('.close-btn');

// Toggle the chatbot window visibility
chatbotIcon.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'flex' : 'none';
});

// Close button functionality
closeButton.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
});

// Send a message
sendButton.addEventListener('click', () => {
    const userMessage = inputField.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user'); // Add the user's message
        inputField.value = ''; // Clear the input field

        // Simulate chatbot response
        setTimeout(() => {
            const botResponse = generateResponse(userMessage);
            addMessage(botResponse, 'bot'); // Add the bot's message
        }, 500);
    }
});

// Clear old conversations when the chatbot window is reopened
chatbotIcon.addEventListener('click', () => {
    chatbotBody.innerHTML = ''; // Clear previous messages
});

// Add message function
function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', sender);
    messageElement.textContent = text;
    chatbotBody.appendChild(messageElement);
    chatbotBody.scrollTop = chatbotBody.scrollHeight; // Scroll to the latest message
}

// Generate response function (enhanced response logic with humor and emojis)
function generateResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
        return '👋 Hello! How can I sprinkle some magic on your day today? ✨';
    } else if (lowerCaseMessage.includes('how are you')) {
        return 'I’m doing great! Just living the code life! 😄 How can I assist you?';
    } else if (lowerCaseMessage.includes('freelancing') || lowerCaseMessage.includes('collaboration')) {
        return 'I’m all ears! 👂💻 What kind of amazing project do you have brewing?';
    } else if (lowerCaseMessage.includes('services') || lowerCaseMessage.includes('skills')) {
        return 'I’m a full-stack wizard! 🧙‍♂️✨ I dabble in JavaScript, React, Node.js, MongoDB, and .NET. Ready to conjure up something great together?';
    } else if (lowerCaseMessage.includes('experience') || lowerCaseMessage.includes('background')) {
        return 'Ah, my tale is filled with adventures in e-hailing apps, learning management systems, and QA testing! 🚀 I’ve gathered wisdom from startups and internships alike! What do you want to know?';
    } else if (lowerCaseMessage.includes('availability') || lowerCaseMessage.includes('available')) {
        return 'I’m like a free spirit, ready for new quests! 🦋 Whether it’s contract work, freelancing, or full-time positions, I’m game! What do you have in mind?';
    } else if (lowerCaseMessage.includes('location') || lowerCaseMessage.includes('remote work')) {
        return 'I hail from sunny Johannesburg, South Africa! ☀️ But I’m open to remote adventures or relocating for the right quest! 🌍';
    } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('email')) {
        return 'You can shoot me an email at ✉️ <strong>sisamkelevava2@gmail.com</strong>. I’m also on LinkedIn if you want to connect! 🤝';
    } else if (lowerCaseMessage.includes('projects') || lowerCaseMessage.includes('portfolio')) {
        return 'I’ve crafted many digital wonders! 🛠️✨ Check out my portfolio to see the magic in action! 🎨';
    } else if (lowerCaseMessage.includes('languages') || lowerCaseMessage.includes('tech stack')) {
        return 'My tech stack is like a buffet! 🍽️ JavaScript, TypeScript, C#, HTML/CSS, SQL, and many more delicious options await! Which one tickles your fancy?';
    } else if (lowerCaseMessage.includes('rate') || lowerCaseMessage.includes('pricing')) {
        return 'My rates are like a chameleon—flexible and adaptable! 🦎 Let’s chat about your project, and I’ll whip up a price that suits us both! 💰';
    } else if (lowerCaseMessage.includes('career goals') || lowerCaseMessage.includes('future plans')) {
        return 'I dream of conquering the software development realm, diving into AI adventures, and creating impactful tech! 🌟 What about you?';
    } else if (lowerCaseMessage.includes('joke') || lowerCaseMessage.includes('funny')) {
        return 'Why do programmers prefer dark mode? Because light attracts bugs! 🐛😂 Got any good ones to share?';
    } else {
        return '🤔 I’m not quite sure how to answer that, but I’d love to hear more! Feel free to contact me via email or connect on LinkedIn! 🤗';
    }
}
