import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Events from './Events.jsx';
import Story from './Story.jsx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div id="header">
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰
      </div>
      <div id="togglemenu" className={menuOpen ? 'open' : ''}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/story" onClick={toggleMenu}>
          Our Story
        </Link>
        <Link to="/events" onClick={toggleMenu}>
          Events
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          Our Mission
        </Link>
      </div>
      <h1>Robert Berotti Memorial Foundation Inc.</h1>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;