import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    CardTitle: 'Kabira',
    imageSrc1: './src/assets/Projects/Kabira2.png',
    imageSrc2: './src/assets/Projects/Kabira1.png',
  },
  {
    CardTitle: 'Upliftio',
    imageSrc1: './src/assets/Projects/Uplifio2.png',
    imageSrc2: './src/assets/Projects/Uplifio1.png',
  },
  {
    CardTitle: 'Portfolio',
    imageSrc1: './src/assets/Projects/Portfolio2.png',
    imageSrc2: './src/assets/Projects/Portfolio1.png',
  },
  {
    CardTitle: 'Facto',
    imageSrc1: './src/assets/Projects/Facto2.png',
    imageSrc2: './src/assets/Projects/Facto1.png',
  },
];

const Projects = () => {
  return (
    <div className='px-36 py-20'>
      <motion.div className='font-[Recoleta] leading-tight'>
        <h2
          className='text-[#FBFF00] text-[60px] pl-10'
          style={{ textShadow: '5px 4px 9px #575757' }}
        >
          my
        </h2>
        <h2 className='text-white text-[55px] pl-10'>PROJECTS</h2>
      </motion.div>

      <div className='grid grid-cols-2 gap-x-10 gap-y-10 mt-20'>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            CardTitle={project.CardTitle}
            imageSrc1={project.imageSrc1}
            imageSrc2={project.imageSrc2}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;