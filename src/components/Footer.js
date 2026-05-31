import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import './Footer.css';

const Footer = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+923469078839";
    const url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(phoneNumber);
    window.open(url, "_blank");
  };

  const openInstagram = () => {
    const username = "hamii_mhk03";
    const url = "https://www.instagram.com/" + encodeURIComponent(username);
    window.open(url, "_blank");
  };

  const openFacebook = () => {
    const username = "Hamza.Khan.Mhk003";
    const url = "https://www.facebook.com/" + encodeURIComponent(username);
    window.open(url, "_blank");
  };

  const openMessenger = () => {
    const username = "Hamza.Khan.Mhk003";
    const url = "https://m.me/" + encodeURIComponent(username);
    window.open(url, "_blank");
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="upper-footer">
          <div className="social-contact">
            <h2>Contact:</h2>
            <p>If you have any inquiries or would like to get in touch, feel free to reach out to me.</p>
            <div className="list-group list-group-horizontal">
              <a href="#" onClick={openWhatsApp}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="#" onClick={openInstagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" onClick={openFacebook}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" onClick={openMessenger}>
                <FontAwesomeIcon icon={faFacebookMessenger} />
              </a>
            </div>
          </div>

          <div className="address-contact">
            <h2>Address:</h2>
            <p>Sector G-10, Islamabad, Pakistan</p>
            <div className="list-group list-group-horizontal">
              <a href="mailto:hamzakhant9@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="tel:+923469078839">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
