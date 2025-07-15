'use client'
import { useState, useEffect } from 'react'
import { useCart } from 'react-use-cart';

function Menu() {
    const [activeTab, setActiveTab] = useState('eastern');
    const [isHydrated, setIsHydrated] = useState(false);
    const { addItem, items: cartItems } = useCart();
    
    useEffect(() => {
        setIsHydrated(true);
    }, []);
    
    // Function to check if item is in cart
    const isItemInCart = (item) => {
        if (!isHydrated) return false; 
        return cartItems.some(cartItem => cartItem.id === item.id);
    };
    
    const goToCart = () => {
       
        // For example: router.push('/cart') or navigate('/cart')
        console.log('Navigate to cart');
        // window.location.href = '/cart'; 
    };
    
    const items = [
        {
            id: 1,
            image: "/images/paneer.jpg",
            name: "Kadahi Paneer",
            description: "Rich pork bone broth simmered for 24 hours, topped with char Siu. soft-boiled egg. green onions, and nori.",
            price: "50$",
        },
        {
            id: 2,
            image: "/images/paneer.jpg",
            name: "Kadahi Paneer",
            description: "Rich pork bone broth simmered for 24 hours, topped with char Siu. soft-boiled egg. green onions, and nori.",
            price: "50$",
        },
        {
            id: 3,
            image: "/images/paneer.jpg",
            name: "Kadahi Paneer",
            description: "Rich pork bone broth simmered for 24 hours, topped with char Siu. soft-boiled egg. green onions, and nori.",
            price: "50$",
        },
        {
            id: 4,
            image: "/images/paneer.jpg",
            name: "Kadahi Paneer",
            description: "Rich pork bone broth simmered for 24 hours, topped with char Siu. soft-boiled egg. green onions, and nori.",
            price: "50$",
        },
    ]
    return (
        <div className='bg-slate-900 min-h-screen'>
            <div className='flex justify-center p-4 mt-4'>
                <button className='bg-[#3b1b27] px-3 py-2 text-sm rounded-full text-[#cc6e71] items-center text-center'>Explore Our Offering</button>
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl text-white font-bold text-center px-4'>Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 '>Menu</span> </h1>
            <div className='flex justify-center mt-4'>
                <div className='w-20 h-1 bg-gradient-to-r from-amber-200 via-amber-500 to-amber-600 rounded-full'></div>
            </div>
            <div className='flex justify-center items-center gap-2 sm:gap-4 mt-6 py-6 px-4 flex-wrap'>
                <button onClick={() => setActiveTab('eastern')} className={`text-white px-3 py-2 ${activeTab === 'eastern' ? 'font-bold rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-sm sm:text-base' : 'bg-gray-700 text-gray-300 hover:bg-gray-600 rounded-full'}`}>Eastern</button>
                <button onClick={() => setActiveTab('side dishes')} className={`text-white px-3 py-2 ${activeTab === 'side dishes' ? 'font-bold rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-sm sm:text-base' : 'bg-gray-700 text-gray-300 hover:bg-gray-600 rounded-full'}`}>Side Dishes</button>
                <button onClick={() => setActiveTab('beverages')} className={`text-white px-3 py-2 ${activeTab === 'beverages' ? 'font-bold rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-sm sm:text-base' : 'bg-gray-700 text-gray-300 hover:bg-gray-600 rounded-full'}`}>Beverages</button>
                <button onClick={() => setActiveTab('desserts')} className={`text-white px-3 py-2 ${activeTab === 'desserts' ? 'font-bold rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-sm sm:text-base' : 'bg-gray-700 text-gray-300 hover:bg-gray-600 rounded-full'}`}>Desserts</button>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-start max-w-7xl mx-auto mt-10 gap-4 sm:gap-6 mb-20 px-4'>
                {items.map((item) => (
                    <div key={item.id} className='flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-lg border bg-slate-800 overflow-hidden'>
                        <div className='flex-shrink-0'>
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-full sm:w-44 md:w-60 h-full sm:h-full md:h-48 object-cover'
                            />
                        </div>
                        <div className='p-3 sm:p-4 flex-1'>
                            <h1 className='text-white font-bold text-lg sm:text-xl mb-2'>{item.name}</h1>
                            <p className='text-gray-400 font-bold text-xs sm:text-sm leading-relaxed'>{item.description}</p>
                            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-end mt-4 sm:mt-6 gap-3 sm:gap-0'>
                                <h1 className='text-yellow-400 font-bold text-lg sm:text-base'>{item.price}</h1>
                                {isItemInCart(item) ? (
                                    <button
                                        onClick={goToCart}
                                        className='text-white px-3 py-1 sm:px-3 sm:py-1 font-bold rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-sm sm:text-base w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg'
                                    >
                                        Go to Cart
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => addItem(item)}
                                        className='text-white px-3 py-1 sm:px-3 sm:py-1 font-bold rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 text-sm sm:text-base w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg'
                                    >
                                        Add to Order
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default Menu