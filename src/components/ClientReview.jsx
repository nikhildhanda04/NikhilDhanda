import React from 'react'
import {motion} from 'framer-motion'

const ClientReview = ({src, alt, name, review}) => {
  return (
    <motion.div 
      className='bg-white rounded-full w-[auto]'
      whileHover={{scale:1.1}}
      >
        <div className='grid grid-cols-12 items-center'>
          <div className='col-span-4 rounded-full overflow-hidden'>
            <img
            src = {src}
            alt = {alt}
            className='w-[12vw] h-[12vh] object-cover'            
            />
            </div>
            <div className='flex flex-col font-[Natural] items-start col-span-8'>
            <p className=' text-[2.5vw]'>
                {name}
            </p>
            <p className='text-red-600 text-[1.3vw]'>
              {review}
            </p>
            </div>

        </div>
      
    </motion.div>
  )
}

export default ClientReview
