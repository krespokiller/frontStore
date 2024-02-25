import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the Redux store or API
  const allProducts = useSelector((state) => state.product.products);

  useEffect(() => {
    // Simulate fetching products from an API
    setProducts(allProducts);
  }, [allProducts]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Dashboard;
