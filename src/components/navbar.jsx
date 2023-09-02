import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import your GIF image
import musicLogo from './images/black-white-simple-music-logo.gif';

function Navbar() {
  const location = useLocation();
  const isLoggedIn = false; // Replace with your login state logic

  const handleClick = (event) => {
    if (event.currentTarget.href === window.location.href) {
      event.preventDefault();
    }
  };

  return (
    <div className="navbar-item-container">
      <img src={musicLogo} alt="Music Logo" className="navbar-logo" />

      <li className="navbar-item">
        <Link to="/" onClick={handleClick}>
          Home
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/register" onClick={handleClick}>
          Register
        </Link>
      </li>
      {!isLoggedIn && (
        <li className="navbar-item">
          <Link to="/login" onClick={handleClick}>
            Login
          </Link>
        </li>
      )}
    </div>
  );
}

export default Navbar;
