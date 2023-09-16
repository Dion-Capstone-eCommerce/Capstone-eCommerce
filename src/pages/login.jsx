import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWithHeaders } from "../Helpers/api";
import Footer from '../footer/footer';

function Login({ BASE_URL, handleLoginSuccess }) {
  const [username, setUsername] = useState("");  // State to store username 
  const [password, setPassword] = useState(""); // State to store password inputs
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State to handle error messages
  const navigate = useNavigate(); // Hook to navigate to different routes

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to send login request
  const login = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      if (data.success) {
        handleLoginSuccess(data.data.token); // Call the handleLoginSuccess function to set the token
        localStorage.setItem("authToken", data.data.token); // Store the token in localStorage
        navigate("/posts"); // Navigate to the posts page
      } else {
        setErrorMessage("Incorrect username or password"); // Display error message for incorrect credentials
      }
    } catch (error) {
      setErrorMessage("An error occurred during login"); // Display error message for any other login errors
    }
  };

  // Function to handle login form submission
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    login(); // Call the login function to send the login request
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="loginUsername">Username</label>
          <input
            type="text"
            id="loginUsername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : "password"}
            placeholder=""
            id="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
        </div>
        <button type="submit">Login</button>
      </form>
      <Footer />  
    </div>
  );
}

export default Login;




