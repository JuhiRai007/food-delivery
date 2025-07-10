import { ArrowRight } from "lucide-react"

function PopularDishes() {
    return (
        <div className="bg-slate-900 pb-10">
            <div className="flex justify-center py-4 px-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-600 text-center">Our Popular Dishes</h1>
            </div>
            <h2 className="text-white text-center text-base sm:text-lg font-semibold pb-10 px-4">Explore our most loved eastern foods, meticulously crafted with authentic flavors and fresh ingridents.</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4">
                <div className="shadow-md shadow-slate-700 h-auto w-full max-w-96">
                    <img
                        src='/images/food.jpg'
                        alt="product-img"
                        className="w-full object-cover p-2 rounded-lg"
                    />
                    <div className="p-2">
                        <h1 className="text-[32px] font-bold text-gray-300">Falafel </h1>
                    </div>

                    <div className="p-2">
                        <p className="text-md text-gray-300 font-semibold">Falafel is a deep-fried ball or patty-shaped fritter of Egyptian origin that features in Middle Eastern cuisine, particularly Levantine cuisines. It is made from ground fava beans, </p>
                    </div>
                    <div className="p-2 py-4">
                        <button className="text-white font-bold w-full py-3 rounded-md bg-gradient-to-r from-orange-300 via-orange-400 to bg-orange-600">Order Now</button>
                    </div>
                </div>
                <div className="shadow-md shadow-slate-700 h-auto w-full max-w-96">
                    <img
                        src='/images/food.jpg'
                        alt="product-img"
                        className="w-full object-cover p-2 rounded-lg"
                    />
                    <div className="p-2">
                        <h1 className="text-[32px] font-bold text-gray-300">hummus</h1>
                    </div>

                    <div className="p-2">
                        <p className="text-md text-gray-300 font-semibold">Hummus, is a Levantine dip, spread, or savory dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic.The standard garnish includes olive oil </p>
                    </div>
                    <div className="p-2 py-4">
                        <button className="text-white font-bold w-full py-3 rounded-md bg-gradient-to-r from-orange-300 via-orange-400 to bg-orange-600">Order Now</button>
                    </div>
                </div>
                <div className="shadow-md shadow-slate-700 h-auto w-full max-w-96">
                    <img
                        src='/images/food.jpg'
                        alt="product-img"
                        className="w-full object-cover p-2 rounded-lg"
                    />
                    <div className="p-2">
                        <h1 className="text-[32px] font-bold text-gray-300">Kofta </h1>
                    </div>

                    <div className="p-2">
                        <p className="text-md text-gray-300 font-semibold">Hummus, is a Levantine dip, spread, or savory dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic.The standard garnish includes olive oil </p>

                    </div>
                    <div className="p-2 py-4">
                        <button className="text-white font-bold w-full py-3 rounded-md bg-gradient-to-r from-orange-300 via-orange-400 to bg-orange-600">Order Now</button>
                    </div>
                </div>

            </div>
            <div className="flex justify-center pt-10 px-4">
                <button className="flex items-center gap-2 text-lg text-gray-300 px-6 py-3 rounded-lg bg-slate-800 font-semibold">View Full Menu
                    <ArrowRight className='w-6 h-6' />
                </button>
            </div>
        </div>
    )
}

export default PopularDishes