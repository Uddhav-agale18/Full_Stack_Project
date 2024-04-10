import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul className='navbar'>
        <li><NavLink to="/" className="navlink">Home</NavLink></li>
        <li><NavLink to="/Table" className="navlink">Table</NavLink></li>
        <li><NavLink to="/Register" className="navlink">Register</NavLink></li>
        <li><NavLink to="/Login" className="navlink">Login</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;
