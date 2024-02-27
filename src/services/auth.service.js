import { SERVER_URL } from "../constants/constants";

const loginUser = async (credentials) => {
    try {
      const response = await fetch(`${SERVER_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      // Handle response and return data or throw error
      const user = {
        email:credentials.email,
        ...data
      }

      sessionStorage.setItem('user', JSON.stringify(user));
      
      return user;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
};

const signinUser = async (credentials) => {
  try {
    const response = await fetch(`${SERVER_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    // Handle response and return data or throw error
    const user = {
      email:credentials.email,
      ...data
    }

    sessionStorage.setItem('user', JSON.stringify(user));
    
    return user;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

const getUser = () => {
  return JSON.parse(sessionStorage.getItem('user'))
}
  
const AuthService = {
  login: async (credentials) => {
    try {
      const response = await loginUser(credentials);
      return response;
    } catch (error) {
      console.error('Error in AuthService:', error);
      throw error;
    }
  },
  getUser,
  signin: async (credentials) => {
    try {
      const response = await signinUser(credentials);
      return response;
    } catch (error) {
      console.error('Error in AuthService:', error);
      throw error;
    }
  },
};
  
export default AuthService;