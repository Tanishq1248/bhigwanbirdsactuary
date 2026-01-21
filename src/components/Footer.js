import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Bhigwan Bird Sanctuary</h3>
            <p>Experience the wonder of nature with expert guides and authentic village hospitality.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/bhigwan_birdsanctuary/?utm_source=qr&r=nametag" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/bhigwan_birdsanctuary/?utm_source=qr&r=nametag" title="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/bhigwan_birdsanctuary/?utm_source=qr&r=nametag" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#booking">Book Now</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p><i className="fas fa-map-marker-alt"></i> Bhigwan, Indapur, Pune, Maharashtra</p>
            <p><i className="fas fa-phone"></i> +919075013542</p>
            <p><i className="fas fa-envelope"></i> info@bhigwanbirds.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Bhigwan Bird Sanctuary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
