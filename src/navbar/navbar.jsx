import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingCart,
  House,
  SignIn,
  UserPlus,
  ShoppingBagOpen
} from "phosphor-react";
import './navbar.css';

function Navbar() {
  const location = useLocation();
  const isLoggedIn = false; // Replace with your login state logic
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = (event) => {
    if (event.currentTarget.href === window.location.href) {
      event.preventDefault();
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar-item-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Menu
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li className="navbar-item" class= 'active'>
            <Link to="/" onClick={handleClick} style={{ color: 'black' }}>
              Home <House size={32} color="black"/>
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/register" onClick={handleClick} style={{ color: 'black' }}>
              Register <UserPlus size={32} color="black"/>
            </Link>
          </li>
          
          <li className="navbar-item">
              <Link to="/login" onClick={handleClick} style={{ color: 'black' }}>
                Sign In<SignIn size={32} color="black"/>
              </Link>
            </li>
          

          <li className="navbar-item">
            <Link to="/shop" onClick={handleClick} style={{ color: 'black' }}>
              <div>Shop</div> <ShoppingBagOpen size={32} color="black"/>
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/cart" onClick={handleClick} style={{ color: 'black' }}>
              <div>Cart</div> <ShoppingCart size={32} color="black"/>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
