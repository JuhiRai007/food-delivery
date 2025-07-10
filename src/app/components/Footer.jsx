
function Footer() {
  return (
    <div className='bg-slate-950 py-8'>
      <div className='grid grid-cols-4 justify-center items-center max-w-7xl mx-auto p-4 gap-6'>
        <div className='px-5 mr-10'>
          <div className="flex items-center gap-2">
            <div className="font-bold text-white text-xl rounded-full bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 w-8 h-8 flex items-center justify-center">
              E
            </div>
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600">
              Eastern Zaika
            </h1>

          </div>
          <p className='text-sm font-bold text-gray-400 py-4'>Serving authentic Japanese ramen with love and passion. Our
            restaurant brings the taste of Tokyo to your neighborhood with
            carefully crafted bowls of noodle perfection.</p>
        </div>
        <div>
          <h1 className='text-sm text-amber-400 font-bold uppercase'>Menu</h1>
          <div className='text-sm font-bold text-gray-400 py-4 space-y-2'>
            <h1>Eastern Plates</h1>
            <h1>Side Dishes</h1>
            <h1>Desserts</h1>
            <h1>Beverages</h1>

          </div>
        </div>
        <div className='text-sm font-bold text-gray-400 space-y-2'>
          <h1 className='text-sm text-amber-400 font-bold uppercase'>Contact</h1>
           <div className='text-sm font-bold text-gray-400 py-4 space-y-2'>
            <h1>Eastern Plates</h1>
            <h1>Side Dishes</h1>
            <h1>Desserts</h1>
            <h1>Beverages</h1>

          </div>
        </div>
        <div className='text-sm font-bold text-gray-400'>
          <h1 className='text-sm text-amber-400 font-bold uppercase'>Visist Us</h1>
          <h1 className='mt-2'>123 Noodle Street
            Ramen District
            Tokyo, Japan</h1>
          <h1 className='text-yellow-400 py-2'>Phone: <span className='text-gray-400'>(123) 456-7890</span></h1>
          <h1 className='text-yellow-400 py-2 flex flex-col space-x-1'>Hour:<span className='text-gray-400'>
            <p>Mon-Fri: 1 IAM - IOPM</p>
            <p>Sat-Sun: 12PM - IIPM</p>
          </span></h1>
        </div>
      </div>

    </div>
  )
}

export default Footer
