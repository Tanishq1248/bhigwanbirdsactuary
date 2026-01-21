import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      
      <div className="location-badge">
        <i className="fas fa-map-marker-alt"></i> MAHARASHTRA, INDIA
      </div>

      <div className="hero-big-text">BHIGWAN</div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="hero-title-white">Bhigwan Bird</span>
            <span className="hero-title-orange">Sanctuary</span>
          </h1>
          <p>Experience the magnificent Greater Flamingos in their natural habitat. A paradise for bird watchers and nature lovers.</p>
          
          <div className="hero-buttons">
            <a href="#booking" className="hero-btn book-btn">Book Your Visit</a>
            <a href="#packages" className="hero-btn packages-btn">View Packages</a>
          </div>

          <div className="hero-contact">
            <div className="contact-item">
              <i className="fab fa-instagram"></i>
              <span>@bhigwan_birds</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>91+ 9075013542</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <img 
            src="bgimage.jpeg" 
            alt="Flamingos at Bhigwan" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
