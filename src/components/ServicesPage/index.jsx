import React from 'react';
import ServiceCard from '../shared/ServiceCard/ServiceCard';
import { servicesData } from '../constants';
import './ServicesPage.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={{ ...service, index }} />
        ))}
      </div>
    </div>
  );
};

export default Services;
