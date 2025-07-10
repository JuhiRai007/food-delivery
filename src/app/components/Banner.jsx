
function Banner() {
    return (
        <div className='bg-slate-900 text-white p-6 md:p-8 lg:p-12 rounded-lg shadow-2xl'>
            <div className=" max-w-[1270px] mx-auto">
                <div className=" bg-gradient-to-r from-[#433e28] via-[#433a29] to-[#43342d] grid grid-col-2 lg:grid-cols-2 gap-8 lg:gap-12 items-center ">
                    <div className="space-x-6 p-4">
                        <div className="inline-block">
                            <span className="bg-yellow-600 text-yellow-100 px-3 py-1 rounded-full text-sm font-medium">
                                Limited Time Offer
                            </span>
                        </div>
                        <h1 className="text-gray-300 font-semibold text-4xl pt-4 leading-tight ">20% off on your first order</h1>
                        <p className="text-gray-400 text-base font-bold "> New customers get 20% off their first online order. Use promo code {' '}
                            <span className="text-yellow-400">NEWRAMEN20</span> at checkout.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 py-4">
                            <button className="text-white font-bold py-3 px-4 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 rounded-lg">
                                Order Now 
                            </button>
                            <button className="text-white font-bold py-3 px-4 border border-gray-600 rounded-lg">View All Offers</button>
                        </div>


                    </div>
                    <div className="flex justify-end">
                        <img
                            src="/images/gettyimages.webp"
                            alt="Soup Bowl Closeup"
                            className="object-cover w-full h-72"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
