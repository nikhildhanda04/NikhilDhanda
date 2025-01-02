import React from 'react'
import {motion} from 'framer-motion';
import Reviews from './Reviews';
const Work = () => {
  return (
    <motion.div className='py-[14.5vh] px-[10vw]'>
        <div className='leading-tight font-[Recoleta] text-center md:text-start '>
        <motion.h2 
        className='text-white text-[10vw] md:text-[6vw] '
        initial={{opacity:0, y: 40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.7, ease:'easeIn'}}
        >
            about my
        </motion.h2>
        <motion.h2 
        className='text-[#FBFF00] text-[11vw] md:text-[7vw] '
        style={{textShadow: '5px 4px 9px #575757'}}
        initial={{opacity:0, y: 40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.9, ease:'easeIn'}}
        >
            WORK
        </motion.h2>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-3 mx-auto items-center gap-10 pt-[6vh]'> 
        <motion.div
        className='flex items-center justify-center'
        whileHover= {{scale:1.1}}
        >
        <motion.div 
        className='text-white flex flex-row md:flex-col font-[Hatten] leading-tight'
        initial={{opacity:0, y: 40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.7, ease:'easeIn'}} 
        >
            <p className='text-[12vw]'>
                500+
            </p>
            <p className='text-[10vw] md:text-[4vw] ml-4 flex items-center text-[#D1AF04]'>
                Hours
            </p>
        </motion.div>
        </motion.div>

        <motion.div
        whileHover= {{scale:1.1}}
        className='flex items-center justify-center'
        >
        
        <motion.div 
        className='text-white flex flex-row md:flex-col font-[Hatten] leading-tight'
        initial={{opacity:0, y: 40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.9, ease:'easeIn'}}   
        >
            <p className='text-[12vw]'>
                10+
            </p>
            <p className='text-[10vw] md:text-[4vw] ml-4 flex items-center text-[#D1AF04]'>
                Projects
            </p>
        </motion.div>
        </motion.div>

        <motion.div
        whileHover={{scale:1.1}}
         className='flex items-center justify-center'
        >
        <motion.div 
        className='text-white flex flex-row md:flex-col font-[Hatten] leading-tight'
        initial={{opacity:0, y: 40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:1.1, ease:'easeIn'}}   
        >
            <p className='text-[12vw]'>
                7+
            </p>
            <p className='text-[10vw] md:text-[4vw] ml-4 flex items-center text-[#D1AF04]'>   
                Happy Clients
            </p>
        </motion.div>
        </motion.div>
        </div>

        <div className='mx-auto w-full flex justify-center'>
            <Reviews/>
        </div>
    </motion.div>
  )
}

export default Work
