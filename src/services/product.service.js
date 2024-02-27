const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/product/find');
      const data = await response.json();
      // Handle response and return data or throw error
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };
  
  const ProductService = {
    getAllProducts: async () => {
      try {
        const products = await fetchProducts();
        return products;
      } catch (error) {
        console.error('Error in ProductService:', error);
        throw error;
      }
    },
  };
  
  export default ProductService;
  