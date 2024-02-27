import AuthService from "./auth.service";
const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/product/find");
      const data = await response.json();
      // Handle response and return data or throw error
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

const fetchProductsByUserId = async () => {
    try {
      const user = AuthService.getUser()
      if (user) {
        const headers = {
          'Content-Type': "application/json",
          'authorization': user?.token
        }
        const response = await fetch("http://localhost:3000/product/findByUser",{
          headers: {
                "Content-Type": "application/json",
                "authorization": user?.token
              },
        });
        console.log(response)
        const data = await response.json();
        // Handle response and return data or throw error
        return data;
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  const createProduct = async (name, price, userId) => {
    try {
      const response = await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, userId }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  };
  
  const updateProduct = async (productId, name, price) => {
    try {
      const response = await fetch("http://localhost:3000/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, name, price }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  };
  const ProductService = {
    getAllProducts: async () => {
      try {
        const products = await fetchProducts();
        return products;
      } catch (error) {
        console.error("Error in ProductService:", error);
        throw error;
      }
    },
    getProductsByUserId: async () => {
      try {
        const products = await fetchProductsByUserId();
        return products;
      } catch (error) {
        console.error("Error in ProductService:", error);
        throw error;
      }
    },
    createProduct: async (data) => {
      try {
        const product = await createProduct(data);
        return product;
      } catch (error) {
        console.error("Error in ProductService:", error);
        throw error;
      }
    },
    updateProduct: async (data) => {
      try {
        const product = await updateProduct(data);
        return product;
      } catch (error) {
        console.error("Error in ProductService:", error);
        throw error;
      }
    }
  };
  
  export default ProductService;
  