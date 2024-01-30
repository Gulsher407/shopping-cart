import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';

import './Home.css'; // Import CSS file for animation styles

const Home = () => {
  return (
    <div className="bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: 'url("/images/Background1.jpg")', minHeight: '100vh' }}>
      <div className="text-container text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animated-text">Welcome to our WebStore</h1>
        <div className='flex '>
        <p className="text-lg md:text-xl mb-8 ">Discover our amazing products and </p>
        <ReactTyped className='text-lg md:text-xl px-2' strings={[" start Shopping now."]} typeSpeed={120} backSpeed={120} loop />
        </div>
        <Link to="/products" className="bg-gradient-to-r from-purple-700 to-orange-500 text-white px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;
