import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img className='footer-logo' src={process.env.PUBLIC_URL + '/name_card_crop.png'} alt="footer logo" />
      <div className='footer-texts'>
        <h3 className="footer-title">SpiritualScience Institute</h3>
        <p className="footer-subtitle">© 2024 SpiritualScience Institute all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
