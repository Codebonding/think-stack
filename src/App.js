import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Just Routes & Route

import Facility from './components/Facility.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Facility />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
