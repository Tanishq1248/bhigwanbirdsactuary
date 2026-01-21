import React, { useState } from 'react';
import './Booking.css';
import { useAdmin } from '../context/AdminContext';

const Booking = () => {
  const { addBooking } = useAdmin();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    visitDate: '',
    numPeople: '',
    package: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save booking to admin context
    addBooking(formData);
    
    // Format message for WhatsApp
    const bookingMessage = `
Hello! I would like to book with Bhigwan Birds.

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Visit Date: ${formData.visitDate}
Number of People: ${formData.numPeople}
Package: ${formData.package}
Special Requests: ${formData.message || 'None'}

Please confirm my booking.
    `.trim();

    // Open WhatsApp with pre-filled message
    const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(bookingMessage)}`;
    window.open(whatsappLink, '_blank');

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      visitDate: '',
      numPeople: '',
      package: '',
      message: ''
    });
  };

  return (
    <section id="booking" className="booking">
      <div className="container">
        <div className="booking-container">
          <div className="booking-form-wrapper">
            <h2>Book Your Visit</h2>
            <p>Reserve your spot at Bhigwan Bird Sanctuary. We'll confirm your booking shortly.</p>

            <form id="bookingForm" className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="visitDate">Visit Date *</label>
                  <input
                    type="date"
                    id="visitDate"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="numPeople">Number of People *</label>
                  <input
                    type="number"
                    id="numPeople"
                    name="numPeople"
                    placeholder="Enter number of guests"
                    min="1"
                    value={formData.numPeople}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="package">Select Package *</label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a package</option>
                    <option value="Basic Package - ₹1500">Basic Package - ₹1500</option>
                    <option value="Premium Package - ₹2200">Premium Package - ₹2200</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Special Requests (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Any special requests or queries?"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Complete Booking</button>
              <p className="form-note">We'll contact you via WhatsApp to confirm your booking</p>
            </form>
          </div>

          <div className="booking-info">
            <h3>Why Book With Us?</h3>
            <div className="info-item">
              <i className="fas fa-star"></i>
              <div>
                <h4>Expert Guides</h4>
                <p>Experienced naturalists with deep knowledge of bird species</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-heart"></i>
              <div>
                <h4>Authentic Experience</h4>
                <p>Immerse yourself in nature at Maharashtra's top sanctuary</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-camera"></i>
              <div>
                <h4>Photography Ready</h4>
                <p>Perfect spots for bird photography and nature lovers</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-utensils"></i>
              <div>
                <h4>Local Cuisine</h4>
                <p>Enjoy authentic village flavors and local delicacies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
