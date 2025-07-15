'use client'
import { MapPin, Phone, Clock, Navigation, Mail, ArrowLeftRight, CircleGauge, ArrowDown } from 'lucide-react';

function contact() {
    const operatingHours = [
        { day: 'Monday', hours: '11:00 AM - 10:00 PM' },
        { day: 'Tuesday', hours: '11:00 AM - 10:00 PM' },
        { day: 'Wednesday', hours: '11:00 AM - 10:00 PM' },
        { day: 'Thursday', hours: '11:00 AM - 10:00 PM' },
        { day: 'Friday', hours: '11:00 AM - 11:00 PM' },
        { day: 'Saturday', hours: '12:00 PM - 11:00 PM' },
        { day: 'Sunday', hours: '12:00 PM - 10:00 PM' }
    ];

    return (
        <>
        <div className='bg-slate-900 min-h-screen'>
            <div className='flex justify-center p-4 mt-4'>
                <button className='bg-[#3b1b27] px-3 py-2 text-sm rounded-full text-[#cc6e71] items-center text-center'>Find Us</button>
            </div>
            <div className='space-y-6 mb-4'>
                <h1 className='text-5xl text-white font-bold text-center'>Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 '>Location</span> </h1>
                <p className='text-md text-gray-400 text-center'>Visit us in the heart of the city to experience authentic Eastern Food in a warm
                    <span className='flex flex-col'> inviting atmosphere.</span></p>
            </div>
            <div className='flex justify-center'>
                <div className='w-20 h-1 bg-gradient-to-r from-amber-200 via-amber-500 to-amber-600 rounded-full'></div>
            </div>
            
            <div className="max-w-7xl mx-auto mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Map Alternative Section */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-96 lg:h-full min-h-[400px] relative border border-gray-700">
                            {/* Custom Map Design */}
                            <div className="w-full h-full relative bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-6">
                                {/* Street Grid Pattern */}
                                <div className="absolute inset-0 opacity-20">
                                    <svg className="w-full h-full" viewBox="0 0 400 400">
                                        {/* Horizontal lines */}
                                        <line x1="0" y1="100" x2="400" y2="100" stroke="#94a3b8" strokeWidth="2"/>
                                        <line x1="0" y1="200" x2="400" y2="200" stroke="#94a3b8" strokeWidth="3"/>
                                        <line x1="0" y1="300" x2="400" y2="300" stroke="#94a3b8" strokeWidth="2"/>
                                        {/* Vertical lines */}
                                        <line x1="100" y1="0" x2="100" y2="400" stroke="#94a3b8" strokeWidth="2"/>
                                        <line x1="200" y1="0" x2="200" y2="400" stroke="#94a3b8" strokeWidth="3"/>
                                        <line x1="300" y1="0" x2="300" y2="400" stroke="#94a3b8" strokeWidth="2"/>
                                    </svg>
                                </div>

                                {/* Location Marker */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative">
                                        <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                            <MapPin className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rotate-45"></div>
                                    </div>
                                </div>

                                {/* Surrounding Area Indicators */}
                                <div className="absolute top-8 left-8 bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-300">
                                    Ghazipur Station
                                </div>
                                <div className="absolute top-8 right-8 bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-300">
                                    Lanka
                                </div>
                                <div className="absolute bottom-8 left-8 bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-300">
                                    Ballia District
                                </div>
                                <div className="absolute bottom-8 right-8 bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-300">
                                    Imperial Palace
                                </div>

                                {/* Address Overlay */}
                                <div className="absolute bottom-6 left-6 right-6 bg-black bg-opacity-80 rounded-lg p-4">
                                    <div className="flex items-center space-x-3">
                                        <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                        <div>
                                            <p className="text-white font-medium">123 Eastern Zaika</p>
                                            <p className="text-gray-300 text-sm">Ghazipur District, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="absolute top-4 right-4 space-y-2">
                                <button className="bg-amber-500 hover:bg-amber-600 p-2 rounded-lg shadow-lg transition-colors">
                                    <Navigation className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Quick Links Below Map */}
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <a 
                                href="https://maps.google.com/?q=ghazipur+uttarpradesh" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 text-center flex items-center justify-center space-x-2"
                            >
                                <Navigation className="w-4 h-4" />
                                <span>Open in Maps</span>
                            </a>
                            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span>Call Now</span>
                            </button>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div className="order-1 lg:order-2 space-y-6">
                        {/* Address Card */}
                        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                            <div className="flex items-start space-x-4">
                                <div className="bg-amber-500 rounded-full p-3 flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white mb-2">Our Address</h3>
                                    <p className="text-gray-300 mb-1">123 Eastern Zaika</p>
                                    <p className="text-gray-300 mb-1">Ghazipur District</p>
                                    <p className="text-gray-300 mb-4">Uttar Pradesh, India 100-0005</p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                                            <Navigation className="w-4 h-4" />
                                            <span>Get Directions</span>
                                        </button>
                                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                                            Share Location
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                            <div className="flex items-start space-x-4">
                                <div className="bg-amber-500 rounded-full p-3 flex-shrink-0">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <Phone className="w-4 h-4 text-amber-400" />
                                            <div>
                                                <span className="text-amber-400 font-medium">Phone: </span>
                                                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                                                    (123) 456-7890
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Mail className="w-4 h-4 text-amber-400" />
                                            <div>
                                                <span className="text-amber-400 font-medium">Email: </span>
                                                <a href="mailto:info@Easternparadise.com" className="text-gray-300 hover:text-white transition-colors">
                                                    info@Easternzaika.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Mail className="w-4 h-4 text-amber-400" />
                                            <div>
                                                <span className="text-amber-400 font-medium">Reservations: </span>
                                                <a href="mailto:reservations@Easternparadise.com" className="text-gray-300 hover:text-white transition-colors">
                                                    reservations@Easternzaika.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Operating Hours Card */}
                        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                            <div className="flex items-start space-x-4">
                                <div className="bg-amber-500 rounded-full p-3 flex-shrink-0">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white mb-4">Operating Hours</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                                        {operatingHours.map((schedule, index) => (
                                            <div key={index} className="flex justify-between items-center">
                                                <span className="text-amber-400 font-medium">{schedule.day}</span>
                                                <span className="text-gray-300 text-sm">{schedule.hours}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-700">
                                        <p className="text-gray-400 text-sm">
                                            <span className="text-amber-400">Note:</span> Last orders are taken 30 minutes before closing time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
            </div>
             {/* Getting Here Section */}
            <div className="max-w-7xl mt-32 mx-auto mb-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Getting <span className="text-amber-500">Here</span>
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Public Transit */}
                        <div className="text-start border bg-slate-800 rounded-md">
                           
                            <h3 className="text-xl font-semibold text-white flex items-start justify-start space-x-2 p-4">
                                <span className="rounded-full bg-blue-400"><ArrowLeftRight className="w-6 h-6 p-1 text-blue-600" /></span>
                                <span>Public Transit</span>
                            </h3>
                            <div className="space-y-2 text-gray-300 text-sm p-2 =">
                                <p><span>•</span> 2 minute walk from Tokyo Station (Marunouchi Exit)</p>
                                <p><span>•</span> Yamanote Line: Tokyo Station</p>
                                <p><span>•</span> Marunouchi Line: Tokyo Station</p>
                                <p><span>•</span> Chiyoda Line: Tokyo Station</p>
                            </div>
                        </div>

                        {/* Parking */}
                        <div className="text-start border bg-slate-800 rounded-md">
                           
                            <h3 className="text-xl font-semibold text-white flex items-start justify-start space-x-2 p-4">
                                <span className="rounded-full bg-green-300"><CircleGauge className="text-green-600 w-6 h-6 p-1" /></span>
                                <span>Parking</span>
                            </h3>
                            <div className="space-y-2 text-gray-300 text-sm p-2">
                                <p><span>•</span> Limited street parking available</p>
                                <p><span>•</span> Paid parking lot next door (¥300/hour)</p>
                                <p><span>•</span> Validated parking for customers (2 hours)</p>
                                <p><span>•</span> Weekend parking: ¥1500 flat rate</p>
                            </div>
                        </div>

                        {/* Accessibility */}
                        <div className="text-start border bg-slate-800 rounded-md">
                           
                            <h3 className="text-xl font-semibold text-white flex items-start justify-start space-x-2 p-4">
                                 <span className="rounded-full bg-purple-300"><ArrowDown className="w-6 h-6 p-1 text-purple-600"/></span>
                                <span>Accessibility</span>
                            </h3>
                            <div className="space-y-2 text-gray-300 text-sm text-start p-4">
                                <p><span>•</span> Wheelchair accessible entrance</p>
                                <p><span>•</span> Elevator access available</p>
                                <p><span>•</span> Accessible bathroom facilities</p>
                                <p><span>•</span> Service animals welcome</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default contact