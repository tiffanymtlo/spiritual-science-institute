import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/name_card_crop.png'} alt="SpiritualScience Institute logo" />
        <h2>SpiritualScience Institute</h2>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#offerings">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#classes">Classes</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="hero">
        <div className="hero-text">
          <h1>Discover Inner Harmony</h1>
          <p>Avenir Light is a clean and stylish font favored by designers Lorem ipsum dolor sit amet consectetur adipiscing elit fermentum mauris accumsan nulla, enim platea eget fringilla suspendisse morbi mus proin magna fames mi, molestie venenatis nullam hendrerit augue neque aliquet netus libero sagittis. Iaculis hendrerit in vehicula vel curae, risus fames pulvinar porta euismod, nisl parturient tellus litora. Porttitor posuere nec per mauris vestibulum dui at nostra facilisis vulputate purus integer fermentum vivamus non, urna imperdiet praesent aptent libero class accumsan laoreet pretium hac montes conubia id.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
