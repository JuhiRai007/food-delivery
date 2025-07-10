import { Check } from "lucide-react";


function Testimonials() {
    return (
        <div className="bg-slate-900">
            <h1 className="text-4xl font-bold text-center p-2 text-white">What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 "> Customers Say</span></h1>
            {/* <div className="h-1 w-18 flex justify-center rounded mt-2 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600"></div> */}


            <p className=" text-xl font-bold p-2 text-gray-400 text-center">Don&apos;t just take our word for it. See what our customers have to say about their Eastern-Zaika experience.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-8 max-w-7xl mx-auto py-8 p-2">
                <div className="border border-slate-600 rounded-md ">
                    <h1 className="p-4 text-yellow-400 text-md">Rating</h1>
                    <p className="p-4 text-gray-400 text-md">The tonkotsu ramen here is absolutely
                        incredible! Rich flavorful broth that&apos;s been
                        simmered Will definitely
                        back!</p>
                    <div className="p-4 flex gap-3">
                        <img
                            src="/images/images.jpeg"
                            alt="profile-image"
                            className="rounded-full w-10 h-10"
                        />
                        <div className="flex flex-col">
                            <h1 className="text-sm text-gray-300 font-bold">Emily chain</h1>
                            <p className="text-xs text-gray-400 font-bold">2 weeks ago</p>
                        </div>

                    </div>

                </div>
                <div className="border border-slate-600 rounded-md ">
                    <h1 className="p-4 text-yellow-400 text-md">Rating</h1>
                    <p className="p-4 text-gray-400 text-md">The tonkotsu ramen here is absolutely
                        incredible! Rich flavorful broth that&apos;s been
                        simmered Will definitely
                        back!</p>
                    <div className="p-4 flex gap-3">
                        <img
                            src="/images/images.jpeg"
                            alt="profile-image"
                            className="rounded-full w-10 h-10"
                        />
                        <div className="flex flex-col">
                            <h1 className="text-sm text-gray-300 font-bold">Emily chain</h1>
                            <p className="text-xs text-gray-400 font-bold">2 weeks ago</p>
                        </div>

                    </div>
                </div>
                <div className="border border-slate-600 rounded-md ">
                    <h1 className="p-4 text-yellow-400 text-md">Rating</h1>
                    <p className="p-4 text-gray-400 text-md">The tonkotsu ramen here is absolutely
                        incredible! Rich flavorful broth that&apos;s been
                        simmered Will definitely
                        back!</p>
                    <div className="p-4 flex gap-3">
                        <img
                            src="/images/images.jpeg"
                            alt="profile-image"
                            className="rounded-full w-10 h-10"
                        />
                        <div className="flex flex-col">
                            <h1 className="text-sm text-gray-300 font-bold">Emily chain</h1>
                            <p className="text-xs text-gray-400 font-bold">2 weeks ago</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-6">
                <button className="rounded-lg text-lg text-gray-400 py-3 px-3 font-bold border border-gray-600 flex flex-row gap-2"> <span><Check className="w-6 h-6 mt-1" /></span>Leave a review</button>
            </div>
        </div>
    )
}

export default Testimonials