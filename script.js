// Get necessary elements
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.getElementById('chat-messages');

// Function to add a new message to the chat
function addMessage(messageText, messageType) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(messageType);
  messageDiv.innerHTML = messageText;
  chatMessages.appendChild(messageDiv);
  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener for sending message
sendBtn.addEventListener('click', () => {
  const messageText = messageInput.value.trim();
  if (messageText !== '') {
    addMessage(`<p>${messageText}</p><div class="timestamp">${getCurrentTime()}</div>`, 'sent');
    messageInput.value = '';
  }
});

// Function to get current time
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

// Simulate receiving a message
addMessage(`<img src="https://via.placeholder.com/30" alt="User 2" class="user-img"><p>Hello, how are you?</p>`, 'received');
addMessage(`<p>I'm good, thanks! How about you?</p>`, 'sent');
addMessage(`<img src="https://via.placeholder.com/30" alt="User 2" class="user-img"><p>I'm doing great, thanks for asking!</p>`, 'received');
