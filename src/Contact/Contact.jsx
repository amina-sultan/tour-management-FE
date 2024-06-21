import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Footer from '../Footer/Footer';
import www from "../assets/www.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      from_name: formData.from_name,
      message: formData.message
    };

    emailjs.send('service_3s87rgp', 'template_s9pixea', templateParams, 'N6bdv7eBfdsNlnefR')
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Message Sent Successfully');
        setFormData({ user_name: '', user_email: '', message: '' });
      }, (error) => {
        console.error('Error sending email:', error);
        alert('An error occurred, please try again');
      });
  };

  return (
    <div className="contact-page-container">
      <div className="main-content">
        <div className="contact-form-container">
          <h3>We'd love to hear from you</h3>
          <h4>Send us a message and we'll respond as soon as possible</h4>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input  htmlFor="user-input"
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input  htmlFor="user-input"
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </label>
            <div className="textarea-container">
              <label htmlFor="message">Message:</label>
              <textarea htmlFor="message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-image-container">
          <img src={www} alt="Contact Us" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
