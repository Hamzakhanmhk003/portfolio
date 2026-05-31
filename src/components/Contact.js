import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Check if any fields are empty
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/messages', formData);
      if (res.data.success) {
        alert('Message sent successfully!');
        console.log(formData);
        setFormData({ name: '', email: '', message: '' }); // Reset form
        setError(''); // Clear error if successful
      }
    } catch (err) {
      alert('Error sending message');
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-card">
          <p className="card-subtitle">Don't be shy</p>
          <h2 className="h2 section-title">Drop Me a Message</h2>
          <div className="wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              {error && <p className="error-message">{error}</p>} {/* Display error message */}
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                required 
                className="contact-input" 
                value={formData.name}
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                className="contact-input" 
                value={formData.email}
                onChange={handleChange}
              />
              <textarea 
                name="message" 
                placeholder="Message" 
                required 
                className="contact-input" 
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="btn-submit">Submit Message</button>
            </form>
            <ul className="contact-list">
              <li className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                </div>
                <div>
                  <h3 className="contact-item-title">Address</h3>
                  <address className="contact-item-link">Sector G-10, Islamabad, Pakistan</address>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </div>
                <div>
                  <h3 className="contact-item-title">Email</h3>
                  <a href="mailto:hamzakhant8@gmail.com" className="contact-item-link">hamzakhant8@gmail.com</a>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faPhone} size="lg" />
                </div>
                <div>
                  <h3 className="contact-item-title">Phone</h3>
                  <a href="tel:+923469078839" className="contact-item-link">+92346-9078839</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
