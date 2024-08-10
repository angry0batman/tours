import React from 'react';
import './TourCard.css';

const TourCard = ({ image, title, nights, price }) => {
  return (
    <div className="tour-card">
      <img src={image} alt={title} className="tour-image" />
      <div className="tour-info">
        <h3>{title}</h3>
        <p>{nights}</p>
        <p>US${price} per person</p>
      </div>
    </div>
  );
};

export default TourCard;
