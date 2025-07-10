import Image from "next/image"

function ArtSection() {
    return (
        <div className="bg-slate-900">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row bg-[#0f172a] items-center justify-center p-4 sm:p-6 gap-6 lg:gap-8">
                    {/* Image Grid Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-3xl items-start">
                            {/* Top Left Image */}
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src="/images/chef-cooking.jpg"
                                    alt="Noodle Preparation"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full aspect-square"
                                />
                            </div>

                            {/* Top Right Image */}
                            <div className="rounded-xl overflow-hidden pt-2 sm:pt-5">
                                <Image
                                   src="/images/premium_photo-1.jpeg"
                                    alt="Chef Cooking"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full aspect-square"
                                />
                            </div>

                            {/* Bottom Left Image */}
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                   src="/images/gettyimages-1.jpg"
                                    alt="Restaurant Interior"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full aspect-square"
                                />
                            </div>

                            {/* Bottom Right Image */}
                            <div className="rounded-xl overflow-hidden pt-2 sm:pt-4">
                                <Image
                                  src="/images/gettyimages.webp"
                                    alt="Soup Bowl Closeup"
                                    width={300}
                                    height={400}
                                    className="object-cover w-full h-full aspect-square"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 p-4 mt-4 lg:mt-0 max-w-xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight">
                            The Art of
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600">
                                {" "}Perfect Eastern Food{" "}
                            </span>
                        </h1>
                        <div className="h-1 w-16 sm:w-18 rounded mt-2 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600"></div>
                        
                        <p className="p-1 py-4 text-gray-200 font-semibold text-sm sm:text-base leading-relaxed">
                            Earten Zaika brings you the authentic flavors of Indian cuisine with a modern twist. Every dish is crafted with rich spices, fresh ingredients, and traditional recipes that celebrate the true essence of zaika &quot; taste. Whether you&apos;re craving bold curries, savory snacks, or soulful comfort food, Earten Zaika serves a journey of flavors straight from the heart of Indian kitchens.
                        </p>
                        
                        <p className="p-1 py-4 text-gray-200 font-semibold text-sm sm:text-base">
                            Earten Zaika brings you the authentic flavors of Indian cuisine with a modern twist.
                        </p>
                        
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-5">
                            <button className="flex flex-col font-bold rounded-lg bg-slate-800 text-amber-300 w-full py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">
                                12+
                                <span className="text-gray-300 text-xs sm:text-sm font-normal">Hour of broth simmering</span>
                            </button>
                            <button className="text-amber-300 font-bold rounded-lg flex flex-col bg-slate-800 py-3 sm:py-4 w-full px-3 sm:px-4 text-sm sm:text-base">
                                15+
                                <span className="text-gray-300 text-xs sm:text-sm font-normal">Eastern Varieties</span>
                            </button>
                            <button className="text-amber-300 font-bold rounded-lg flex flex-col bg-slate-800 w-full py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">
                                100%
                                <span className="text-gray-300 text-xs sm:text-sm font-normal">Authentic Recipes</span>
                            </button>
                            <button className="text-amber-300 flex flex-col font-bold rounded-lg bg-slate-800 py-3 sm:py-4 w-full px-3 sm:px-4 text-sm sm:text-base">
                                Daily
                                <span className="text-gray-300 text-xs sm:text-sm font-normal">Fresh Foods</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtSection