import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
      <a 
        href="https://wa.me/919075013542?text=Hello%20Bhigwan%20Birds%21%20I%20would%20like%20to%20book%20a%20visit." 
        target="_blank" 
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default WhatsAppButton;
