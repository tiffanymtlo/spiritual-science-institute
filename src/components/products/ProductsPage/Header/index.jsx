import React from 'react';
import textsEng from '../../../../texts/strings_eng';
import './Header.css';

const Header = () => {
  return (
    <div className="header-section">
      <img
        src={process.env.PUBLIC_URL + '/energy_reform_landscape.webp'}
        alt="Category Header"
        className="header-image"
      />
      <div className="header-content">
        <h1>{textsEng['productsPage.header.title']}</h1>
        <p>{textsEng['productsPage.header.subtitle']}</p>
      </div>
    </div>
  );
};

export default Header;
