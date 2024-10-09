import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import textsEng from '../../texts/strings_eng';
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
          <h2>{textsEng['company.title']}</h2>
        </div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">{textsEng['header.nav.home']}</Link></li>
            <li><Link to="/about">{textsEng['header.nav.about']}</Link></li>
            <li className="nav-item-expandable">
              <Link to="/products">{textsEng['header.nav.products']}</Link>
              <div className="dropdown-content">
                <ul>
                  <li>
                    <Link to="/products">
                      {textsEng['header.nav.dropdown.products.allProducts']}
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/i-ching-cards-instructions">
                      {textsEng['header.nav.dropdown.products.iChingCardsInstructions']}
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/i-ching-cards-explanations">
                      {textsEng['header.nav.dropdown.products.iChingCardsExplanations']}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item-expandable">
              <Link to="/services">{textsEng['header.nav.services']}</Link>
              <div className="dropdown-content">
                <ul>
                  <li>
                    <Link to="/services">
                      {textsEng['header.nav.dropdown.services.allServices']}
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/more-info">
                      {textsEng['header.nav.dropdown.services.moreInfo']}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li><Link to="/classes">{textsEng['header.nav.classes']}</Link></li>
            <li><Link to="/testimonials">{textsEng['header.nav.testimonials']}</Link></li>
            <li><Link to="/contact">{textsEng['header.nav.contact']}</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
