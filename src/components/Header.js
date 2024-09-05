import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/name_card_crop.png'} alt="SpiritualScience Institute" />
        <h1>SpiritualScience Institute</h1>
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
          <p>Avenir Light is a clean and stylish font favored by designers Lorem ipsum dolor sit amet consectetur adipiscing elit fermentum mauris accumsan nulla, enim platea eget fringilla suspendisse morbi mus proin magna fames mi, molestie venenatis nullam hendrerit augue neque aliquet netus libero sagittis. Iaculis hendrerit in vehicula vel curae, risus fames pulvinar porta euismod, nisl parturient tellus litora. Porttitor posuere nec per mauris vestibulum dui at nostra facilisis vulputate purus integer fermentum vivamus non, urna imperdiet praesent aptent libero class accumsan laoreet pretium hac montes conubia id. Nibh molestie neque natoque dui nascetur vestibulum ut nunc quis nisi placerat scelerisque eget proin, morbi erat imperdiet tortor dictumst viverra primis vivamus tempus suscipit duis velit. Mi eros eget quis euismod feugiat venenatis ante facilisi, senectus lacus purus natoque tempor lacinia metus, mus viverra fringilla sodales montes condimentum donec. Libero accumsan nullam mi mauris praesent elementum velit dis imperdiet tortor urna laoreet, inceptos pretium leo aenean morbi iaculis dictum maecenas vivamus tellus vulputate, lacus class curabitur quam ornare turpis eget orci parturient sociis augue. Ligula pretium nascetur laoreet vulputate magnis duis ullamcorper scelerisque dictum senectus molestie a, suspendisse at risus odio parturient lectus facilisi dui donec fermentum egestas, eros taciti nam arcu imperdiet ut faucibus tempor cras penatibus aenean.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
