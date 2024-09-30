import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../../shared/Button';
import textsEng from '../../../texts/strings_eng';
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/about');
  };

  return (
    <section id="about" className="about-us">
      <h2>{textsEng['home.about.title']}</h2>
      <div className="about-content">
        <img src={process.env.PUBLIC_URL + '/pallas_profile_pic.jpg'} alt="Founder" />
        <div className="text-content">
          <h3>{textsEng['home.about.subtitle']}</h3>
          <p>{textsEng['home.about.content.first.paragraph']}</p>
          <p>{textsEng['home.about.content.second.paragraph']}</p>
          <Button size="medium" onClick={handleLearnMoreClick}>{textsEng['home.about.button']}</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
