import React from 'react'
import Image from 'next/image'
import SearchIcon from '@heroicons/react/solid'


const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md stic md:px-10'>
        
        <div className='relative flex items-center h-10 my-auto cursor-pointer'>
            <Image 
            src = "https://links.papareact.com/qd3"
            width={100}
            height = {100}
            />
        </div>

        <div className='flex p-2 rounded-full md:border-2'>
            <input type="text" placeholder ="Start your search" className='pl-5 bg-transparent outline-none' />
             
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden w-6 max-h-6 p-0.5 text-white bg-red-400 rounded-full md:inline-flex cursor-pointer flex-grow">
  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
</svg>


        </div>
    

        <div>
            {/* right */}
            
        </div>
        

    </header>
  )
}

export default Header