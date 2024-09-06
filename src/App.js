import React from 'react';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Offerings from './components/Products/Products';
import Services from './components/Services/Services';
import Classes from './components/Classes/Classes';
import Testimonials from './components/Testimomials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Offerings />
      <Services />
      <Classes />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
