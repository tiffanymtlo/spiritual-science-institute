// import React from 'react';
// import './App.css';
// import Header from './components/old_components/Header';
// import HeroSection from './components/old_components/HeroSection';
// import MainContent from './components/old_components/MainContent';
// import Footer from './components/old_components/Footer';

// function App() {
//   return (
//     <div class="App">
//       <Header />
//       <HeroSection />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Offerings from './components/Products';
import Services from './components/Services';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Offerings />
      <Services />
    </div>
  );
}

export default App;
