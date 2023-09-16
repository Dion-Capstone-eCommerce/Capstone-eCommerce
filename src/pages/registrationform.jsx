import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../footer/footer';


function RegistrationForm({ BASE_URL }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false); 
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to Handle successful registration
  const handleRegistrationSuccess = token => {
    setRegistrationSuccess(true); // Set registration success state to true
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  // Function to handle form submission
  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });

      const data = await response.json();
      if (response.ok) {
        handleRegistrationSuccess(data.data.token);
      } else {
        setErrorMessage('Registration failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred during registration');
    }
  };

  return (
      <div className="registration-form-container">
      <h2>Register to create an account.</h2>
      <p>Password must be upper and lowercase letters, numbers, and characters.</p>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {!registrationSuccess ? ( // Render the registration form if not successful
         <form className="registration-form" onSubmit={handleSubmit}>
        <div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Username must be 5 letters long"
            style={{ width: '250px'}}
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            minLength={5} // Set minimum length
            required
          />
        </div>
        <div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? 'text' : "password"}
            placeholder=""
            style={{ width: '250px'}}
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
            required
            title="Password must contain at least one digit, one letter, one special character, and be at least 8 characters long."
          />
          <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'} Password
      </button>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type={showPassword ? 'text' : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            minLength={8} // Set minimum length
            required
          />
           <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'} Password
      </button>
        </div>
        <button type="submit" className="submit-button">Register</button>
        </div>
        </div>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      ) : (
        <div>
          <p className="success-message">Registration successful! You can now log in.</p>
          <button onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default RegistrationForm;