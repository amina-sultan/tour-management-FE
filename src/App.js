import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import AboutUsPage from './AboutUsPage/AboutUsPage';
import HomePage from './HomePage';
import HowItWork from './HowItWork/HowItWork';
import './styles.css';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faTimes } from '@fortawesome/free-solid-svg-icons';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';
import './App.css';
import WorkWithUs from './WorkWithUs/WorkWithUs';
import Contact from './Contact/Contact';
import CreateServiceFormServices from './Services/CreateServiceForm';
import ServicesList from './Services/ServiceList';
import EditService from './Services/EditService';
import DeleteService from './Services/DeleteService';
import Login from './LoginSignup/Login';
import Signup from './LoginSignup/Signup';
import BlogList from './Blog/BlogList';

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
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/how" element={<HowItWork />} />
          <Route path="/work" element={<WorkWithUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bloglist" element={<BlogList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<CreateServiceFormServices />} />
          <Route path="/serviceslist" element={<ServicesList />} />
          <Route path="/editservice/:id" element={<EditService />} />
          <Route path="/deleteservice/:id" element={<DeleteService />} />
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
