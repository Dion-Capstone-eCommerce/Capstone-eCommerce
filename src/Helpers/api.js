// eslint-disable-next-line no-unused-vars
import RegistrationForm from "../pages/registrationform";

const COHORT_NAME = '2302-ACC-PT-WEB-PT-A';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

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
  
  export const deletePost = async (token, postId) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  
  export async function postMessage(token, postId, messageContent) {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message: {
            content: messageContent
          }
        })
      });
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }