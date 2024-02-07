import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Yetoo from '../Yetoo/Yetoo';
import Contact from '../Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/yetoo" element={<Yetoo/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
