const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Send FAQ data to the client when requested
  socket.on('getFAQs', () => {
    const faqs = [
      { question: 'What is this app?', answer: 'This is a gym management app.' },
      { question: 'How to contact support?', answer: 'Email us at support@example.com.' },
    ];
    socket.emit('faqs', faqs);
  });

  // Handle incoming messages from the client
  socket.on('sendMessage', (message) => {
    console.log('Received message:', message);
    
    // Respond back to the client
    const response = `Server received your message: "${message}"`;
    socket.emit('response', response);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Port configuration
const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
