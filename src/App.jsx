import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home';
import Footer from './components/Footer/Footer';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
