import React from 'react'
import {motion} from 'framer-motion'
import {Sparkle} from 'lucide-react';

const carouselItems = [
    { type: 'icon', content: <Sparkle  strokeWidth={1} /> },
    { type: 'text', content: 'After.Effects' },
    { type: 'icon', content: <Sparkle  strokeWidth={1} /> },
    { type: 'text', content: 'DaVinci' },
    { type: 'icon', content: <Sparkle  strokeWidth={1} /> },
    { type: 'text', content: 'Canva' },
    { type: 'icon', content: <Sparkle  strokeWidth={1} /> },
    { type: 'text', content: 'VN' },
    { type: 'icon', content: <Sparkle  strokeWidth={1} /> },
    { type: 'text', content: 'Photoshop' },
  ];

const Carousel = () => {
  return (
    <div className='relative overflow-hidden'>
    <motion.div className='font-[Future] flex gap-10 text-white text-[7.2vw] bg-transparent'
                animate={{x:['0%', '-100%']}}
                transition={{repeat:Infinity, duration:20, ease:'linear', repeatType:'loop'}}
    >    
              {carouselItems.concat(carouselItems).map((item, index) => (
        <motion.div
          key={index}
          className={'opacity-100 text-white flex items-center'}
        >
          {item.content}
        </motion.div>
      ))}
    </motion.div>
    </div>
  )
}

export default Carousel
