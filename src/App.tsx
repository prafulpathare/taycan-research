import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Product from './screens/Product';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
