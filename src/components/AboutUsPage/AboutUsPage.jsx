import React, { useState, useEffect } from 'react';
import './AboutUsPage.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <section className="about-us-header">
        <h2>The Full Story</h2>
        <h1>About Us</h1>
        <p>
          Everyone is a ball of energy. In our daily lives, we encounter others' energies, and these energies
          intervene with one another, affecting how we perceive this world. Understanding these energies helps 
          you stay positive and harvest the most out of your journey.
        </p>
      </section>

      <section className="grid-layout">
        <div className="grid-item image-column">
          <img
            src={process.env.PUBLIC_URL + '/pallas_profile_pic_crop.jpeg'}
            alt="Person"
            className="person-image"
          />
        </div>
        <div className="grid-item text-column">
          <h2>Our Mission</h2>
          <p>
            Pallas Ng founded SpiritualScience Institute to help everyone understand and enhance their energies.
            It is our mission that every person can find their own unique regions of happiness and satisfaction.
            When you stay in touch with your true energy, you can find harmony and strength.
          </p>
        </div>

        <div className="grid-item text-column">
          <h2>About Pallas</h2>
          <p>
            Pallas graduated from the University of New South Wales in Australia, majoring in Psychology. Over the 
            19 years of her career, she held senior management positions at Cathay Pacific Airways and in freight 
            forwarding and courier companies. With more than 14 years of experience in spiritual communication and 
            fortune-telling, she specializes in:
          </p>
          <ul>
            <li>BaZi</li>
            <li>Feng Shui</li>
            <li>Palm Reading</li>
            <li>Face Reading</li>
            <li>Iching Fortune-telling</li>
            <li>Past Life Regression Hypnosis</li>
            <li>Inner Child Spiritual Communication</li>
          </ul>
        </div>
        <div className="grid-item image-column">
        <img src={process.env.PUBLIC_URL + '/about-us-collage.png'} alt="Pallas' journey" className="large-image" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
