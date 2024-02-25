import React from 'react';
import { Link } from 'react-router-dom';

const SellerLayout = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/seller/dashboard" className="text-xl font-bold">
            Seller Dashboard
          </Link>
          <Link to="/seller/products">My Products</Link>
        </div>
      </nav>
      <main className="container mx-auto mt-8">{children}</main>
    </div>
  );
};

export default SellerLayout;
