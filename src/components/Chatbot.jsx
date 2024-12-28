import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', from: 'bot', lang: 'en' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State to control chatbot visibility

  const handleSendMessage = async () => {
    if (userInput.trim()) {
      setMessages([...messages, { text: userInput, from: 'user', lang: language }]);
      setUserInput('');
      setIsLoading(true);

      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: 'You are a virtual assistant for HealthCarePlus, a German hospital at Ismaninger Str. 22, 81675 München. Respond concisely about hospital services, visiting hours, emergency care, and general enquiries. Focus only on relevant information, maintaining a professional and polite tone.Key Details:Services: Consultations with specialists (e.g., Cardiologist, Neurologist, Gynaecologist).Emergency care: Available 24/7.Visiting hours: 9 AM to 6 PM daily.Avoid long explanations.',
              },
              {
                role: 'user',
                content: userInput,
              },
            ],
            max_tokens: 50, // Reduce the token limit for shorter replies
          },
          {
            headers: {
              'Authorization': `Bearer OPENAI_API_KEY`, // Replace with your OpenAI API key
              'Content-Type': 'application/json',
            },
          }
        );
      
        const botResponse = response.data.choices[0].message.content.trim();
      
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, from: 'bot', lang: language },
        ]);
      } catch (error) {
        console.error('API Error:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Error: Unable to fetch response.', from: 'bot', lang: language },
        ]);
      }
      
      setIsLoading(false);
    }
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  const toggleChatbotVisibility = () => {
    setIsVisible(!isVisible); // Toggle visibility
  };

  return (
    <div>
      <div id="chatbot-container" style={isVisible ? styles.chatbotContainer : { ...styles.chatbotContainer, display: 'none' }}>
        <div style={styles.languageToggleContainer}>
          <button onClick={handleLanguageToggle} style={styles.languageToggleButton}>
            {language === 'en' ? 'Switch to German' : 'Switch to English'}
          </button>
        </div>

        {/* Display chatbot name */}
        <div style={styles.chatbotHeader}>
          <h3>HealthCare Chatbot</h3>
        </div>

        <div id="chat-log" style={styles.chatLog}>
          {messages.map((msg, index) => (
            <p key={index} style={msg.from === 'user' ? styles.userMessage : styles.botMessage}>
              {msg.text}
            </p>
          ))}
          {isLoading && <p style={styles.botMessage}>Chatbot is typing...</p>}
        </div>

        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder={language === 'en' ? 'Type here...' : 'Schreiben Sie hier...'}
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.button}>
          {language === 'en' ? 'Send' : 'Senden'}
        </button>
      </div>

      {/* Button to toggle chatbot visibility */}
      <button onClick={toggleChatbotVisibility} style={styles.toggleButton}>
        {isVisible ? 'Hide Chatbot' : 'Show Chatbot'}
      </button>
    </div>
  );
};

const styles = {
  chatbotContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '300px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  chatbotHeader: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  languageToggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px',
  },
  languageToggleButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  chatLog: {
    padding: '10px',
    height: '200px',
    overflowY: 'auto',
    borderBottom: '1px solid #ccc',
  },
  userMessage: {
    color: '#4CAF50',
    textAlign: 'right',
  },
  botMessage: {
    color: '#333',
    textAlign: 'left',
  },
  input: {
    padding: '10px',
    border: 'none',
    borderTop: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    cursor: 'pointer',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  },
  toggleButton: {
    position: 'fixed',
    bottom: '10px',
    right: '20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Chatbot;
