import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/Button';
import {
  servicesData,
  MAX_HOME_SERVICES_INITIAL_DESCRIPTION,
  MAX_SERVICES_PAGE_INITIAL_DESCRIPTION,
} from '../../constants';
import './Services.css';

const Service = ({ service }) => {
  const { id, name, price, imgPath, description } = service;

  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const expandReadMore = (e) => {
    e.stopPropagation();
    setIsExpanded(true);
  };

  const onServiceCardClick = () => {
    navigate(`/service/${id}`);
  };

  const displayDescription = () => {
    if (!isExpanded) {
      if (description.length <= MAX_HOME_SERVICES_INITIAL_DESCRIPTION) {
        return description;
      }
      return `${description.substring(0, MAX_HOME_SERVICES_INITIAL_DESCRIPTION)}...`;
    } else {
      if (description.length > MAX_SERVICES_PAGE_INITIAL_DESCRIPTION) {
        return `${description.substring(0, MAX_SERVICES_PAGE_INITIAL_DESCRIPTION)}...`;
      }
      return description;
    }
  };

  return (
    <div className="service" onClick={onServiceCardClick}>
      <img src={process.env.PUBLIC_URL + imgPath[0]} alt={"Service " + id} />
      <div className="service-content">
        <h3>{name}</h3>
        <h5>{displayDescription()}</h5>
        {description.length > MAX_HOME_SERVICES_INITIAL_DESCRIPTION && !isExpanded &&
        <button className="read-more-btn" onClick={expandReadMore}>Read More</button>}
        <hr className='service-divider' />
        <p>$ {price}</p>
        <Button className="service-button" size="small">Book Now</Button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="service-list">
        {servicesData.map(service => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
