import React from 'react';
import Hero from './Hero/Hero';
import AboutUs from './AboutUs/AboutUs';
import Offerings from './Products/Products';
import Services from './Services/Services';
import Classes from './Classes/Classes';
import Testimonials from './Testimonials/Testimonials';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Offerings />
      <Services />
      <Classes />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Home;
