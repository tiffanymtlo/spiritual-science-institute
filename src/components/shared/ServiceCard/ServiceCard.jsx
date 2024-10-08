import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import { MAX_SERVICES_PAGE_INITIAL_DESCRIPTION } from '../../constants';
import textsEng from '../../../texts/strings_eng';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const { id, name, description, duration, price, imgPath, index } = service;
  const navigate = useNavigate();

  const onServiceCardClick = () => {
    navigate(`/service/${id}`);
  };

  return (
    <div
      className={`service-card ${index % 2 === 0 ? 'image-right' : 'image-left'}`}
      onClick={onServiceCardClick}
    >
      <div className="service-card-image">
        <img src={process.env.PUBLIC_URL + imgPath[0]} alt={name} />
      </div>
      <div className="service-card-content">
        <h3>{name}</h3>
        <p>
          {description.length > MAX_SERVICES_PAGE_INITIAL_DESCRIPTION ?
          `${description.substring(0, MAX_SERVICES_PAGE_INITIAL_DESCRIPTION)}...` :
          description}
        </p>
        <hr className='service-card-divider' />
        <div className="service-card-info">
          <p>{duration}</p>
          <p>$ {price}</p>
        </div>
        <Button className="book-now">{textsEng['servicePage.serviceDetails.bookNow.button']}</Button>
      </div>
    </div>
  );
};

export default ServiceCard;
