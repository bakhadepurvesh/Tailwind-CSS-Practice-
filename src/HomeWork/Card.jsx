import React from 'react'

const Card = () => {
  return (
   <>
   {/* main div */}
    <div className='min-h-screen flex justify-center items-center'>
        <div className="max-w-sm bg-white-400 p-4 rounded-xl shadow-lg border border-solid border-gray-500 shadow p-5">

             {/* image div */}
            <div>
              <img className='h-30 w-30 rounded-md'  src='/newPhoto.jpeg' alt=''/>
            </div>

            {/* text div */}
            <div className='text-xl font-normal text-center'>
              <h5 className='font-style: italic font-semibold text-orange-500'>Purvesh</h5>
              <p className='text-black font-normal py-1' >By Owner</p>
              <button className='bg-blue-500 text-white  px-4 py-2 rounded-lg hover:bg-sky-700'>
                Click me
              </button>
            </div>
        </div>
    </div>
   </>
  )
}

export default Card