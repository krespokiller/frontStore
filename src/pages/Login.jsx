import React from 'react';
import AuthForm from '../components/AuthForm';
import AuthService from '../services/auth.service'
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/dashboard`; // Use absolute path
    navigate(path, { replace: true });
  }
  const handleLogin = async (credentials) => {
    try {
      await AuthService.login(credentials,setUser)
      
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

export default Login;
