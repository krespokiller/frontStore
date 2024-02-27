import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import productService from '../services/product.service'

const SellerPanel = async () => {

  const [products,setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await productService.getAllProducts();
      setProducts(response)
    }

    fetchData();
    
  }, []);
  return (
    <div className="container mx-auto mt-8">
      <ProductList products={products} cart={false}/>
    </div>
  );
};

export default SellerPanel;
