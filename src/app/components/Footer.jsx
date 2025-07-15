function Footer() {
  return (
    <div className='bg-slate-950 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start max-w-7xl mx-auto p-4 gap-6'>
        {/* Brand Section */}
        <div className='px-2 lg:px-5 lg:mr-10 col-span-1 md:col-span-2 lg:col-span-1'>
          <div className="flex items-center gap-2">
            <div className="font-bold text-white text-xl rounded-full bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 w-8 h-8 flex items-center justify-center">
              E
            </div>
            <h1 className="font-bold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600">
              Eastern Zaika
            </h1>
          </div>
          <p className='text-sm font-bold text-gray-400 py-4 leading-relaxed'>
            Serving authentic Japanese ramen with love and passion. Our
            restaurant brings the taste of Tokyo to your neighborhood with
            carefully crafted bowls of noodle perfection.
          </p>
        </div>

        {/* Menu Section */}
        <div className='px-2'>
          <h1 className='text-sm text-amber-400 font-bold uppercase mb-4'>Menu</h1>
          <div className='text-sm font-bold text-gray-400 space-y-2'>
            <h1 className='hover:text-amber-400 transition-colors cursor-pointer'>Eastern Plates</h1>
            <h1 className='hover:text-amber-400 transition-colors cursor-pointer'>Side Dishes</h1>
            <h1 className='hover:text-amber-400 transition-colors cursor-pointer'>Desserts</h1>
            <h1 className='hover:text-amber-400 transition-colors cursor-pointer'>Beverages</h1>
          </div>
        </div>

        {/* Contact Section */}
        <div className='px-2'>
          <h1 className='text-sm text-amber-400 font-bold uppercase mb-4'>Contact</h1>
          <div className='text-sm font-bold text-gray-400 space-y-2'>
            <h1 className='hover:text-amber-400 transition-colors cursor-pointer'>About Us</h1>
            <h1 className='hover:text-amber-400 transition-colors cursor-pointer'>Reservations</h1>
            <h1 className='hover:text-amber-400 transition-colors cursor-pointer'>Careers</h1>
            <h1 className='hover:text-amber-400 transition-colors cursor-pointer'>Support</h1>
          </div>
        </div>

        {/* Visit Us Section */}
        <div className='px-2'>
          <h1 className='text-sm text-amber-400 font-bold uppercase mb-4'>Visit Us</h1>
          <div className='text-sm font-bold text-gray-400 space-y-3'>
            <div>
              <h1 className='leading-relaxed'>
                123 Noodle Street<br />
                Ramen District<br />
                Tokyo, Japan
              </h1>
            </div>
            <div>
              <h1 className='text-yellow-400'>
                Phone: <span className='text-gray-400'>(123) 456-7890</span>
              </h1>
            </div>
            <div>
              <h1 className='text-yellow-400'>Hours:</h1>
              <div className='text-gray-400 mt-1 space-y-1'>
                <p>Mon-Fri: 11AM - 10PM</p>
                <p>Sat-Sun: 12PM - 11PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Border */}
      <div className='max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800'>
        <div className='flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm'>
          <p>&copy; 2024 Eastern Zaika. All rights reserved.</p>
          <div className='flex space-x-4 mt-4 sm:mt-0'>
            <a href="#" className='hover:text-amber-400 transition-colors'>Privacy Policy</a>
            <a href="#" className='hover:text-amber-400 transition-colors'>Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer