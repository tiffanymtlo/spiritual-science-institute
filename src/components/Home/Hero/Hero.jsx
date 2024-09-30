import React from 'react';
import textsEng from '../../../texts/strings_eng';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>{textsEng['home.hero.title']}</h1>
        <p>{textsEng['home.hero.subtitle']}</p>
      </div>
    </div>
  );
}

export default Hero;
