import React, { } from 'react';
import videoSrc from '../../assets/HS.webm';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = ({ projectsRef }) => {
  const scrollToNextSection = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='relative sm:px-[18vw] px-[5vw] py-12 leading-tight'>
      <motion.h2
        className='font-[Beycago] text-[#00C8FF] mb-[-12vw] text-[4vw] relative z-30'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
      >
        hey, I am
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
      >
        <video src={videoSrc} 
        autoPlay loop muted playsInline 
        className='w-full relative h-auto z-1' 
        style={{objectFit: 'cover', backgroundColor: 'transparent'}}>
        </video>
      </motion.div>
      <motion.h3
        className='font-[Andenver] text-[3vw] mt-[-12vw] text-[#00C8FF] relative leading-tight z-30'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
      >
        I'm a professional video editor with extensive experience creating diverse video content for a range of clients. Ready to elevate your content to the next level?
      </motion.h3>
      <motion.div 
        className='hidden sm:block'
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 260 }}
        onClick={scrollToNextSection}
      >
        <p className='text-white opacity-80 font-[impact] text-[2vw] flex justify-center pt-[4vh]'>
          scroll to know more
        </p>
        <ArrowDown className='text-white opacity-80 w-[3vw] h-[5vh] mx-auto' />
      </motion.div>
    </div>
  );
};

export default HeroSection;