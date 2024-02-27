import React from 'react';
import AuthForm from '../components/AuthForm';
import AuthService from '../services/auth.service'
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {
  let navigate = useNavigate(); 
  const routeChange = (user) =>{ 
    console.log(user)
    if(user.role==="ADMIN"){
      let path = "/admin"; // Use absolute path
      navigate(path, { replace: true });
    }
    if(user.role==="VENDOR"){
      let path = "/seller"; // Use absolute path
      navigate(path, { replace: true });
    }
  }
  const handleLogin = async (credentials) => {
    try {
      const user = await AuthService.login(credentials)
      
      setUser(user)
      
      routeChange(user)
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
