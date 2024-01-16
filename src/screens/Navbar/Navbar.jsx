import React from 'react';
import "./Navbar.css";
import hamBtn from "./hamburger-menu (1).svg"

function Navbar() {
  return (

    <div className='navbar-container'>
      <div className='navbar-name'>
        <div>Alexa Kuster</div>
          <img alt='hamburger menu' src={hamBtn} />
      </div>
      
      <div className='navbar-links-container'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#technologies'>Technologies</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#contact'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar