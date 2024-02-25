import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CustomerLayout from './layouts/CustomerLayout';
import SellerLayout from './layouts/SellerLayout';
import AdminLayout from './layouts/AdminLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';

const App = () => {

  const getUserFromStorage = () => {
    return JSON.parse(sessionStorage.getItem('user'))
  }

  const [user,setUser] = useState(getUserFromStorage())

  return (
    <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={!user ? <Login setUser={setUser}/> : <Navigate to="/dashboard" />} />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={user ? <CustomerLayout><Dashboard /></CustomerLayout> : <Navigate to="/login" />}
          />
          <Route
            path="/admin/*"
            element={user && user.role === 'ADMIN' ? <AdminLayout><AdminPanel /></AdminLayout> : <Navigate to="/login" />}
          />
          <Route
            path="/seller/*"
            element={user && user.role === 'VENDOR' ? <SellerLayout>{/* Seller-specific components */}</SellerLayout> : <Navigate to="/login" />}
          />

          <Route path="*" element={<Navigate to="/login" />} />
          {/* Add more routes for different pages */}
        </Routes>
    </Router>
  );
};

export default App;
