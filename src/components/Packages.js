import React from 'react';
import './Packages.css';

const Packages = () => {
  const handleSelectPackage = (packageName, price) => {
    document.getElementById('package').value = `${packageName} - ₹${price}`;
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="packages" className="packages">
      <div className="container">
        <h2>Choose Your Experience</h2>
        <p className="section-subtitle">Select the perfect package for your Bhigwan adventure</p>

        <div className="packages-grid">
          {/* Basic Package */}
          <div className="package-card">
            <div className="package-header">
              <h3>Basic Package</h3>
              <p className="package-description">Perfect for a day trip</p>
            </div>
            <div className="package-price">₹1500 <span>per person</span></div>
            <ul className="package-features">
              <li><i className="fas fa-check"></i> One day bird watching tour</li>
              <li><i className="fas fa-check"></i> Expert naturalist guide</li>
              <li><i className="fas fa-check"></i> Sunrise boat safari</li>
              <li><i className="fas fa-check"></i> Village flavors (breakfast)</li>
              <li><i className="fas fa-check"></i> Bird watching equipment</li>
              <li className="unavailable"><i className="fas fa-times"></i> Night jungle safari</li>
              <li className="unavailable"><i className="fas fa-times"></i> Comfortable stay</li>
            </ul>
            <button 
              className="book-btn"
              onClick={() => handleSelectPackage('Basic Package', 1500)}
            >
              Book Basic Package
            </button>
          </div>

          {/* Premium Package */}
          <div className="package-card featured">
            <div className="recommended-badge">Recommended</div>
            <div className="package-header">
              <h3>Premium Package</h3>
              <p className="package-description">Complete immersive experience</p>
            </div>
            <div className="package-price">₹2200 <span>per person</span></div>
            <ul className="package-features">
              <li><i className="fas fa-check"></i> One day bird watching tour</li>
              <li><i className="fas fa-check"></i> Expert naturalist guide</li>
              <li><i className="fas fa-check"></i> Sunrise boat safari</li>
              <li><i className="fas fa-check"></i> Village flavors (all meals)</li>
              <li><i className="fas fa-check"></i> Bird watching equipment</li>
              <li><i className="fas fa-check"></i> One night comfortable stay</li>
              <li><i className="fas fa-check"></i> Night jungle safari experience</li>
            </ul>
            <button 
              className="book-btn featured-btn"
              onClick={() => handleSelectPackage('Premium Package', 2200)}
            >
              Book Premium Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
