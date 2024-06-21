import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>123 Street, City, Country</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span>+92 3338798767</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span><a href="mailto:info@example.com">aminasultan017@gmail.com</a></span>
        </div>
        <div>
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          <span><a href="https://www.facebook.com/profile.php?id=61560464323932" target="_blank" rel="noopener noreferrer">Facebook</a></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
