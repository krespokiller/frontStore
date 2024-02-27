import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SellerLayout from './layouts/SellerLayout';
import AdminLayout from './layouts/AdminLayout';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import SellerPanel from './pages/SellerPanel';
import AuthService from './services/auth.service';
import Home from './pages/Home';
import Signin from './pages/Signin';
const App = () => {

  const getLayout = (userRole) => {
    switch (userRole) {
      case 'ADMIN':
        return <AdminLayout><Home /></AdminLayout>;
      case 'VENDOR':
        return <SellerLayout><Home /></SellerLayout>;
      default:
        return <Home />;
    }
  }
  const [user,setUser] = useState(AuthService.getUser())
  console.log(user)
  return (
    <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/signin" element={<Signin setUser={setUser}/>} />
          <Route
            path="/admin/*"
            element={ user?.role === 'ADMIN' ? <AdminLayout><AdminPanel /></AdminLayout> : <Navigate to="/login" />}
          />

          {<Route
            path="/seller/*"
            element={ user.role === 'VENDOR' ? <SellerLayout><SellerPanel /></SellerLayout> : <Navigate to="/login" />}
          />}

          <Route path="/" element={getLayout(user?.role)} />

          <Route path="*" element={<Navigate to="/login" />} />
          {/* Add more routes for different pages */}
        </Routes>
    </Router>
  );
};

export default App;
