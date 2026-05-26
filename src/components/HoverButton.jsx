import React from 'react'

const HoverButton = () => {
  return (
   
    <div className='grid place-content-center h-screen bg-black'>

        <div>
          <butoon className="bg-sky-500 p-2 rounded-xl text-base font-normal text-white hover:bg-white hover:text-black  cursor-no-drop ">Play Now</butoon>
        </div>

        <div className='p-3'>
          <p className=' text-xl text-white sm:text-red-500 md:text-green-200'>Lorem ipsum dolor sit amet.</p>
        </div>
     </div>

  )
}

export default HoverButton