import React from 'react';
import videoSrc from '../assets/HS.webM';

const HeroSection = () => {
  return (
    <div className='px-72 py-12'>
      <h2 className='font-[Beycago] text-[#FBFF00] mb-[-210px] text-[55px]'>
        hey I am,
      </h2>
      <div>
        <video src={videoSrc} autoPlay loop muted className='w-full h-auto'>
          Your browser does not support the video tag.
        </video>
      </div>
      <h3 className='font-[Andenver] text-[50px] mt-[-210px] text-[#FBFF00] leading-tight'>
        I’m a passionate developer and software engineer dedicated to crafting impactful solutions. Ready to elevate your potential?
      </h3>
    </div>
  );
};

export default HeroSection;