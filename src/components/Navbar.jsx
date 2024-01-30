import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-orange-500 py-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-white">
          <img src="/images/logo.png" alt="Logo" className="h-8" /> {/* Adjust the height as needed */}
              Gulsher-Store
        </Link>

        {/* Hamburger Icon */}
        <button className="md:hidden text-white hover:text-gray-300 focus:outline-none" onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Responsive Menu */}
        <ul className={`menu md:flex items-center space-x-6 ${isOpen ? 'flex' : 'hidden'}`}>
          <li>
            <Link to="/" className="text-white flex items-center justify-center hover:text-gray-300">
              <HomeOutlined />
              <span className="ml-1">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white flex items-center justify-center hover:text-gray-300">
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white flex items-center justify-center hover:text-gray-300">
              <span>Contact Us</span>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-white flex items-center justify-center hover:text-gray-300">
              <ShoppingCartOutlined />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;