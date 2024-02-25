import React from 'react';
import { useSelector } from 'react-redux';

const AdminPanel = () => {
  const users = useSelector((state) => state.admin.users);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <h2 className="text-xl font-bold mb-2">Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
