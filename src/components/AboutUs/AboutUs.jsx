import React from 'react';
import Button from '../Button/Button';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <h2>About Us</h2>
      <div className="about-content">
        <img src={process.env.PUBLIC_URL + '/pallas_profile_pic.jpeg'} alt="Founder" />
        <div className="text-content">
          <h3>Embrace Spiritual Wellness</h3>
          <p>Welcome to the Spiritual Science Institute, a sanctuary of spiritual soothing and feng shui practices in the heart of Hong Kong founded by Pallas Ng. We are dedicated to promoting harmony and balance through our services and products, designed to elevate your spiritual journey. Our clean, minimalist design is infused with positive energy and the vibrant hues of the seven chakra colors, creating a serene atmosphere for your well-being and enlightenment.</p>
          <Button size="medium">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
