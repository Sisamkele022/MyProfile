const chatbotIcon = document.querySelector('.chatbot-icon');
const chatbotWindow = document.querySelector('.chatbot-window');
const chatbotBody = document.querySelector('.chatbot-body');
const inputField = document.querySelector('.chatbot-footer input');
const sendButton = document.querySelector('.chatbot-footer button');
const closeButton = document.querySelector('.close-btn');

// Toggle the chatbot window visibility
chatbotIcon.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'flex' : 'none';
    if (chatbotWindow.style.display === 'flex') {
        // Display initial message with greeting options if the window is opened
        chatbotBody.innerHTML = ''; // Clear previous messages
        addMessage("Welcome! I'm here to answer your questions. Feel free to start by saying 'Hi' or 'Hello'!", 'bot');
    }
});

// Close button functionality
closeButton.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
});

//Restart chat functionality
restartButton.addEventListener('click', () => {
    restartChat(); // Clear chat history and show initial message
    chatbotWindow.style.display = 'none'; // Close the chatbot window
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

// Add message function with HTML handling for bot responses
function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', sender);

    if (sender === 'bot') {
        messageElement.innerHTML = text; // Use innerHTML for bot messages to render HTML
    } else {
        messageElement.textContent = text; // Use textContent for user messages
    }

    chatbotBody.appendChild(messageElement);
    chatbotBody.scrollTop = chatbotBody.scrollHeight; // Scroll to the latest message
}

// Generate response function with a greeting response that includes options
function generateResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
        return `Hello! How can I help you today? Here are some things you can ask me about:
        <ol>
            <li>1. My skills and tech stack</li>
            <li>2. My professional experience</li>
            <li>3. Projects I've worked on</li>
            <li>4. My availability for work</li>
            <li>5. Contact information</li>
            <li>6. Career goals</li>
        </ol>`;
    } else if (lowerCaseMessage.includes('how are you')) {
        return "I’m just a bunch of code, but I’m functioning perfectly. How can I assist you?";
    } else if (lowerCaseMessage.includes('skills')) {
        return "I specialize in full stack development, including JavaScript, React, Node.js, MongoDB, and .NET. I also have experience in mobile app development using React Native.";
    } else if (lowerCaseMessage.includes('experience')) {
        return "I have experience working on various projects, including e-hailing apps, learning management systems, and QA testing. I’ve also been involved in startups and internships where I gained valuable insights into software development and problem-solving.";
    } else if (lowerCaseMessage.includes('availability')) {
        return "I’m currently open to new opportunities, including contract work, freelance projects, and full-time positions.";
    } else if (lowerCaseMessage.includes('location') || lowerCaseMessage.includes('remote work')) {
        return "I’m based in Johannesburg, South Africa, but I’m open to remote work or relocation for the right opportunity.";
    } else if (lowerCaseMessage.includes('contact')) {
        return "You can reach me via email at sisamkele@example.com, or connect with me on LinkedIn for further discussions.";
    } else if (lowerCaseMessage.includes('projects')) {
        return "I’ve worked on several projects, including web and mobile applications. Feel free to check out my portfolio for more details on my past work.";
    } else if (lowerCaseMessage.includes('tech stack')) {
        return "I’m proficient in JavaScript, TypeScript, C#, HTML/CSS, SQL, and more. I also work with frameworks and libraries like React, Angular, Express.js, and .NET.";
    } else if (lowerCaseMessage.includes('rate') || lowerCaseMessage.includes('pricing')) {
        return "My rates are flexible and depend on the project scope. For freelancing, I usually discuss rates based on the complexity and timeline of the project.";
    } else if (lowerCaseMessage.includes('career goals')) {
        return "My career goals involve advancing in software development, exploring AI-powered solutions, and working on impactful tech projects. I’m always open to learning and growing in my field.";
    } else {
        return "I’m not sure how to answer that, but feel free to contact me via email.";
    }
}
