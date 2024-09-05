import React, { useState, useEffect, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import './Header.css';

const LOGO_SRC = "https://ichingspiritual.com/wp-content/uploads/2021/07/Iching-Logo22.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  return (
    <header>
      <div class="logo-container">
        <div class="logo-img-container">
          <a href="#home"><img src={LOGO_SRC} alt="Spiritual Science Institute Logo" /></a>
        </div>
      </div>
      <div class="nav-container">
        <nav ref={navRef} class={isOpen ? "nav-open" : ""}>
          <div class="nav-header">
            <IconButton onClick={closeMenu} class="close-icon">
              <CloseIcon />
            </IconButton>
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <IconButton class="menu-icon" onClick={toggleMenu} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
    </header>
  );
}

export default Header;
