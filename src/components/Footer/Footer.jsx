import React from 'react';
import textsEng from '../../texts/strings_eng';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img className='footer-logo' src={process.env.PUBLIC_URL + '/name_card_crop.png'} alt="footer logo" />
      <div className='footer-texts'>
        <h3 className="footer-title">{textsEng['company.title']}</h3>
        <p className="footer-subtitle">{textsEng['footer.subtitle']}</p>
      </div>
    </footer>
  );
};

export default Footer;
