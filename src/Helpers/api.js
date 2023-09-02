// eslint-disable-next-line no-unused-vars
const BASE_URL = 'https://fakestoreapi.com/';

export const makeHeaders = (token) => {
    const headers = {
      'Content-Type': 'application/json',
    };
  
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  
    return headers;
  };

  export const fetchWithHeaders = async (url, method, body, token) => {
    try {
      const response = await fetch(url, {
        method,
        headers: makeHeaders(token),
        body: JSON.stringify(body),
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('An error occurred during the fetch request.');
    }
  };
