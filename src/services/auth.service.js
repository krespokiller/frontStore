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
  
  const AuthService = {
    login: async (credentials,setUser) => {
      try {
        const response = await loginUser(credentials);
        setUser(response)
        return response;
      } catch (error) {
        console.error('Error in AuthService:', error);
        throw error;
      }
    },
  };
  
  export default AuthService;
  