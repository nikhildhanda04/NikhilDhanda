import React from 'react';
import videoSrc from '../assets/HS.webm';
import {ArrowDown} from "lucide-react";
import {motion} from "framer-motion";

const HeroSection = () => {
  return (
    <div className='px-72 py-12'>
      <motion.h2
        className='font-[Beycago] text-[#FBFF00] mb-[-210px] text-[55px]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
      >
        hey, I am
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}>
        <video src={videoSrc} autoPlay loop muted className='w-full h-auto'>
        </video>
      </motion.div>
      <motion.h3 
      className='font-[Andenver] text-[50px] mt-[-210px] text-[#FBFF00] leading-tight'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeIn' }}>
        I’m a passionate developer and software engineer dedicated to crafting impactful solutions. Ready to elevate your potential?
      </motion.h3>
      <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 260 }}
      >
      <p className='text-white opacity-80 font-[impact] text-[25px] flex justify-center pt-[40px]' >
        scroll to know more
      </p>
      
      <ArrowDown className='text-white opacity-80 w-[30px] h-[50px] mx-auto'/>
      </motion.div>
    </div>
  );
};                                                                                                                                            // 1

export default HeroSection;