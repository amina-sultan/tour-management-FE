import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. How can I assist you?');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleServices = () => {
    const botMessage = createChatBotMessage('Please visit the services menu for the complete details of services.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleContacts = () => {
    const botMessage = createChatBotMessage('Please visit contact menu for the contact details.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleUnknown = () => {
    const botMessage = createChatBotMessage("I'm sorry, I don't understand. Please ask another question.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleThanks = () => {
    const botMessage = createChatBotMessage("You're welcome! Feel free to ask if you need any further assistance.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleServices,
            handleContacts,
            handleUnknown,
            handleThanks,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
