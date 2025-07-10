import React from 'react'
import { Gift, ShoppingCart, Users, BookOpen } from "lucide-react";

function page() {
    return (
        <div className='bg-slate-900 min-h-screen'>
            <div className='flex justify-center p-4 mt-4'>
                <button className='bg-[#3b1b27] px-3 py-2 text-sm rounded-full text-[#cc6e71] items-center text-center'>What We Offer</button>
            </div>
            <div className='space-y-6 mb-4'>
                <h1 className='text-5xl text-white font-bold text-center'>Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 '>Services</span> </h1>
                <p className='text-md text-gray-400 text-center'>the authentic taste of Eastern with our premium services tailored to
                    <span className='flex flex-col'>enhance your food journey.</span></p>
            </div>
             <div className='flex justify-center'>
                            <div className='w-20 h-1 bg-gradient-to-r from-amber-200 via-amber-500 to-amber-600 rounded-full'></div>
                        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto mt-10 gap-6 mb-20'>
                <div className='bg-slate-800 rounded-lg p-4'>
                    <div className='flex items-start gap-4'>
                        <div className='bg-[#482b30] rounded-md p-3 flex-shrink-0'>
                            <Gift className='w-8 h-8 text-amber-400' />
                        </div>
                        <div className='flex-1'>
                            <h3 className='text-white text-lg font-semibold mb-3'>Dine-In Experience</h3>
                            <p className='text-gray-400 text-sm mb-4'>
                                Immerse yourself in our authentic Japanese atmosphere while
                                enjoying freshly made eastern zaika. Our restaurant features traditional
                                decor and comfortable seating.
                            </p>
                            <ul className='text-gray-400 text-sm mt-2 space-y-1'>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Comfortable seating for groups and couples
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Watch our chefs prepare your eastern zaika
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Traditional Japanese decor and ambiance
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Full service with trained staff
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='bg-slate-800 rounded-lg p-4'>
                    <div className='flex items-start gap-4'>
                        <div className='bg-[#482b30] rounded-md p-3 flex-shrink-0'>
                            <ShoppingCart className='w-8 h-8 text-amber-400' />
                        </div>
                        <div className='flex-1'>
                            <h3 className='text-white text-lg font-semibold mb-3'>Takeout & Delivery</h3>
                            <p className='text-gray-400 text-sm mb-4'>
                                Enjoy our delicious eastern zaika in the comfort of your own home. We
                                offer quick takeout and delivery services with special packaging
                                to keep your eastern zaika hot and fresh.
                            </p>
                            <ul className='text-gray-400 text-sm mt-2 space-y-1'>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Specialized packaging to keep broth hot
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Noodles packed separately to maintain texture
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Easy online ordering system
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Delivery within 3 miles radius
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='bg-slate-800 rounded-lg p-4'>
                    <div className='flex items-start gap-4'>
                        <div className='bg-[#482b30] rounded-md p-3 flex-shrink-0'>
                            <Users className='w-8 h-8 text-amber-400' />
                        </div>
                        <div className='flex-1'>
                            <h3 className='text-white text-lg font-semibold mb-3'>Catering Services</h3>
                            <p className='text-gray-400 text-sm mb-4'>
                                Make your event special with our catering services. From small
                                gatherings to large corporate events, we offer customized
                                eastern zaika bars and Japanese cuisine.
                            </p>
                            <ul className='text-gray-400 text-sm mt-2 space-y-1'>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Custom eastern zaika stations for events
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Professional staff to serve guests
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Menu customization options
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Equipment and setup included
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='bg-slate-800 rounded-lg p-4'>
                    <div className='flex items-start gap-4'>
                        <div className='bg-[#482b30] rounded-md p-3 flex-shrink-0'>
                            <BookOpen className='w-8 h-8 text-amber-400' />
                        </div>
                        <div className='flex-1'>
                            <h3 className='text-white text-lg font-semibold mb-3'>eastern zaika Making Classes</h3>
                            <p className='text-gray-400 text-sm mb-4'>
                                Learn the art of eastern zaika making from our expert chefs. Our
                                classes cover everything from making noodles from scratch to
                                preparing the perfect broth.
                            </p>
                            <ul className='text-gray-400 text-sm mt-2 space-y-1'>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Hands-on experience with professional equipment
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Small class sizes for personalized attention
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Take home recipes and techniques
                                </li>
                                <li className='flex items-start'>
                                    <span className='text-amber-400 mr-2'>•</span>
                                    Includes meal and sake tasting
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* special offer - FIXED SECTION */}
            <div className='bg-[#192231] py-10'>
                <div className='max-w-6xl mx-auto px-4'>
                       <div className='text-center mb-8'>
                        <h1 className='text-white font-bold text-3xl mb-4'>
                            Special <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600'>Offers</span>
                        </h1>
                        <div className='flex justify-center'>
                            <div className='w-20 h-1 bg-gradient-to-r from-amber-200 via-amber-500 to-amber-600 rounded-full'></div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
                        <div className='flex flex-col p-6 rounded-lg bg-gradient-to-r from-[#3a77e2] via-[#745fe3] to-[#9352e4] min-h-[180px]'>
                            <h2 className='text-white font-semibold text-lg mb-2'>Student Discount</h2>
                            <h3 className='text-white text-2xl font-bold mb-2'>15% Off</h3>
                            <p className='text-white text-sm mb-4 flex-grow'>Valid student ID required for dine-in only.</p>
                            <button className='w-full text-white font-semibold bg-[#748be9] hover:bg-[#6b7ee6] py-2 px-4 rounded transition-colors duration-200'>
                                Claim Offer
                            </button>
                        </div>

                        <div className='flex flex-col p-6 rounded-lg bg-gradient-to-r from-[#d69f0d] via-[#d87228] to-[#da473d] min-h-[180px]'>
                            <h2 className='text-white font-semibold text-lg mb-2'>Family Deal</h2>
                            <h3 className='text-white text-2xl font-bold mb-2'>20% Off</h3>
                            <p className='text-white text-sm mb-4 flex-grow'>For groups of 4 or more. Valid for dine-in only.</p>
                            <button className='w-full text-white font-semibold bg-[#d69f0d] hover:bg-[#c4900c] py-2 px-4 rounded transition-colors duration-200'>
                                Claim Offer
                            </button>
                        </div>

                        <div className='flex flex-col p-6 rounded-lg bg-gradient-to-r from-[#1eb35b] via-[#1aae7c] to-[#16aa91] min-h-[180px]'>
                            <h2 className='text-white font-semibold text-lg mb-2'>First Order</h2>
                            <h3 className='text-white text-2xl font-bold mb-2'>25% Off</h3>
                            <p className='text-white text-sm mb-4 flex-grow'>New customers only. Valid for delivery orders.</p>
                            <button className='w-full text-white font-semibold bg-[#16aa91] hover:bg-[#149983] py-2 px-4 rounded transition-colors duration-200'>
                                Claim Offer
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <img
                            src='/images/Restaurant.jpg'
                            alt='Restaurant banner'
                            className='w-full max-w-6xl rounded-lg shadow-lg'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page