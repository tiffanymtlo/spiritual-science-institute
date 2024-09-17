import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home';
import Footer from './components/Footer/Footer';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import ProductsPage from './components/ProductsPage';
import ProductDetails from './components/ProductsPage/ProductDetails';
import ServicesPage from './components/ServicesPage';
import ServiceDetails from './components/ServicesPage/ServiceDetails';
import ClassesPage from './components/ClassesPage';
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
