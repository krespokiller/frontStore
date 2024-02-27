//components/ProductList
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, addToCart, removeFromCart } from '../store/actions/actions';

const ProductList = ({ products, data }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };
console.log(data)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {products.map((product) => {
        const isItemInCart = cartItems.some(item => item.id === product.id);
        
        return (
          <div key={product.id} className={`bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 ${isItemInCart ? 'border-blue-500 border-2' : ''}`}>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="mt-2 text-gray-600">${product.price.toFixed(2)}</p>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
