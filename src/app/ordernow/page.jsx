'use client';
import { useState } from 'react';
import { Search, Star } from 'lucide-react';

function AllItem() {
    const [activeTab, setActiveTab] = useState("all items");

    const menuItems = [
        // Drinks
        {
            id: 1,
            name: "Mango Lassi",
            price: "$4.50",
            description: "Traditional yogurt-based drink blended with fresh mango pulp and a touch of cardamom.",
            category: "drinks",
            featured: true,
            image: "/images/lassi.jpeg"
        },
        {
            id: 2,
            name: "Masala Chai",
            price: "$3.00",
            description: "Aromatic spiced tea brewed with black tea, milk, and traditional Indian spices.",
            category: "drinks",
            featured: false,
            image: "/images/chaie.jpeg"
        },
        {
            id: 3,
            name: "Fresh Lime Water",
            price: "$2.50",
            description: "Refreshing drink made with fresh lime juice, mint leaves, and a hint of black salt.",
            category: "drinks",
            featured: false,
            image: "/images/lime.jpeg"
        },

        // Rotis
        {
            id: 4,
            name: "Butter Naan",
            price: "$3.50",
            description: "Soft, fluffy bread baked in tandoor and brushed with melted butter.",
            category: "Rotis",
            featured: true,
            image: "/images/butternan.jpeg"
        },
        {
            id: 5,
            name: "Garlic Naan",
            price: "$4.00",
            description: "Traditional naan topped with fresh garlic and cilantro, baked to perfection.",
            category: "Rotis",
            featured: false,
            image: "/images/nan.jpeg"
        },
        {
            id: 6,
            name: "Tandoori Roti",
            price: "$2.50",
            description: "Whole wheat flatbread cooked in the tandoor, healthy and delicious.",
            category: "Rotis",
            featured: false,
            image: "/images/tandoor.jpeg"
        },

        // Rice
        {
            id: 7,
            name: "Veg Biryani",
            price: "$12.00",
            description: "Fragrant basmati rice cooked with tender paneer and vegigatbles and aromatic spices.",
            category: "Rice",
            featured: true,
            image: "/images/biryani.jpeg"
        },
        {
            id: 8,
            name: "Vegetable Pulao",
            price: "$8.00",
            description: "Basmati rice cooked with mixed vegetables and mild spices.",
            category: "Rice",
            featured: false,
            image: "/images/pulao.jpeg"
        },
        {
            id: 9,
            name: "Jeera Rice",
            price: "$6.00",
            description: "Simple yet flavorful rice dish seasoned with cumin seeds and ghee.",
            category: "Rice",
            featured: false,
            image: "/images/jerra.jpeg"
        },

        // Paranthas
        {
            id: 10,
            name: "Aloo Parantha",
            price: "$5.00",
            description: "Stuffed flatbread filled with spiced mashed potatoes, served with yogurt and pickle.",
            category: "Paranthas",
            featured: true,
            image: "/images/aalo.jpeg"
        },
        {
            id: 11,
            name: "Paneer Parantha",
            price: "$6.00",
            description: "Flaky bread stuffed with seasoned cottage cheese and fresh herbs.",
            category: "Paranthas",
            featured: false,
            image: "/images/paneer.jpeg"
        },
        {
            id: 12,
            name: "Gobi Parantha",
            price: "$5.50",
            description: "Crispy parantha filled with spiced cauliflower and onions.",
            category: "Paranthas",
            featured: false,
            image: "/images/gobi.jpeg"
        },

        // Sabzi
        {
            id: 13,
            name: "Palak Paneer",
            price: "$9.00",
            description: "Creamy spinach curry with cubes of fresh cottage cheese in rich gravy.",
            category: "sabzi",
            featured: true,
            image: "/images/palak.jpeg"
        },
        {
            id: 14,
            name: "Dal Makhani",
            price: "$7.50",
            description: "Rich and creamy black lentils slow-cooked with butter and cream.",
            category: "sabzi",
            featured: true,
            image: "/images/makhni.jpeg"
        },
        {
            id: 15,
            name: "Aloo Gobi",
            price: "$6.50",
            description: "Dry curry made with potatoes and cauliflower, seasoned with turmeric and spices.",
            category: "sabzi",
            featured: false,
            image: "/images/allogobi.jpeg"
        },
        {
            id: 16,
            name: "Chana Masala",
            price: "$7.00",
            description: "Chickpeas cooked in spicy tomato-based gravy with aromatic spices.",
            category: "sabzi",
            featured: false,
            image: "/images/chna.jpeg"
        }
    ];

    return (
        <div className='min-h-screen bg-slate-900'>
            <div className='max-w-7xl mx-auto p-2 py-6'>
                <h1 className='text-2xl text-white font-bold'>Order Online</h1>
                <p className='text-md text-gray-400 font-semibold'>Order delicious food for pickup or delivery</p>
                <div className='flex justify-center items-end'>
                    <div className='relative w-full'>
                        <Search className='absolute left-3 top-[64%] transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                        <input
                            type='search'
                            placeholder="search here..."
                            className="border border-gray-600 text-white rounded w-full p-2 pl-10 mt-3"
                        />
                    </div>
                </div>


                <div className="flex flex-wrap gap-2 justify-start mt-4 font-semibold">
                    <button
                        onClick={() => setActiveTab('all items')}
                        className={`px-6 py-2 rounded-full transition-colors ${activeTab === 'all items'
                            ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                    >
                        All items
                    </button>
                    <button
                        onClick={() => setActiveTab('drinks')}
                        className={`px-6 py-2 rounded-full transition-colors ${activeTab === 'drinks'
                            ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                    >
                        Drinks
                    </button>
                    <button
                        onClick={() => setActiveTab('Rotis')}
                        className={`px-6 py-2 rounded-full transition-colors ${activeTab === 'Rotis'
                            ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                    >
                        Rotis
                    </button>
                    <button
                        onClick={() => setActiveTab('Rice')}
                        className={`px-6 py-2 rounded-full transition-colors ${activeTab === 'Rice'
                            ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                    >
                        Rice
                    </button>
                    <button
                        onClick={() => setActiveTab('Paranthas')}
                        className={`px-6 py-2 rounded-full transition-colors ${activeTab === 'Paranthas'
                            ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                    >
                        Paranthas
                    </button>
                    <button
                        onClick={() => setActiveTab('sabzi')}
                        className={`px-6 py-2 rounded-full transition-colors ${activeTab === 'sabzi'
                            ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                    >
                        Sabzi
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors duration-300"
                        >
                            <div className="flex flex-col sm:flex-row">
                                {/* Image Section */}
                                <div className="relative w-full sm:w-48 h-44 sm:h-auto flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='h-full'
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>
                                        {/* Header with name, featured badge, and price */}
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                                {item.featured && (
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-xs text-orange-400 font-medium">Featured</span>
                                                        <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                                                    </div>
                                                )}
                                            </div>
                                            <span className="text-xl font-bold text-orange-400">{item.price}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                                            {item.description}
                                        </p>

                                        {/* Category Tag */}
                                        <div className="mb-2">
                                            <span className="inline-block px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-evenly gap-6">
                                        <button className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 font-medium">
                                            Customize
                                        </button>
                                        <button className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-200 font-medium">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllItem