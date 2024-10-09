import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home';
import Footer from './components/Footer/Footer';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import ProductsPage from './components/products/ProductsPage';
import ProductDetails from './components/products/ProductsPage/ProductDetails';
import ServicesPage from './components/services/ServicesPage';
import ServiceDetails from './components/services/ServicesPage/ServiceDetails';
import ClassesPage from './components/classes/ClassesPage';
import ClassDetails from './components/classes/ClassesPage/ClassDetails';
import TestimonialsPage from './components/TestimonialsPage';
import ContactUsPage from './components/ContactUsPage';
import IchingCardsInstructionsPage from './components/products/IchingCardsInstructionsPage';
import IchingCardsExplanationPage from './components/products/IchingCardsExplanationPage';
import MoreServicesInfoPage from './components/services/MoreServicesInfoPage';
import MoreClassesInfoPage from './components/classes/MoreClassesInfoPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/service/:serviceId' element={<ServiceDetails />} />
        <Route path='/classes' element={<ClassesPage />} />
        <Route path='/class/:classId' element={<ClassDetails />} />
        <Route path='/testimonials' element={<TestimonialsPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
        <Route path='/products/i-ching-cards-instructions' element={<IchingCardsInstructionsPage />} />
        <Route path='/products/i-ching-cards-explanations' element={<IchingCardsExplanationPage />} />
        <Route path='/services/more-info' element={<MoreServicesInfoPage />} />
        <Route path='/classes/more-info' element={<MoreClassesInfoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
