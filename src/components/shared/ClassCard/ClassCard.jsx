import React from 'react';
import Button from '../Button';
import './ClassCard.css';

const ClassCard = ({ classData }) => {
  const { name, description, price, imagePath, dates } = classData;

  return (
    <div className="class-card">
      <img src={process.env.PUBLIC_URL + '/' + imagePath} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <hr className='class-card-divider' />
      <p>{price}</p>
      {dates && <hr className='class-card-divider' />}
      {dates && <p>{dates}</p>}
      <Button className="class-button" size="small">{dates ? 'Book Now' : 'View Course'}</Button>
    </div>
  );
};

export default ClassCard;
