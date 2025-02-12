import React, { useState, useEffect } from 'react';
import { Star, CircleDashed } from 'lucide-react';
import { motion } from 'framer-motion';
import LokanshaImage from '../../assets/Lokansha.jpg';
import AnushravImage from '../../assets/Anushrav.jpg';
import AdityaImage from '../../assets/Aditya.jpg';
import ArvindImage from '../../assets/Arvind.jpg';
import AgrimaImage from '../../assets/Agrima.jpg';

const reviews = [
  {
    text: "Great experience working with Nikhil, he is very knowledgeable and easy to work with.",
    name: "Lokansha Balyan",
    title: "~ Lawyer, Balyan & Co.",
    image: LokanshaImage
  },
  {
    text: "Immaculate job done by Nikhil, exceptional and sleek designs and great development skills",
    name: "Anushrav Rathi",
    title: "~ CEO, Webcrafts Media",
    image: AnushravImage
  },
  {
    text: "Nikhil's work is outstanding, he delivered everything on time and exceeded expectations.",
    name: "Aditya Sharma",
    title: "~ CTO, Adzone Printing",
    image: AdityaImage
  },
  {
    text: "Highly recommend Nikhil for any web development projects, very professional and skilled.",
    name: "Arvind Lather",
    title: "~ Founder, Aztec Enterprises",
    image: ArvindImage
  },
  {
    text: "Nikhil's attention to detail and creativity is unmatched, very satisfied with the results.",
    name: "Agrima Joshi",
    title: "~ Researcher, IIT Roorkee",
    image: AgrimaImage
  },

];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeIn' }}  
        className='grid grid-cols-1 md:grid-cols-12  mt-[20vh] py-[4vh] gap-9'
      >
        <motion.div
          key={currentReview}
          className='rounded-xl ml-[5vw] flex-col w-full md:col-span-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className='flex flex-col md:flex-row gap-12'>
            <div className='flex  justify-center md:justify-start items-start flex-row gap-1 text-yellow-400'>
              <Star className='w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw]'  fill="yellow"/>
              <Star className='w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw]' fill="yellow"/>
              <Star className='w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw]' fill="yellow"/>
              <Star className='w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw]' fill="yellow"/>
              <Star className='w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw]' fill="yellow"/>
            </div>

            <motion.div
              key={currentReview}
              className='text-white font-[Hatten] text-[5vw] md:text-[3vw] w-full'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            >
              {reviews[currentReview].text}
            </motion.div>
          </div>

          <div className='flex justify-center md:justify-start flex-row'>
            <motion.div
              key={currentReview}
              className='rounded-full md:mt-[-40px] overflow-hidden'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            >
              <img
                src={reviews[currentReview].image}
                className='w-[15vw] h-[15vw]  object-cover rounded-full'
              />
            </motion.div>

            <motion.div
              key={currentReview}
              className='flex text-white flex-col px-[6vw] justify-center'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            >
              <div className=''>
                <p className='text-[4vw] md:text-[2vw] font-[Hatten]'>
                  {reviews[currentReview].name}
                </p>
              </div>
              <div className=''>
                <p className='text-[2vw] md:text-[1.5vw] text-gray-700 font-[Hatten]'>
                  {reviews[currentReview].title}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className='text-white flex flex-row md:flex-col gap-6 justify-center col-span-2'>
          {reviews.map((_, index) => (
            <CircleDashed
              key={index}
              size={30}
              onClick={() => setCurrentReview(index)}
              className={currentReview === index ? 'text-yellow-400' : ''}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Reviews;