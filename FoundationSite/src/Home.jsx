import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <div>
      <div className="top-bar">
        <h1>Robert Berotti Memorial Foundation</h1>
      </div>
      <div className="background-container">
        <div className="overlay">
          <h2>Uniting Hearts, Funding Hope: Empowering Progress in Pancreatic Cancer Research & Care</h2>
          <p>Let's work together to find a cure for pancreatic cancer!</p>
          <Link to="/contact" className="contact-button">Get Involved!</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
