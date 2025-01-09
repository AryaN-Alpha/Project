import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Connect to the Socket.io server
const socket = io('http://localhost:3001'); // Replace with your server URL

const FAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [message, setMessage] = useState(""); // State to store the input message
  const [response, setResponse] = useState(""); // State to store server response

  useEffect(() => {
    // Request FAQs from the server
    socket.emit('getFAQs');

    // Listen for FAQ data
    socket.on('faqs', (data) => {
      setFaqs(data);
    });

    // Listen for server responses to the message
    socket.on('response', (data) => {
      setResponse(data); // Set the response from the server
    });

    return () => {
      socket.disconnect(); // Cleanup on component unmount
    };
  }, []);

  // Handle sending the message to the server
  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', message); // Send message to server
      setMessage(""); // Clear the input field after sending
    }
  };

  return (
    <div>
      <h2>FAQs</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>

      {/* Response Section */}
      <div>
        <h3>Ask a Question:</h3>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update message state
          placeholder="Type your message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>

      {/* Display Response */}
      {response && (
        <div>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default FAQs;
