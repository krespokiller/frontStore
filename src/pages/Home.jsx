import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';
import { useSelector } from 'react-redux';
import productService from '../services/product.service'
import { Link } from 'react-router-dom';

const Home = () => {
  const [products,setProducts] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await productService.getAllProducts();
      setProducts(response)
    }

    fetchData();

  }, []);
  return (
    <div className="container mx-auto p-4">
      {isCartOpen && <Cart items={cartItems} onClose={toggleCart} />}
      <header className="lg:flex lg:justify-between lg:items-center py-4 px-6 bg-gray-200">
        {/* Menú hamburguesa */}
        <div className="flex items-center">
          {/* Icono del menú hamburguesa */}
          <button className="block lg:hidden focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6 text-gray-700 hover:text-black transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Enlaces */}
        <div className={`lg:flex lg:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="lg:flex lg:justify-between">
            <div>
            <Link to="/login" className="lg:inline-block lg:text-xl lg:font-bold lg:text-gray-700 lg:hover:text-black lg:transition lg:duration-300">
              Inicia Sesión
            </Link>
            </div>
            <div>
              <Link to="/signin" className="lg:inline-block lg:text-xl lg:font-bold lg:text-gray-700 lg:hover:text-black lg:transition lg:duration-300">
                Registrate
              </Link>
            </div>
          </div>
          {/* Icono del carrito de compras */}
          <div className="lg:flex lg:items-center lg:ml-6">
            <svg className="w-6 h-6 text-gray-700 hover:text-black transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l3.646 11.74a2 2 0 001.922 1.384H18a2 2 0 002-2v-1a3 3 0 00-3-3H7.79"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 8a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="updates mb-8">
        <h2 className="text-2xl font-semibold mb-4">Latest Updates (placeholder)</h2>
        <ul className="list-disc list-inside">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Sed vestibulum lorem non elit aliquam, sed interdum purus varius.</li>
          <li>Ut eget magna vel risus luctus sagittis.</li>
        </ul>
      </section>
      <section className="featured mb-8">
        <h2 className="text-2xl font-semibold mb-4">Productos</h2>
        <ProductList products={products} cart={true}/>
      </section>
      <footer className="text-center mt-8">
        <p>&copy; 2024 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
