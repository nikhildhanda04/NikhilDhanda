import React from 'react'
 
const Navbar = () => {
  return (
    <div>
        <nav className='transparent px-[3vw] py-[0.8vh] flex justify-end backdrop-blur-lg'>
            <a 
            href="/"
            className='hover:underline text-white font-[Velcan] text-[4.3vw] sm:text-[2vw]'>
                view developer
            </a>
        </nav>
      
    </div>
  )
}

export default Navbar
