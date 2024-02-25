import React from 'react';
import { Link } from 'react-router-dom';

const CustomerLayout = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/dashboard" className="text-xl font-bold">
            My Shop
          </Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
      <main className="container mx-auto mt-8">{children}</main>
    </div>
  );
};

export default CustomerLayout;
