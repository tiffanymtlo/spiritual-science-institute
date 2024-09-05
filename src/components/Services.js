import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="service-list">
        <div className="service">
          <img src={process.env.PUBLIC_URL + '/energy_reform_landscape.webp'} alt="Service 1" />
          <h3>Reiki Energy Reform Healing</h3>
          <p>¥1,800</p>
        </div>
        <div className="service">
          <img src={process.env.PUBLIC_URL + '/fengshui.jpeg'} alt="Service 2" />
          <h3>Feng Shui Home / Office Visit</h3>
          <p>¥15 per sq. ft</p>
        </div>
        <div className="service">
          <img src={process.env.PUBLIC_URL + '/ba_zi.png'} alt="Service 3" />
          <h3>Ba Zi Fate Analysis</h3>
          <p>¥2,200</p>
        </div>
        <div className="service">
          <img src={process.env.PUBLIC_URL + '/iching_cards_analysis.png'} alt="Service 4" />
          <h3>Iching Cards Fortune-telling</h3>
          <p>¥980</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
