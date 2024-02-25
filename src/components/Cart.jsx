import React from 'react';

const Cart = ({ items }) => {
  return (
    <div className="p-4 bg-gray-200 rounded">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          <span>{item.name}</span>
          <span>${item.price}</span>
        </div>
      ))}
    </div>
  );
};

export default Cart;
