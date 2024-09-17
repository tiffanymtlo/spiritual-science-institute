import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setIsScrollingDown(true);
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up
      setIsScrollingDown(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header className={`header ${isScrollingDown ? 'header-hidden' : 'header-visible'}`}>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/name_card_crop.png'} alt="SpiritualScience Institute logo" />
          <h2>SpiritualScience Institute</h2>
        </div>
        <nav className="navbar">
          <ul>
            {/* <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#offerings">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
