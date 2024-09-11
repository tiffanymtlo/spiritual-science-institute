import React from 'react';
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
        <h1>All Products</h1>
        <p>
          This is your category description. It's a great place to tell
          customers what this category is about, connect with your audience,
          and draw attention to your products.
        </p>
      </div>
    </div>
  );
};

export default Header;
