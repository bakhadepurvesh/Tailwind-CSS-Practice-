import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black p-4 grid place-content-center h-screen'>
      <h1 className='text-white text-1 xl font-bold m-2 '>Hello Purvesh !</h1>

      <div className=''>
        {/* main container */}
        <div className='p-6 max-w-sm mx-auto bg-white flex items-center space-x-4 rounded-xl'>
            {/* image  */}
            <div className=' bg-white shadow-lg'>
              <img  className='h-12 w-12' src='https://upload.wikimedia.org/wikipedia/commons/3/3f/JPEG_example_flower.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original' alt=''/>
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

export default App
