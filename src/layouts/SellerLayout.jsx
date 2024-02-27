import React from 'react';
import { Link } from 'react-router-dom';

const SellerLayout = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Home
          </Link>
          <Link to="/seller" className="text-xl font-bold">
            LogedIn as Seller
          </Link>
        </div>
      </nav>
      <main className="container mx-auto mt-8">{children}</main>
    </div>
  );
};

export default SellerLayout;
