import React, { useState } from 'react';
import AuthService from '../services/auth.service';
const AuthForm = ({ onSubmit, buttonText }) => {
  const [email, setEmail] = useState(AuthService?.getUser()?.email||'');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full p-2 mb-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full p-2 mb-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
