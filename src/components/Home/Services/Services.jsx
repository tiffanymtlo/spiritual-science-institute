import React, { useState } from 'react';
import Button from '../../shared/Button/Button';
import './Services.css';

const MAX_INITIAL_DESCRIPTION_LENGTH = 200; // Number of characters to show before truncating

const Service = ({ id, name, price, imgPath, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandReadMore = () => {
    setIsExpanded(true);
  };

  return (
    <div className="service">
      <img src={process.env.PUBLIC_URL + imgPath} alt={"Service " + id} />
      <div className="service-content">
        <h3>{name}</h3>
        <h5>
          {description.length > MAX_INITIAL_DESCRIPTION_LENGTH && !isExpanded ?
          `${description.substring(0, MAX_INITIAL_DESCRIPTION_LENGTH)}...` : description}
        </h5>
        {description.length > MAX_INITIAL_DESCRIPTION_LENGTH && !isExpanded && <button className="read-more-btn" onClick={expandReadMore}>Read More</button>}
        <hr className='service-divider' />
        <p>{price}</p>
        <Button className="service-button" size="small">Book Now</Button>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Reiki Energy Reform Healing',
      price: '¥1,800',
      imgPath: '/energy_reform_landscape.webp',
      description: 'Reiki is a form of alternative therapy commonly referred to as energy healing. It emerged in Japan in the late 1800s and is said to involve the transfer of universal energy from the practitioner\'s palms to their patient',
    },
    {
      id: 2,
      name: 'Feng Shui Home / Office Visit',
      price: '¥15 per sq. ft',
      imgPath: '/fengshui.jpeg',
      description: 'Feng shui is a practice from ancient China that reveals how to balance the energies of any given space to assure the health and good fortune for people inhabiting it',
    },
    {
      id: 3,
      name: 'Ba Zi Fate Analysis',
      price: '¥2,200',
      imgPath: '/ba_zi.png',
      description: 'Ba Zi is a form of Chinese Astrology that reveals the secrets of a person\'s fate and destiny. It is also known as the "Four Pillars of Destiny"',
    },
    {
      id: 4,
      name: 'Iching Cards Fortune-telling',
      price: '¥980',
      imgPath: '/iching_cards_analysis.png',
      description: 'Iching is an ancient Chinese divination text and the oldest of the Chinese classics. Possessing a history of more than two and a half millennia of commentary and interpretation, the I Ching is an influential text read throughout the world, providing inspiration to the worlds of religion, psychoanalysis, business, literature, and art',
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="service-list">
        {services.map(service => (
          <Service key={service.id} id={service.id} name={service.name} price={service.price} imgPath={service.imgPath} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default Services;
