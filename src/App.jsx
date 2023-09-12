import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "./pages/shop/shop";
import "./index.css";
import NavBar from "./navbar/navbar";
import Home from "./pages/home";
import RegistrationForm from "./pages/registrationform";
import Login from "./pages/login";
import { logIn, logOut, isLoggedIn } from "./Helpers/authhelpers";
import { fetchWithHeaders } from "./Helpers/api";
import { ShopContextProvider } from "./context/shop-context";
// import { Cart } from "./pages/cart/cart";

export default function App() {
  const BASE_URL = 'https://fakestoreapi.com/';
  const storedToken = localStorage.getItem("authToken"); // Check if there is a token in localStorage
  const [token, setToken] = useState(storedToken || ""); // Set initial value to storedToken

  // State to store the authentication token
  useEffect(() => {
    const authToken = sessionStorage.getItem("authToken"); // Check if there's a token in sessionStorage
    if (authToken) {
      setToken(authToken); // Set the token in state
    }
  }, []);

  // Function to handle successful login and set token
  const handleLoginSuccess = (newToken) => {
    localStorage.setItem("authToken", newToken); // Store the token in localStorage
    setToken(newToken); // Set the token in state
  };

  // Function to handle logout and clear token
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove the token from localStorage
    setToken("");  // Clear the token from state
       // Reload the page to trigger re-render
    // Reload the page to trigger re-render
    // window.location.reload();
  };

  return (
    <div className="app">
    <ShopContextProvider>
    <Router>
      <NavBar isLoggedIn={Boolean(token)} logout={handleLogout} />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm BASE_URL={BASE_URL} />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login BASE_URL={BASE_URL} handleLoginSuccess={handleLoginSuccess} />} />
        </Routes>
      </Router>
    </ShopContextProvider>
    </div>
  );
}

