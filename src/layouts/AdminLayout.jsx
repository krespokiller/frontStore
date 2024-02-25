import React from 'react';
import { Link } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/admin/dashboard" className="text-xl font-bold">
            Admin Dashboard
          </Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/products">Products</Link>
        </div>
      </nav>
      <main className="container mx-auto mt-8">{children}</main>
    </div>
  );
};

export default AdminLayout;
