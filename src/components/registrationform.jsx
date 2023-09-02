import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function RegistrationForm({ BASE_URL }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false); 
  const navigate = useNavigate();

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
      <h2>Register to be a part of the Strangers Things community!</h2>
      <p>Sell your stuff!</p>
      <p>Send messages!</p>
      <p>All the cool kids are doing it!!</p>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {!registrationSuccess ? ( // Render the registration form if not successful
         <form className="registration-form" onSubmit={handleSubmit}>
        <div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            minLength={4} // Set minimum length
            required
          />
        </div>
        <div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            minLength={8} // Set minimum length
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            minLength={8} // Set minimum length
            required
          />
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
    </div>
  );
}

export default RegistrationForm;