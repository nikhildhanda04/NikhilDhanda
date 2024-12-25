import React from 'react'
import {motion} from 'framer-motion';

const Work = () => {
  return (
    <motion.div className='py-[14.5vh] px-[10vh]'>
        <div className='leading-tight font-[Recoleta]'>
        <motion.h2 
        className='text-white text-[6vw]'
        initial={{opacity:0, y: 40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.7, ease:'easeIn'}}
        >
            about my
        </motion.h2>
        <motion.h2 
        className='text-[#FBFF00] text-[6.8vw]'
        style={{textShadow: '5px 4px 9px #575757'}}
        initial={{opacity:0, y: 40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.9, ease:'easeIn'}}
        >
            WORK
        </motion.h2>
        </div>


        <div className='grid grid-cols-1 sm:grid-cols-3 items-center gap-10 pt-[6vh]'> 
        <motion.div
        whileHover= {{scale:1.1}}
        >
        <motion.div 
        className='text-white font-[Hatten] leading-tight'
        initial={{opacity:0, y: 40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.7, ease:'easeIn'}} 
        >
            <p className='text-[12vw]'>
                500+
            </p>
            <p className='text-[4vw] text-[#D1AF04]'>
                Hours
            </p>
        </motion.div>
        </motion.div>

        <motion.div
        whileHover= {{scale:1.1}}>
        <motion.div 
        className='text-white font-[Hatten] leading-tight'
        initial={{opacity:0, y: 40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.9, ease:'easeIn'}}   
        >
            <p className='text-[12vw]'>
                10+
            </p>
            <p className='text-[4vw] text-[#D1AF04]'>
                Projects
            </p>
        </motion.div>
        </motion.div>

        <motion.div
        whileHover={{scale:1.1}}
        >
        <motion.div 
        className='text-white font-[Hatten] leading-tight'
        initial={{opacity:0, y: 40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:1.1, ease:'easeIn'}}   
        >
            <p className='text-[12vw]'>
                7+
            </p>
            <p className='text-[4vw] text-[#D1AF04]'>   
                Happy Clients
            </p>
        </motion.div>
        </motion.div>
        </div>
    </motion.div>
  )
}

export default Work
