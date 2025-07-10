'use client';
import React, { useState } from 'react';

const RestaurantOffers = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeTab, setActiveTab] = useState('current');

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const offers = [
    {
      id: 1,
      title: 'Student Special',
      badge: 'Popular',
      badgeColor: 'bg-red-500',
      discount: '15% OFF',
      price: null,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
      description: 'Show your valid student ID to receive 15% off your entire order. Perfect for lunch breaks or study sessions!',
      promoCode: 'STUDENT5',
      validUntil: 'No expiration',
      conditions: [
        'Valid student ID required',
        'Dine-in only',
        'Cannot be combined with other offers',
        'Not valid on weekends'
      ]
    },
    {
      id: 2,
      title: 'Lunch Set Menu',
      badge: 'Best Value',
      badgeColor: 'bg-red-600',
      discount: null,
      price: '$9.99',
      image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400&h=300&fit=crop',
      description: 'Enjoy a hearty ramen bowl, side dish, and a soft drink for a special price. Available weekdays between 11AM and 2PM.',
      promoCode: 'No code needed',
      validUntil: 'Ongoing',
      conditions: [
        'Monday to Friday: 11AM-2PM',
        'Dine-in only',
        'Selected ramen varieties only'
      ]
    },
    {
      id: 3,
      title: 'Family Bundle',
      badge: 'Save 20%',
      badgeColor: 'bg-yellow-500',
      discount: null,
      price: null,
      image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=300&fit=crop',
      description: 'Feed the whole family with our special bundle: 4 ramen bowls, 2 side dishes, and 4 drinks at a discounted price.',
      promoCode: 'FAMILY20',
      validUntil: 'Ongoing',
      conditions: [
        'Valid for groups of 4 or more',
        'Available all week',
        'Advance reservation recommended'
      ]
    },
    {
      id: 4,
      title: 'Happy Hour',
      badge: 'Buy 1 Get 1 Free',
      badgeColor: 'bg-yellow-600',
      discount: 'Limited Time',
      price: null,
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop',
      description: 'Buy one appetizer, get one free during our happy hour. Plus, enjoy discounted drinks and exclusive small plates!',
      promoCode: 'No code needed',
      validUntil: 'Ongoing',
      conditions: [
        'Monday to Thursday: 4PM-6PM',
        'Equal or lesser value item free',
        'Dine-in only',
        'Selected appetizers only'
      ]
    }
  ];

  return (
    <div className='bg-slate-900 min-h-screen'>
      <div className='flex justify-center p-4 mt-4'>
        <button className='bg-[#3b1b27] px-3 py-2 text-sm rounded-full text-[#cc6e71] items-center text-center'>Special Deals</button>
      </div>
      <div className='space-y-6 mb-4'>
        <h1 className='text-5xl text-white font-bold text-center'>Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 '>Offers</span> </h1>
        <p className='text-md text-gray-400 text-center'>Visit us in the heart of the city to experience authentic Eastern Food in a warm
          <span className='flex flex-col'> inviting atmosphere.</span></p>
      </div>
      <div className='flex justify-center'>
        <div className='w-20 h-1 bg-gradient-to-r from-amber-200 via-amber-500 to-amber-600 rounded-full'></div>
      </div>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveTab('current')}
              className={`px-6 py-2 rounded-full transition-colors ${activeTab === 'current'
                  ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
            >
              Current Offers
            </button>
            <button
              onClick={() => setActiveTab('seasonal')}
              className={`px-6 py-2 rounded-full transition-colors ${activeTab === 'seasonal'
                  ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
            >
              Seasonal Specials
            </button>
            <button
              onClick={() => setActiveTab('loyalty')}
              className={`px-6 py-2 rounded-full transition-colors ${activeTab === 'loyalty'
                  ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
            >
              Loyalty Program
            </button>
          </div>
        </div>

      {/* Content based on active tab */}
      {activeTab === 'current' && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover"
                  />
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 ${offer.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {offer.badge}
                  </div>
                  {/* Discount/Price */}
                  {offer.discount && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {offer.discount}
                    </div>
                  )}
                  {offer.price && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-lg font-bold">
                      {offer.price}
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-white">{offer.title}</h3>
                  <p className="text-gray-300 mb-4 flex-shrink-0">{offer.description}</p>
                  
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <span className="text-sm">
                        <span className="text-gray-400">Promo Code:</span>{' '}
                        <span className="text-yellow-400 font-semibold">{offer.promoCode}</span>
                      </span>
                      <span className="text-sm">
                        <span className="text-gray-400">Valid until:</span>{' '}
                        <span className="text-white">{offer.validUntil}</span>
                      </span>
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Conditions:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {offer.conditions.map((condition, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-400 mr-2">•</span>
                            {condition}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 mt-auto">
                    Claim Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Loyalty Program Content */}
      {activeTab === 'loyalty' && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Loyalty Program Header */}
          <div className="bg-gray-800 rounded-lg p-8 mb-8 border border-gray-700">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-yellow-600 p-4 rounded-lg">
                <svg className="w-8 h-8 text-yellow-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3">Ramen Paradise Loyalty Program</h2>
                <p className="text-gray-300 text-lg">
                  Join our loyalty program and earn rewards with every visit! The more you dine with us, the more
                  benefits you unlock. Points are earned for every dollar spent and can be redeemed for special offers,
                  free items, and exclusive experiences.
                </p>
              </div>
              <button className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 whitespace-nowrap">
                Join Now
              </button>
            </div>
          </div>

          {/* Membership Tiers */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Membership Tiers & Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bronze Tier */}
              <div className="bg-gray-800 rounded-lg p-6 border-t-4 border-yellow-600 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-yellow-600 mb-3">Bronze Tier</h4>
                <p className="text-gray-400 text-sm mb-4">Requirements: Join the program</p>
                
                <div className="mb-4">
                  <h5 className="text-white font-semibold mb-3">Benefits:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      5% off every order
                    </li>
                    <li className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Birthday special surprise
                    </li>
                    <li className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Early access to seasonal menus
                    </li>
                  </ul>
                </div>
              </div>

              {/* Silver Tier */}
              <div className="bg-gray-800 rounded-lg p-6 border-t-4 border-gray-400 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-gray-400 mb-3">Silver Tier</h4>
                <p className="text-gray-400 text-sm mb-4">Requirements: 5+ visits in 3 months</p>
                
                <div className="mb-4">
                  <h5 className="text-white font-semibold mb-3">Benefits:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      10% off every order
                    </li>
                    <li className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Free appetizer with ramen purchase
                    </li>
                    <li className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Priority seating
                    </li>
                    <li className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Exclusive tasting events
                    </li>
                  </ul>
                </div>
              </div>

              {/* Gold Tier */}
              <div className="bg-gray-800 rounded-lg p-6 border-t-4 border-yellow-500 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-yellow-500 mb-3">Gold Tier</h4>
                <p className="text-gray-400 text-sm mb-4">Requirements: 12+ visits in 3 months</p>
                
                <div className="mb-4">
                  <h5 className="text-white font-semibold mb-3">Benefits:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      15% off every order
                    </li>
                    <li className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Free premium topping on every visit
                    </li>
                    <li className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Reservations priority
                    </li>
                    <li className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Seasonal gift box
                    </li>
                    <li className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Invitation to chef&apos;s table events
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Seasonal Specials Content */}
      {activeTab === 'seasonal' && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-white mb-4">Seasonal Specials</h2>
            <p className="text-gray-300 text-lg">Coming Soon! Check back for our seasonal menu offerings.</p>
          </div>
        </div>
      )}

      {/* Newsletter Subscription */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated with New Offers</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest promotions, seasonal specials, and exclusive offers
              directly to your inbox.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                onClick={handleSubscribe}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              We respect your privacy and will never share your information.
            </p>
          </div>
          
          {subscribed && (
            <div className="mt-4 p-4 bg-green-600 text-white rounded-lg text-center max-w-md mx-auto">
              Thank you for subscribing! You&apos;ll receive our latest offers soon.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RestaurantOffers
