import React from 'react';
import { Link } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Home
          </Link>
          <Link to="/admin" className="text-xl font-bold">
            LogedIn as Admin
          </Link>
        </div>
      </nav>
      <main className="container mx-auto mt-8">{children}</main>
    </div>
  );
};

export default AdminLayout;
