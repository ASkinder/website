import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Sectors from '../Sectors/Sectors';
import Yetoo from '../Yetoo/Yetoo';
import Contact from '../Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/sectors" element={<Sectors/>} />
                <Route path="/yetoo" element={<Yetoo/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
