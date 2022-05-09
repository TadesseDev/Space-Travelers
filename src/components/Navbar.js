import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 5vw'
  }
  const ulStyle = {
    display: 'flex',
    gap: '2vw',
    listStyle: 'none',
    padding: '0',
  }
  const navLinkStyle = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
    color: 'var(--linkColor)',
  });
  const logoImageStyle = {
    width: '5vw',
    height: '5vw',
    backgroundImage: 'url("https://cdn-icons-png.flaticon.com/512/3594/3594083.png")',
    backgroundImageSize: 'cover',
    backgroundColor: 'var(--linkColor)',
  }
  const lstLink = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
    color: 'var(--linkColor)',
    borderLeft: '1px solid silver',
    paddingLeft: '5px',
  });

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '3vw'
  }
  return (
    <nav style={navStyle}>
      <div id="logo" style={logoStyle}>
        <span id="logo-img" style={logoImageStyle}>
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