function HeroBanner() {
    return (
        <div className="bg-slate-900 py-4 sm:py-6 lg:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start shadow-md rounded-md shadow-slate-500 py-6 sm:py-8 gap-6 lg:gap-8">
                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 p-4 order-2 lg:order-1">
                        <button className="px-3 sm:px-4 py-2 shadow-md rounded-lg bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 font-semibold text-sm sm:text-base">
                            Authentic Indian Cuisine
                        </button>
                        
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl line-clamp-2 text-white py-2 font-bold leading-tight">
                            Welcome to Eastern Zaika
                        </h1>
                        
                        <p className="text-white py-2 font-bold text-sm sm:text-base lg:text-lg leading-relaxed">
                            Eastern Zaika brings you the authentic taste of the East with a perfect blend of rich spices, traditional recipes, and heartwarming hospitality. Every dish is crafted to deliver a flavorful journey that reflects our cultural heritage and passion for great food.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 pl-0 sm:pl-4">
                            <button className="text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-sm sm:text-base transition-transform hover:scale-105">
                                Explore Menu
                            </button>
                            <button className="text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-slate-600 text-sm sm:text-base transition-transform hover:scale-105">
                                Order Now
                            </button>
                        </div>
                    </div>
                    
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 p-4 order-1 lg:order-2">
                        <div className="max-w-md mx-auto lg:max-w-none">
                            <img
                                alt="Delicious Eastern cuisine dish"
                                src="/images/food1.jpg"
                                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md shadow-amber-400"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner