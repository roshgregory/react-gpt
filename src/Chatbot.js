import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';
import './Chatbot.css';


function Chatbot({ apiKey, models }) {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [selectedModel, setSelectedModel] = useState(models[0]);

  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);

  const sendMessage = async () => {
    // Add the user's message to the conversation
    setConversation(prevConversation => [
      ...prevConversation,
      {
        text: message,
        sender: 'user',
      },
    ]);

    // Send the user's message to the API
    const completion = await openai.createChatCompletion({
      model: selectedModel,
      messages: [{ role: 'user', content: message }],
    });

    // Add the bot's response to the conversation
    setConversation(prevConversation => [
      ...prevConversation,
      {
        text: completion.data.choices[0].message.content,
        sender: 'bot',
      },
    ]);
    console.log(completion.data.choices[0].message.content)

    // Clear the message input
    setMessage('');
  };

  return (
    <div className="chatbot-container">
    <div className="model-select">
      <select value={selectedModel} onChange={e => setSelectedModel(e.target.value)}>
        {models.map(model => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>
    </div>
    <div className="conversation">
        {conversation.map((message, index) => (
          <div key={index}>
            {message.sender === 'user' && (
              <div className="user-message">
                You: {message.text}
              </div>
            )}
            {message.sender === 'bot' && (
              <div className="bot-message">
                Bot: {message.text}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="input-message-box">
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => {
  if (e.key === 'Enter') {
    sendMessage();
  }}} />
  <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
            }  

export default Chatbot;
