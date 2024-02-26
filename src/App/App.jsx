import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Mbc from '../Mbc/Mbc';
import Finance from '../Finance/Finance';
import Contact from '../Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/website" element={<Home/>} />
                <Route path="/mbc" element={<Mbc/>} />
                <Route path="/financial" element={<Finance/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
