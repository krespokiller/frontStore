import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import productService from '../services/product.service'

const AdminPanel = () => {

  const [products, setProducts] = useState([])

  const users = [
    {
      id: 1,
      email: "asd@asd.com"
    },
    {
      id: 2,
      email: "asd@asd.com"
    },
    {
      id: 3,
      email: "asd@asd.com"
    }
  ]
  useEffect(() => {
    async function fetchData() {
      const response = await productService.getAllProducts();
      setProducts(response)
    }

    fetchData();
    
  }, []);
  return (
    <div className="container mx-auto mt-8">
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
      <ProductList products={products} cart={false}/>
    </div>
  );
};

export default AdminPanel;
