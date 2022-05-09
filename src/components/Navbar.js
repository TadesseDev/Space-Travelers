import React from 'react';
import { NavLink } from 'react-router-dom';

return (
  <nav style={navStyle}>
    <div id="logo">
      <span id="logo-img">
      </span>
      <h1 id="logo-text">
        Space Travelers' Hubs
      </h1>
    </div>
    <ul style={ulStyle}>
      <li><NavLink to="/" style={navLinkStyle}>Rockets</NavLink></li>
      <li><NavLink to="/Missions" style={navLinkStyle}>Missions</NavLink></li>
      <li><NavLink to="/Profile" style={lstLink}>My Profile</NavLink></li>
    </ul>
  </nav>
);
};

export default Navbar;