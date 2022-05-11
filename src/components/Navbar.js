import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 5vw',
    padding: '2vw 0',
    borderBottom: '1px solid #dee2e6',
  };
  const ulStyle = {
    display: 'flex',
    gap: '2vw',
    listStyle: 'none',
    padding: '0',
  };
  const navLinkStyle = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
    color: 'var(--linkColor)',
  });
  const lstLink = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
    color: 'var(--linkColor)',
    borderLeft: '1px solid silver',
    paddingLeft: '20px',
  });

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '3vw',
  };
  return (
    <nav style={navStyle}>
      <div id="logo" style={logoStyle}>
        <span id="logo-img" />
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
