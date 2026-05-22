import React from 'react'

const UtilityClasses = () => {
  return (
    <>
     <div className='bg-black p-4 grid place-content-center h-screen'>
      <h1 className='text-white text-1 xl font-bold m-2 '>Hello Purvesh !</h1>

      <div className=''>
        {/* main container */}
        <div className='p-6 max-w-sm mx-auto bg-white flex items-center space-x-4 rounded-xl'>
            {/* image  */}
            <div className=' bg-white shadow-lg'>
              <img  className='h-14 w-14' src='/newPhoto.jpeg' alt='Purvesh'/>
            </div>
         {/* text container */}
          <div>
              {/* text */}
              <div className='text-xl text-medium text-black'>
                  Tailwind Css
                  <p className='text-orange-400 font-normal'>By Purvesh Bakhade</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default UtilityClasses