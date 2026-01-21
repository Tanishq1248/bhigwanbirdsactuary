import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  // Easy to manage: Just add or remove images from this array
  const galleryImages = [
    {
      id: 1,
      src: 'bird1.jpg',
      alt: 'Painted Stork',
      title: 'Painted Stork',
      description: 'A magnificent wading bird with striking colors'
    },
    {
      id: 2,
      src: 'bird2.jpg',
      alt: 'Indian Skimmer',
      title: 'Indian Skimmer',
      description: 'Rare skimmer species found at Bhigwan'
    },
    {
      id: 3,
      src: 'bird3.jpg',
      alt: 'Flamingos',
      title: 'Flamingos',
      description: 'Beautiful pink flamingos during migration season'
    },
    {
      id: 4,
      src: 'bird4.jpg',
      alt: 'Duck Species',
      title: 'Duck Species',
      description: 'Various duck species inhabiting the sanctuary'
    },
    {
      id: 5,
      src: 'bird5.jpg',
      alt: 'Egret',
      title: 'Egret',
      description: 'Graceful egrets in their natural habitat'
    },
    {
      id: 6,
      src: 'bird6.jpg',
      alt: 'Kingfisher',
      title: 'Kingfisher',
      description: 'Colorful kingfisher diving for fish'
    }
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2>Bird Gallery</h2>
          <p className="section-subtitle">Explore the diverse bird species at Bhigwan Bird Sanctuary</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <button className="view-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            
            <div className="modal-image-container">
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>

            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>

            <div className="modal-navigation">
              <button className="nav-btn prev-btn" onClick={goToPrevious}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <span className="image-counter">
                {currentIndex + 1} / {galleryImages.length}
              </span>
              <button className="nav-btn next-btn" onClick={goToNext}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
