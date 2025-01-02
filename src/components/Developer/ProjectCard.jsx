import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ CardTitle, imageSrc1, imageSrc2 }) => {
  return (
    <motion.div
      className="w-full h-[400px] bg-[#D9D9D9] flex items-center justify-center relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-[Over] text-[90px] font-bold">{CardTitle}</span>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        whileTap={{opacity: 1}}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-[355.56px] h-[200px]">
          <div className="absolute inset-0 transform translate-x-[80px] border-2 border-black translate-y-[70px] bg-white shadow-lg">
            <img
              src={imageSrc1}
              alt="Box 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 translate-x-[-80px] translate-y-[-70px] border-2 border-black bg-white shadow-lg">
            <img
              src={imageSrc2}
              alt="Box 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;