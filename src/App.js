import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./header/Header";
import AboutUsPage from './AboutUsPage/AboutUsPage';
import HomePage from './HomePage';
import HowItWork from './HowItWork/HowItWork';
import "./styles.css";
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faTimes } from '@fortawesome/free-solid-svg-icons';
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";
import "./App.css";
import WorkWithUs from './WorkWithUs/WorkWithUs';

export default function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };

  const closeChatbot = () => {
    setShowChatbot(false);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/how" element={<HowItWork />} />
          <Route path="/work" element={<WorkWithUs />} />
        </Routes>
        {!showChatbot && (
          <button onClick={toggleChatbot} className="chatbot-toggle-button">
            <FontAwesomeIcon icon={faComments} />
          </button>
        )}
        {showChatbot && (
          <div className="chatbot-container">
            <button onClick={closeChatbot} className="chatbot-close-button">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        )}
      </div>
    </Router>
  );
}
