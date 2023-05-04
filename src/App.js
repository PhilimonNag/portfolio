import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About/>}/>
            
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/" element={<Home/>}/>
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;
