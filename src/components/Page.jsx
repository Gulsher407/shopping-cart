import React, { useContext } from 'react';
import { CartContext } from '../context/cart';

function CartPage() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // Calculate total price for each item
  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  // Calculate total price of all items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  // Function to print invoice
  const printInvoice = () => {
    window.print();
  };

  return (
    <div className='bg-gradient-to-r from-purple-400 to-orange-100 min-h-screen'>
      <div className="container mx-auto py-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-4">Your Shopping Cart</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {cartItems.map(item => (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
              <div className="flex items-center mb-4">
                <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex justify-between items-center">
                  <button className="px-2 py-1 bg-gradient-to-r from-purple-700 to-orange-500 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none mr-2 focus:bg-gray-700" onClick={() => removeFromCart(item)}>-</button>
                  <h1 className='m-2 p-2'> {item.quantity} </h1>
                  <button className="px-2 py-1 bg-gradient-to-r from-purple-700 to-orange-500 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none mr-2 focus:bg-gray-700" onClick={() => addToCart(item)}>+</button>
                </div>
                <p className="text-lg font-semibold">${calculateItemTotal(item)}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Display total price of all items */}
        <div className="flex justify-end mt-8">
          <p className="text-lg font-semibold">Total Price: ${calculateTotalPrice()}</p>
        </div>
        {/* Button to print invoice (disabled if cart is empty) */}
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 bg-gradient-to-r from-purple-700 to-orange-500 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={printInvoice}
            disabled={cartItems.length === 0} // Disable button if cart is empty
          >
            Print Invoice
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
