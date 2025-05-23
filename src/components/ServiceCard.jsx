import React from 'react';
import './ServiceCard.css';

function ServiceCard({ title, description }) {
  return (
    <div className="service-card" id='services'>
      <h3>{title}</h3>
      <p className='card-description'>{description}</p>
    </div>
  );
}

export default ServiceCard;
