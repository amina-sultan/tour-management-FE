import React, { useState } from 'react';
import Header from "./header/Header";
import "./styles.css";
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faTimes } from '@fortawesome/free-solid-svg-icons';
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";
import ImageSlider from './ImageSlider/ImageSlider';
import "./App.css";

export default function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };

  const closeChatbot = () => {
    setShowChatbot(false);
  };

  return (
    <div className="App">
      <Header />
      <ImageSlider />
      <header className="App-header">
        <h1>SadaBahar Tours</h1>
      </header>
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
  );
}
