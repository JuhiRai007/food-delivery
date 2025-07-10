import { useState } from 'react'

const CartSidebar = ({ onOpen, onClose }) => {
    const [cartItem, setCartItems] = useState([
        {
            id: 1,
            name: 'Shio Ramen',
            price: 15.00,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=80&h=80&fit=crop&crop=center'
        },
        {
            id: 2,
            name: 'Shio Ramen',
            price: 15.00,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=80&h=80&fit=crop&crop=center'
        },
        {
            id: 3,
            name: 'Shio Ramen',
            price: 15.00,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=80&h=80&fit=crop&crop=center'
        },
    ])

    return (
        <div className='relative'>
            {isOpen && (
                <div
                    className="fixed z-40"
                    onClick={onClose}
                />
            )}

            <div className={`fixed top-0 right-0 w-96 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

            </div>

        </div>
    )
}

export default CartSidebar
