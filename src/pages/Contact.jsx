/* src/components/Contact.jsx */


import '../assets/css/Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p><a href="mailto:lidiyamkt@gmail.com" className="email-link">lidiyamkt@gmail.com</a></p>
             <p><a href="mailto:ementmk@gmail.com" className="email-link">ementmk@gmail.com</a></p>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <p>+251975649898</p>
            <p>+251913460116</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>Nifas Silk Lafto, Addis Ababa, Ethiopia</p>
          </div>
        </div>
        <p className="contact-message">
          Feel free to reach out to us for any inquiries or collaboration opportunities. We would love to hear from you!
        </p>
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
