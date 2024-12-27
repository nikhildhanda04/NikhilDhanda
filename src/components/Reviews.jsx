import React from 'react'
import ClientReview from './ClientReview'
import {motion} from 'framer-motion'
const Reviews = () => {
  return (
    <div className='pt-[25vh] px-[1 vw]'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
      <motion.div
      initial={{opacity:0, y:6}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8}}
      >
        <ClientReview src="/src/assets/user.png" name="Ramesh Sharma" review="Best work, done on time and done perfectly"/>
      </motion.div>
      <motion.div
            initial={{opacity:0, y:8}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1}}
      >
        <ClientReview src="/src/assets/user.png" name="Animesh Agnihotri" review="easy to contact, fast work, and big ups for quality"/>
      </motion.div>
      <motion.div
            initial={{opacity:0, y:10}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.2}}
      >
        <ClientReview src="/src/assets/user.png" name="Adam Kernal" review="Best thing to happen to my business. Definately recommened"/>
      </motion.div>
    </div>
    </div>
  )
}

export default Reviews
