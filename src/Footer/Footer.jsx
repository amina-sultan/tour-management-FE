import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
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
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          <span><a href="https://web.whatsapp.com/send/?phone=923034441674&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank" title="Share on WhatsApp" id="action-button" class="_9vcv _advm _9scb" data-ms="{&quot;creative&quot;:&quot;link&quot;}"><span class="_advp _aeam">Continue to Chat on whatsapp</span></a></span>
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
