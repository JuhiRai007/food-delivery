'use client'
import Link from "next/link";
import { useState } from "react";
import CartSidebar from "./Cart";
import { ShoppingCart, CircleUserRound, Menu, X } from "lucide-react";

function Navbar() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleCartClick = () => {
        setIsCartOpen(true);
    };

    const handleCartClose = () => {
        setIsCartOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className="relative bg-slate-800 py-3 px-4">
                {/* Gradient Border Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400"></div>
                
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2">
                        <div className="font-bold text-white text-lg sm:text-xl rounded-full bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 w-8 h-8 flex items-center justify-center">
                            E
                        </div>
                        <h1 className="font-bold text-lg sm:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600">
                            Eastern Zaika
                        </h1>
                    </div>

                    {/* Desktop Menu Section */}
                    <div className="hidden lg:flex justify-center flex-row items-center gap-6">
                        <Link href={'/'}>
                            <h1 className="text-white hover:text-amber-300 rounded-md hover:bg-slate-600 font-bold px-4 py-2 transition-colors">Home</h1>
                        </Link>
                        <Link href={'/menu'}>
                            <h1 className="text-white hover:text-amber-300 rounded-md hover:bg-slate-600 font-bold px-4 py-2 transition-colors">Menu</h1>
                        </Link>
                        <Link href={'/service'}>
                            <h1 className="text-white hover:text-amber-300 rounded-md hover:bg-slate-600 font-bold px-4 py-2 transition-colors">Service</h1>
                        </Link>
                        <Link href={'/location'}>
                            <h1 className="text-white hover:text-amber-300 rounded-md hover:bg-slate-600 font-bold px-4 py-2 transition-colors">Location</h1>
                        </Link>
                        <Link href={'/offers'}>
                            <h1 className="text-white hover:text-amber-300 rounded-md hover:bg-slate-600 font-bold px-4 py-2 transition-colors">Offer</h1>
                        </Link>
                        <Link href={'/ordernow'}>
                            <h1 className="text-white bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 rounded-md font-bold px-4 py-2 hover:opacity-90 transition-opacity">Order Now</h1>
                        </Link>
                    </div>

                    {/* Right Section - Profile, Cart, Mobile Menu */}
                    <div className='flex items-center gap-4'>
                        {/* Profile & Cart */}
                        <div className='flex items-center gap-4'>
                            <Link href={'/profile'}>
                            <div className='text-white font-bold cursor-pointer hover:text-orange-400 transition-colors'>
                                <CircleUserRound className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            </Link>
                            <div onClick={handleCartClick}>
                                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer text-white hover:text-orange-400 transition-colors" />
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={toggleMobileMenu}
                            className="lg:hidden text-white hover:text-orange-400 transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-800 border-t border-slate-700 z-50 shadow-lg">
                        <div className="flex flex-col py-4 px-4 space-y-2">
                            <Link href={'/'} onClick={closeMobileMenu}>
                                <div className="text-white hover:text-amber-300 rounded-md hover:bg-slate-600 font-bold px-4 py-3 block transition-colors">
                                    Home
                                </div>
                            </Link>
                            <Link href={'/menu'} onClick={closeMobileMenu}>
                                <div className="text-white hover:text-amber-300 rounded-md hover:bg-slate-600 font-bold px-4 py-3 block transition-colors">
                                    Menu
                                </div>
                            </Link>
                            <Link href={'/service'} onClick={closeMobileMenu}>
                                <div className="text-white hover:text-amber-300 rounded-md hover:bg-slate-600 font-bold px-4 py-3 block transition-colors">
                                    Service
                                </div>
                            </Link>
                            <Link href={'/location'} onClick={closeMobileMenu}>
                                <div className="text-white hover:text-amber-300 rounded-md hover:bg-slate-600 font-bold px-4 py-3 block transition-colors">
                                    Location
                                </div>
                            </Link>
                            <Link href={'/offers'} onClick={closeMobileMenu}>
                                <div className="text-white hover:text-amber-300 rounded-md hover:bg-slate-600 font-bold px-4 py-3 block transition-colors">
                                    Offer
                                </div>
                            </Link>
                            <Link href={'/ordernow'} onClick={closeMobileMenu}>
                                <div className="text-white bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 rounded-md font-bold px-4 py-3 block hover:opacity-90 transition-opacity">
                                    Order Now
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
           
            {/* Cart Sidebar */}
            <CartSidebar isOpen={isCartOpen} onClose={handleCartClose} />
        </>
    );
}

export default Navbar;