import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
// import Events from './Events.jsx';
// import Story from './Story.jsx';
import Contact from './Contact.jsx';
import logo from '/home/edjacobian/Foundation/FoundationSite/src/images/logo2x.png';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div id="header">
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div id="togglemenu" className={menuOpen ? 'open' : ''}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        {/* <Link to="/story" onClick={toggleMenu}>
          Our Mission
        </Link>
        <Link to="/events" onClick={toggleMenu}>
          Events
        </Link> */}
        <Link to="/contact" onClick={toggleMenu}>
          Contact Us
        </Link>
      </div>
      <div className='logocontainer'>
      <img src={logo}className='logo' alt="Logo Option 2" />
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/story" element={<Story />} /> */}
          {/* <Route path="/events" element={<Events />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer>
        <h3>In Memorial of Robert Berotti 6/22/1965 - 4/25/2023</h3>
        <a href="https://www.instagram.com/r_berotti_memorial_foundation?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <span>Follow us on Instagram</span>
      </footer>
    </div>
  );
}

export default App;
