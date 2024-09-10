import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Offerings from './components/Products/Products';
import Services from './components/Services/Services';
import Classes from './components/Classes/Classes';
import Testimonials from './components/Testimomials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import AboutUsPage from './components/AboutUsPage';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="App">
      <Header />
      {activeTab === 'home' && <>
        <Hero />
        <AboutUs />
        <Offerings />
        <Services />
        <Classes />
        <Testimonials />
        <ContactUs />
      </>}
      {activeTab === 'about-us' && <AboutUsPage />}
      <Footer />
    </div>
  );
}

export default App;
