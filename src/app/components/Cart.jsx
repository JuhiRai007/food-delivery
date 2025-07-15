'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ShoppingCart, ShoppingBag, Trash2, Plus, Minus, X, ChevronRight } from "lucide-react";
import { useCart } from 'react-use-cart';

const CartSidebar = ({ isOpen, onClose }) => {
  const [isClient, setIsClient] = useState(false);

  const {
    isEmpty,
    totalItems,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  // Helper function to safely parse price
  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      const cleanPrice = price.replace(/[^0-9.]/g, '');
      const parsed = parseFloat(cleanPrice);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  const calculateManualTotal = () => {
    return items.reduce((total, item) => {
      const itemPrice = parsePrice(item.price);
      return total + (itemPrice * item.quantity);
    }, 0);
  };

  useEffect(() => {
    setIsClient(true);
    
    
  });

  if (!isClient) {
    return null;
  }

  // Use manual total if cartTotal is not working correctly
  const finalTotal = (parseFloat(cartTotal) || 0) > 0 ? parseFloat(cartTotal) : calculateManualTotal();

  return (
    <div className="relative">
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
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
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
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
          {isEmpty ? (
            <div className="text-center text-gray-400 py-8">
              <ShoppingBag size={48} className="mx-auto mb-4 opacity-50" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => {
              const itemPrice = parsePrice(item.price);
              const itemTotal = itemPrice * item.quantity;
              
              return (
                <div key={item.id} className="bg-slate-700 rounded-lg p-4 flex items-center gap-4">
                  <img
                    src={item.image || '/placeholder-image.jpg'}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center hover:bg-slate-500 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
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
                      ${itemTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {!isEmpty && (
          <div className="border-t border-slate-700 p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white text-lg font-medium">Total:</span>
              <span className="text-orange-400 text-2xl font-bold">
                ${finalTotal.toFixed(2)}
              </span>
            </div>
            <Link href={'/checkout'}>
              <button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-4 rounded-lg font-semibold hover:from-orange-500 hover:to-red-600 transition-all duration-300 flex items-center justify-center gap-2 group">
                <ShoppingBag size={20} />
                Proceed to Checkout
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <button
              onClick={emptyCart}
              className="w-full bg-slate-600 text-white py-2 rounded-lg font-medium hover:bg-slate-500 transition-colors mt-2"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;