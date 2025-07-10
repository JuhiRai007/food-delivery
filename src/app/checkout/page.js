'use client';
import React, { useState } from 'react';
import { Clock, MapPin, Utensils, Shield } from 'lucide-react';

function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [notes, setNotes] = useState('');
    const [selectedOption, setSelectedOption] = useState('delivery')
    const [formData, setFormData] = useState({
        fullName: 'Juhi',
        email: 'juhi111@gmail.com',
        phone: '7896567880',
        address: '',
        zip: '',
        city: '',
    });
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpirationDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.length <= 19) { // 16 digits + 3 spaces
      setCardNumber(formatted);
    }
  };

  const handleExpirationChange = (e) => {
    const formatted = formatExpirationDate(e.target.value);
    if (formatted.length <= 5) {
      setExpirationDate(formatted);
    }
  };

  const handleCvcChange = (e) => {
    const v = e.target.value.replace(/[^0-9]/gi, '');
    if (v.length <= 4) {
      setCvc(v);
    }
  };
    const orderItems = [
        {
            id: 1,
            name: 'Shio Ramen',
            price: 15.00,
            quantity: 1,
            image: '🍜'
        },
        {
            id: 2,
            name: 'Maki Sushi',
            price: 8.00,
            quantity: 1,
            image: '🍱'
        }
    ];

    const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = 1.90;
    const deliveryFee = 3.99;
    const total = subtotal + tax + deliveryFee;

    return (
        <div className="min-h-screen bg-slate-900">
            <div className="max-w-7xl mx-auto py-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div className='mb-8 p-2'>
                        <h1 className="text-gray-300 text-2xl font-semibold">Contact Information</h1>
                        <p className="text-gray-300 text-sm font-medium">We&apos;ll use thts info to keep you updated about your order</p>
                    </div>
                    <div className='grid grid-col-1 lg:grid-cols-3 gap-6'>
                        <div className='lg:col-span-2 space-y-6'>
                            {/* Contact Information */}
                            <div className="bg-slate-800 rounded-xl p-6 text-gray-300">
                                <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                                <p className="text-slate-400 mb-6">We&apos;ll use this info to keep you updated about your order</p>
                                <div className="space-y-4 mb-2">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-slate-800 rounded-xl p-6 text-white'>
                                <div className='border-b mb-6'>
                                    <h2 className="text-xl font-semibold mb-2">Order Option</h2>
                                    <p className="text-slate-400 mb-6">Choose how you want to enjoy your meal</p>
                                </div>
                                {/* Delivery Option */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div
                                        className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedOption === 'delivery'
                                            ? 'border-yellow-500 bg-yellow-500/10'
                                            : 'border-slate-600 hover:border-slate-500'
                                            }`}
                                        onClick={() => setSelectedOption('delivery')}
                                    >
                                        <div className="flex items-center mb-2">
                                            <div className={`w-4 h-4 rounded-full border-2 mr-3 ${selectedOption === 'delivery' ? 'border-yellow-500 bg-yellow-500' : 'border-slate-500'
                                                }`}>
                                                {selectedOption === 'delivery' && (
                                                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                                                )}
                                            </div>
                                            <span className="font-medium">Delivery</span>
                                        </div>
                                        <div className="flex items-center text-sm text-slate-400 mb-1">
                                            <Clock className="w-4 h-4 mr-1" />
                                            30-45 minutes
                                        </div>
                                        <p className="text-sm text-slate-400">Delivered to your address</p>
                                    </div>

                                    {/* Pickup Option */}
                                    <div
                                        className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedOption === 'pickup'
                                            ? 'border-yellow-500 bg-yellow-500/10'
                                            : 'border-slate-600 hover:border-slate-500'
                                            }`}
                                        onClick={() => setSelectedOption('pickup')}
                                    >
                                        <div className="flex items-center mb-2">
                                            <div className={`w-4 h-4 rounded-full border-2 mr-3 ${selectedOption === 'pickup' ? 'border-yellow-500 bg-yellow-500' : 'border-slate-500'
                                                }`}>
                                                {selectedOption === 'pickup' && (
                                                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                                                )}
                                            </div>
                                            <span className="font-medium">Pickup</span>
                                        </div>
                                        <div className="flex items-center text-sm text-slate-400 mb-1">
                                            <Clock className="w-4 h-4 mr-1" />
                                            15-20 minutes
                                        </div>
                                        <p className="text-sm text-slate-400">Ready for pickup at restaurant</p>
                                    </div>

                                    {/* Dine In Option */}
                                    <div
                                        className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedOption === 'dinein'
                                            ? 'border-yellow-500 bg-yellow-500/10'
                                            : 'border-slate-600 hover:border-slate-500'
                                            }`}
                                        onClick={() => setSelectedOption('dinein')}
                                    >
                                        <div className="flex items-center mb-2">
                                            <div className={`w-4 h-4 rounded-full border-2 mr-3 ${selectedOption === 'dinein' ? 'border-yellow-500 bg-yellow-500' : 'border-slate-500'
                                                }`}>
                                                {selectedOption === 'dinein' && (
                                                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                                                )}
                                            </div>
                                            <span className="font-medium">Dine In</span>
                                        </div>
                                        <div className="flex items-center text-sm text-slate-400 mb-1">
                                            <Utensils className="w-4 h-4 mr-1" />
                                            Served immediately
                                        </div>
                                        <p className="text-sm text-slate-400">Enjoy at our restaurant</p>
                                    </div>
                                </div>
                                <div>
                                    <label className='block text-sm font-medium mb-2'>Delivery Address</label>
                                    <input
                                        type='text'
                                        name='address'
                                        placeholder='Enter your street address'
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"

                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    <div>
                                        <label className='block text-sm font-medium mb-1 p-1'>Zip</label>
                                        <input
                                            type='text'
                                            name='zip'
                                            value={formData.zip}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"


                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium mb-1 p-1'>City</label>
                                        <input
                                            type='text'
                                            name='city'
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className=" w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-800 rounded-xl p-6 text-gray-300">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-semibold text-white mb-2">Payment Method</h2>
                                    <p className="text-slate-400 text-sm">All transactions are secure and encrypted</p>
                                </div>

                                {/* Payment Method Selection */}
                                <div className="space-y-4 mb-8">
                                    <div
                                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${paymentMethod === 'card'
                                            ? 'border-yellow-500 bg-slate-700/50'
                                            : 'border-slate-600 hover:border-slate-500'
                                            }`}
                                        onClick={() => setPaymentMethod('card')}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-yellow-500' : 'border-slate-500'
                                                }`}>
                                                {paymentMethod === 'card' && (
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                                )}
                                            </div>
                                            <span className="text-white font-medium">Credit / Debit Card</span>
                                            <div className="flex space-x-1 ml-auto">
                                                <div className="w-8 h-5 bg-blue-600 rounded"></div>
                                                <div className="w-8 h-5 bg-red-600 rounded"></div>
                                                <div className="w-8 h-5 bg-yellow-600 rounded"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${paymentMethod === 'cash'
                                            ? 'border-yellow-500 bg-slate-700/50'
                                            : 'border-slate-600 hover:border-slate-500'
                                            }`}
                                        onClick={() => setPaymentMethod('cash')}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cash' ? 'border-yellow-500' : 'border-slate-500'
                                                }`}>
                                                {paymentMethod === 'cash' && (
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                                )}
                                            </div>
                                            <span className="text-white font-medium">Cash on Delivery</span>
                                        </div>
                                    </div>
                                </div>

                                {paymentMethod === 'card' && (
                                    <div className="space-y-6 mb-8">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Card Number
                                            </label>
                                            <input
                                                type="text"
                                                value={cardNumber}
                                                onChange={handleCardNumberChange}
                                                placeholder="1234 5678 9012 3456"
                                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Expiration Date
                                                </label>
                                                <input
                                                    type="text"
                                                    value={expirationDate}
                                                    onChange={handleExpirationChange}
                                                    placeholder="MM/YY"
                                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    CVC
                                                </label>
                                                <input
                                                    type="text"
                                                    value={cvc}
                                                    onChange={handleCvcChange}
                                                    placeholder="123"
                                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Additional Notes (Optional)
                                    </label>
                                    <textarea
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        placeholder="Special instructions for your order..."
                                        rows={4}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Right Column - Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-slate-800 rounded-xl p-6 sticky  top-10">
                                <h2 className="text-xl font-semibold mb-6 text-white">Order Summary</h2>

                                {/* Order Items */}
                                <div className="space-y-4 mb-6">
                                    {orderItems.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-2xl mr-3">
                                                    {item.image}
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-gray-400">{item.name}</h3>
                                                    <p className="text-sm text-slate-400">Qty: {item.quantity}</p>
                                                </div>
                                            </div>
                                            <span className="font-medium text-yellow-400">${item.price.toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Order Totals */}
                                <div className="space-y-3 py-4 border-t border-slate-700">
                                    <div className="flex justify-between text-slate-400">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-400">
                                        <span>Tax</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-400">
                                        <span>Delivery Fee</span>
                                        <span>${deliveryFee.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300 text-lg font-semibold pt-3 border-t border-slate-600">
                                        <span>Total</span>
                                        <span className="text-yellow-400">${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Place Order Button */}
                                <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-4 rounded-lg transition-all duration-200 transform hover:scale-105 mb-4">
                                    Place Order - ${total.toFixed(2)}
                                </button>

                                {/* Security Badge */}
                                <div className="flex items-center justify-center text-sm text-slate-400">
                                    <Shield className="w-4 h-4 mr-2" />
                                    Secure Checkout
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Checkout