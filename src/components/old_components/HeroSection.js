import React from 'react';
import Button from '@mui/material/Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section class="hero">
      <div class="text-container">
        <h1>About the FengShui Oracle</h1>
        <p>The power of FengShui master in your hands. An at-home boost leading to an improved quality of life. </p>
        <Button class="how-to-use-btn" variant="contained" size="large">How to use</Button>
      </div>
      <div class="img-container">
        <img src="https://ichingspiritual.com/wp-content/uploads/2024/07/Picture12.jpg" alt="" />
        <img src="https://ichingspiritual.com/wp-content/uploads/2024/07/Picture1.jpg" alt="" />
        <img src="https://ichingspiritual.com/wp-content/uploads/2024/07/Picture3.jpg" alt="" />
        <img src="https://ichingspiritual.com/wp-content/uploads/2024/07/Picture11.jpg" alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
