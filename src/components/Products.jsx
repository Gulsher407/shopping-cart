import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/cart.jsx';
import Cart from './Cart.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products() {
  const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const toggle = () => {
    setshowModal(!showModal);
  };

  async function getProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const notifyAddedToCart = (item) =>
    toast.success(`${item.title} added to cart!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      style: {
        backgroundColor: '#fff',
        color: '#000',
      },
    });

  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.title} removed from cart!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      style: {
        backgroundColor: '#000',
        color: '#fff',
      },
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  return (
  
    <div className='flex flex-col justify-center bg-gradient-to-r from-purple-400 to-orange-100 mt-3 min-h-screen'>
      <ToastContainer />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-8 md:px-10 py-8'>
        {products.map((product) => (
          <div key={product.id} className='bg-white shadow-md rounded-lg px-4 sm:px-6 py-6 sm:py-8'>
            <div className='overflow-hidden'>
              <img src={product.thumbnail} alt={product.title} className='rounded-md sm:h-30 md:h-40 lg:h-50 object-cover w-full hover:scale-125 duration-1000' />
            </div>
            <div className='mt-4'>
              <h1 className='text-lg md:text-xl lg:text-2xl uppercase font-bold text-gray-800'>{product.title}</h1>
              <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 40)}...</p>
              <p className='mt-2 text-gray-600'>${product.price}</p>
            </div>
            <div className='mt-6 flex justify-between items-center'>
              {!cartItems.find((item) => item.id === product.id) ? (
                <button className='px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-700 to-orange-500 text-white text-xs sm:text-sm font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                  onClick={() => {
                    addToCart(product);
                    notifyAddedToCart(product);
                  }}>
                  Add to cart
                </button>
              ) : (
                <div className="flex gap-2 sm:gap-4">
                  <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-700 to-orange-500 text-white text-xs sm:text-sm font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      addToCart(product);
                    }}>
                    +
                  </button>
                  <p className='text-gray-600'>{cartItems.find((item) => item.id === product.id).quantity}</p>
                  <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-700 to-orange-500 text-white text-xs sm:text-sm font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      const cartItem = cartItems.find((item) => item.id === product.id);
                      if (cartItem.quantity === 1) {
                        handleRemoveFromCart(product);
                      } else {
                        removeFromCart(product);
                      }
                    }}>
                    -
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Cart showModal={showModal} toggle={toggle} />
    </div>
  );
}
