import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className='navBack'>
        <span className="market-title">MARKET</span>
      </div>
      <div>
        <Link className='nav' to={"/"}>Home</Link>
        <Link className='nav' to={"/about"}>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;

