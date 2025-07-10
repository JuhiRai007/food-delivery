import Link from 'next/link';
import React, { useState } from 'react';
import { ShoppingCart, ShoppingBag, Trash2, Plus, Minus, X, ChevronRight } from "lucide-react";

const CartSidebar = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Shio Ramen',
      price: 15.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=80&h=80&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Maki Sushi',
      price: 8.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=80&h=80&fit=crop&crop=center'
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="relative">
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 mt-1 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="relative">
              <ShoppingCart className="text-white" size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </div>
            <h2 className="text-white text-xl font-semibold">Your Order</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              <ShoppingBag size={48} className="mx-auto mb-4 opacity-50" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="bg-slate-700 rounded-lg p-4 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                
                <div className="flex-1">
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center hover:bg-slate-500 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center hover:bg-slate-500 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-orange-400 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-slate-700 p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white text-lg font-medium">Total:</span>
              <span className="text-orange-400 text-2xl font-bold">
                ${total.toFixed(2)}
              </span>
            </div>
            <Link href={'/checkout'}>
            <button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-4 rounded-lg font-semibold hover:from-orange-500 hover:to-red-600 transition-all duration-300 flex items-center justify-center gap-2 group">
              <ShoppingBag size={20} />
              Proceed to Checkout
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar