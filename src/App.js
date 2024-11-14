import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Home from './pages/Home';
import Solution from './pages/Solution';
import Product from './pages/Product';
import Resource from './pages/Resource';
import Footer from './sections/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/products/*" element={<Product />} />
          <Route path="/resources/*" element={<Resource />} />
          <Route path="/solutions/*" element={<Solution />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;