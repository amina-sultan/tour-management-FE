import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './Compnents/BotAvatar/BotAvatar';
import 'react-chatbot-kit/build/main.css';


const config = {
  initialMessages: [createChatBotMessage('Welcome to the Tour Management Help Center.')],
  botName: "TMS",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
    header: () => <div className="bot-header">Converstaion with TMS</div>
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#22547c",
    },
    chatButton: {
      backgroundColor: "#22547c",
    },
  }
};

export default config;
