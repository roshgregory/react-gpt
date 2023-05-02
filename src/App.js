import React from 'react';
import Chatbot from './Chatbot';

function App() {

   const models = ['gpt-4-0314', 'gpt-3.5-turbo', 'gpt-4', 'gpt-3.5-turbo-0301'];
   const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  return (
    <div>
      <Chatbot apiKey={apiKey} models={models} />
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import axios from 'axios';
// import Chatbot from './Chatbot';

// function App() {
//     const [message, setMessage] = useState('');
//     const [model, setModel] = useState('');
//     const [result, setResult] = useState('');
//     const [apiKey, setApiKey] = useState(localStorage.getItem('chatgpt_api_key') || '');
  
//     const handleApiKeyChange = (event) => {
//       setApiKey(event.target.value);
//       localStorage.setItem('chatgpt_api_key', event.target.value);
//     };
  
//     const handleModelChange = (event) => {
//       setModel(event.target.value);
//     };
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
  
//       if (!message) {
//         return;
//       }
  
//       if (!apiKey) {
//         alert('Please enter your ChatGPT API key.');
//         return;
//       }
  
//       const url = `https://api.openai.com/v1/chat/completions`;
//       const data = JSON.stringify({ "model":"gpt-3.5-turbo" , "messages": [{"role": "user", "content": "Say this is a test!"}], "temperature": 0.7 });
//       const headers = {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`,
//       };
  
//       try {
//         const response = await axios.post(url, data, { headers });
//         console.log(response)
//         setResult(response.data.choices[0].text);
//         setMessage('');
//       } catch (error) {
//         console.error(error);
//         setResult(`Error: ${error.message}`);
//       }
//     };
  
//     return (
//       <div>
//         <h1>ChatGPT</h1>
//         <form onSubmit={handleSubmit}>
//           <label>
//             API key:
//             <input type="text" value={apiKey} onChange={handleApiKeyChange} />
//           </label>
//           <br />
//           <label>
//             Model:
//             <select value={model} onChange={handleModelChange}>
//               <option value="davinci-codex">davinci-codex</option>
//               <option value="davinci">davinci</option>
//               <option value="curie">curie</option>
//               <option value="babbage">babbage</option>
//               <option value="ada">ada</option>
//               <option value="gpt-3-175b">gpt-3-175b</option>
//               <option value="gpt-3-13b">gpt-3-13b</option>
//               <option value="gpt-3-6b">gpt-3-6b</option>
//               <option value="gpt-3-2.7b">gpt-3-2.7b</option>
//               <option value="gpt-3-1.75b">gpt-3-1.75b</option>
//               <option value="gpt-3-1.3b">gpt-3-1.3b</option>
//               <option value="gpt-3-761">gpt-3-761</option>
//               <option value="gpt-4-0314">gpt-4-0314</option>
//             </select>
//           </label>
//           <br />
//           <label>
//             Message:
//             <input
//               type="text"
//               value={message}
//               onChange={(event) => setMessage(event.target.value)}
//             />
//           </label>
//           <br />
//           <button type="submit">Send</button>
//         </form>
//         <div>
//           {result ? <p>{result}</p> : null}
//         </div>
//       </div>
//     );
//   }
  
//   export default App;