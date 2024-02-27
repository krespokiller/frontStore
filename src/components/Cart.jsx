//components/Cart
import React, {useState} from 'react';

const Cart = ({ items, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`} onClick={onClose} style={{ zIndex: 999 }}>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Carrito de Compras</h2>
          <button className="text-gray-600 hover:tex t-gray-800" onClick={handleClose}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{item.name}</span> - ${item.price}
            </li>
          ))}
        </ul>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" onClick={handleClose}>
          Cerrar Carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
