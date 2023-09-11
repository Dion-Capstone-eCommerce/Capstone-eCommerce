import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {ShoppingCart, House, SignIn, UserPlus, ShoppingBagOpen} from "phosphor-react";

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
  
      <li className="navbar-item">
        <Link to="/" onClick={handleClick}>
        Home <House size={32} color="#f00a0a"/>
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/register" onClick={handleClick}>
          Register <UserPlus size={32} color="#f00a0a"/>
        </Link>
      </li>
      {!isLoggedIn && (
        <li className="navbar-item">
          <Link to="/login" onClick={handleClick}>
          Sign In<SignIn size={32} color="#f00a0a"/>
          </Link>
        </li>
      )}
      <li className="navbar-item">
          <Link to="/shop" onClick={handleClick}>
            Shop <ShoppingBagOpen size={32} color="#f00a0a"/>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart" onClick={handleClick}>
           Cart <ShoppingCart size={32} color="#f00a0a"/>
          </Link>
        </li>
    </div>
  );
}

export default Navbar;
