import React from 'react';
import AuthForm from '../components/AuthForm';
import AuthService from '../services/auth.service'
import { useNavigate } from "react-router-dom";

const Signin = ({setUser}) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/seller`; // Use absolute path
    navigate(path, { replace: true });
  }
  const handleLogin = async (credentials) => {
    try {
      const user = await AuthService.signin(credentials)
      
      setUser(user)
      
      routeChange()
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <AuthForm onSubmit={handleLogin} buttonText="Login" />
    </div>
  );
};

export default Signin;
