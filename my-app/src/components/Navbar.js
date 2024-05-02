import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 



function Navbar() {
  return (
    <nav className="navbar">
        
        <h1>Property23</h1>
        <ul className="navbar-nav">
          {/* uses navlik to check if active, can then add css to active navLink */}
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined} >Dashboard</NavLink></li>
            <li><NavLink to="/compare" className={({ isActive }) => isActive ? 'active' : undefined}>Compare</NavLink></li>
            <li><NavLink to="/timelines" className={({ isActive }) => isActive ? 'active' : undefined}>Timelines</NavLink></li>
        </ul>
        
    </nav>
  );
}

export default Navbar;