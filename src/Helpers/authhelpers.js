// Set the user token on state and optionally in sessionStorage
export const logIn = (token, setToken) => {
    setToken(token);
    
    // Save the token to sessionStorage for automatic login
    sessionStorage.setItem('authToken', token);
  };
  
  // Clear the user token from state and optionally from sessionStorage
  export const logOut = (setToken) => {
    setToken('');

    // Clear the token from sessionStorage
    sessionStorage.removeItem('authToken');
  };
  
  // Check if the user is logged in based on the token's presence
  export const isLoggedIn = (token) => {
    return token !== '';
  };