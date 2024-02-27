import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import productService from '../services/product.service'

const SellerPanel = () => {

  const [products,setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await productService.getAllProducts();
      console.log("response",response)
      setProducts(response)
    }
    console.log("fetchData")

    fetchData();
    
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <ProductList products={products} cart={false}/>
    </div>
  );
};

export default SellerPanel;
