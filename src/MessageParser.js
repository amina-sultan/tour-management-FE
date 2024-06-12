import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    message = message.toLowerCase();

    if (message.includes('hello')) {
      actions.handleHello();
    } else if (message.includes('services')) {
      actions.handleServices();
    }else if (message.includes('contact')) {
      actions.handleContacts();
    }else if (message.includes('tour')) {
      actions.handleServices();
    }else if (message.includes('thanks')) {
      actions.handleThanks();
    }else{
      actions.handleUnknown();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
