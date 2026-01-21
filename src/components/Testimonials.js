import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Pune, Maharashtra",
      text: "An absolutely magical experience! The guides were incredibly knowledgeable and we spotted over 40 different bird species. The sunrise boat safari was unforgettable!",
      stars: 5
    },
    {
      name: "Priya Deshmukh",
      location: "Mumbai, Maharashtra",
      text: "The premium package was totally worth it. The village food was delicious, and the night jungle safari was thrilling. Our kids loved learning about different bird species!",
      stars: 5
    },
    {
      name: "Aditya Kulkarni",
      location: "Aurangabad, Maharashtra",
      text: "Best birding destination in India! The equipment provided was top-notch, and our guide Vitthal was phenomenal. We're already planning our next visit!",
      stars: 5
    },
    {
      name: "Neha Joshi",
      location: "Nashik, Maharashtra",
      text: "Perfect getaway from city life! The accommodation was clean and comfortable, and the food authentic. Saw the rare Indian skimmer here. Highly recommended!",
      stars: 5
    },
    {
      name: "Vikram Gawande",
      location: "Indore, Madhya Pradesh",
      text: "The booking process was smooth and the team was very responsive on WhatsApp. Amazing sunrise views and excellent photography opportunities. Worth every penny!",
      stars: 5
    },
    {
      name: "Sneha Iyer",
      location: "Thane, Maharashtra",
      text: "A unique blend of adventure and learning. The night safari was the highlight - such an immersive experience! The guides are truly passionate about conservation.",
      stars: 5
    },
    {
      name: "Mahesh Patil",
      location: "Kolhapur, Maharashtra",
      text: "Outstanding hospitality and service! The basic package gave us everything we needed for a fantastic day out. The fishing nets area was incredible for photography!",
      stars: 5
    },
    {
      name: "Anjali & Rohit Nair",
      location: "Nagpur, Maharashtra",
      text: "We booked for our wedding anniversary and got premium treatment. Saw 35 bird species in a single day! The guides' passion for birds is infectious.",
      stars: 5
    },
    {
      name: "Deepak Singh",
      location: "Pimpri-Chinchwad, Maharashtra",
      text: "The booking confirmation came via WhatsApp instantly - very convenient! The Premium package included everything mentioned. Best weekend trip we've had this year!",
      stars: 5
    },
    {
      name: "Kavya Chatterjee",
      location: "Pune, Maharashtra",
      text: "Bhigwan is a hidden gem! The village homestay experience was authentic and the home-cooked meals were delicious. Our 10-year-old learned so much about migratory birds!",
      stars: 5
    },
    {
      name: "Suresh Rao",
      location: "Belgaum, Karnataka",
      text: "Professional team, excellent organization, and reasonable pricing. We spotted the rare painted stork here! Will definitely return for the monsoon season visit.",
      stars: 5
    },
    {
      name: "Ritu Patel",
      location: "Ahmedabad, Gujarat",
      text: "Exceeded our expectations! The nature walk was serene, the wildlife photography session was productive, and the sunset from the boat was magical. Highly recommended!",
      stars: 5
    },
    {
      name: "Arjun Desai",
      location: "Satara, Maharashtra",
      text: "The responsiveness of the team was amazing - all queries answered within minutes on WhatsApp! The experience was worth every paisa. Highly authentic and memorable!",
      stars: 5
    },
    {
      name: "Pooja Sinha",
      location: "Mira Road, Maharashtra",
      text: "Perfect destination for nature enthusiasts! The guides explained bird behavior and ecology beautifully. The equipment rental was affordable and well-maintained.",
      stars: 5
    },
    {
      name: "Gaurav Mishra",
      location: "Bangalore, Karnataka",
      text: "From booking to experience, everything was seamless. The premium package's overnight stay was comfortable, and breakfast with a view of the lake was perfect!",
      stars: 5
    }
  ];

  const StarRating = ({ stars }) => (
    <div className="stars">
      {[...Array(stars)].map((_, i) => (
        <i key={i} className="fas fa-star"></i>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>Visitor Testimonials</h2>
        <p className="section-subtitle">What travelers from Maharashtra say about their experience</p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <StarRating stars={testimonial.stars} />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
