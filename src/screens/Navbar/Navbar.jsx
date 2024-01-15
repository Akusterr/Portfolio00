import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-name'>Alexa Kuster</div>
      <div className='navbar-links-container'>
        <a>Home</a>
        <a>About</a>
        <a>Technologies</a>
        <a>Portfolio</a>
        <a>Contact</a>
      </div>
    </div>
  )
}

export default Navbar