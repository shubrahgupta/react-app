import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatUI from './Chatbot';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    window.location.href = '/chatbot';
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="landing-page">
            <div className="content-wrapper">
              <div className="heading-section">
                <h1 className="title">ChatWave</h1>
                <p className="subtitle">Experience conversations reimagined</p>
              </div>

            <div className="overlay">
              {/* <h1>Let me help you !</h1> */}
              {/* <p>Where are you?</p> */}
              <div className="search-container">
              <label htmlFor="message" className="label">
              What would you like to talk about?
            </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter your text here"
                />
                
              </div>
              <button onClick={handleButtonClick}>Submit</button>
            </div>
            </div>
          </div>
        } />
        <Route path="/chatbot" element={<ChatUI />} />
      </Routes>
    </Router>
  );
}

export default App;
