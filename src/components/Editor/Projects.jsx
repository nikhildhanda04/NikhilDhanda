import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../Developer/ProjectCard';
import KabiraImage1 from '../../assets/Projects/Kabira1.png';
import KabiraImage2 from '../../assets/Projects/Kabira2.png';
import UpliftioImage1 from '../../assets/Projects/Uplifio1.png';
import UpliftioImage2 from '../../assets/Projects/Uplifio2.png';
import PortfolioImage1 from '../../assets/Projects/Portfolio1.png';
import PortfolioImage2 from '../../assets/Projects/Portfolio2.png';
import FactoImage1 from '../../assets/Projects/Facto1.png';
import FactoImage2 from '../../assets/Projects/Facto2.png';

const projectData = [
  {
    CardTitle: 'Kabira',
    imageSrc1: KabiraImage1,
    imageSrc2: KabiraImage2,
  },
  
  {
    CardTitle: 'Upliftio',
    imageSrc1: UpliftioImage1,
    imageSrc2: UpliftioImage2,
  },
  {
    CardTitle: 'Portfolio',
    imageSrc1: PortfolioImage1,
    imageSrc2: PortfolioImage2,
  },
  {
    CardTitle: 'Facto',
    imageSrc1: FactoImage1,
    imageSrc2: FactoImage2,
  },
];

const Projects = () => {
  return (
    <div className='px-[7.5vw] py-20'>
      <motion.div 
      className='font-[Recoleta] leading-tight'
      initial={{opacity:0, y: 40}}
      whileInView={{opacity:1 , y:0}}
      transition={{duration:0.7, ease:'easeIn'}}
      >
        <h2
          className='text-[#FBFF00] text-[6vw] pl-10'
          style={{ textShadow: '5px 4px 9px #575757' }}
        >
          my
        </h2>
        <h2 className='text-white text-[5.2vw] pl-10'>PROJECTS</h2>
      </motion.div>

      <motion.div 
      className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mt-20'
      initial={{opacity:0, y: 40}}
      whileInView={{opacity:1 , y:0}}
      transition={{duration:0.7, ease:'easeIn'}}
      >
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            CardTitle={project.CardTitle}
            imageSrc1={project.imageSrc1}
            imageSrc2={project.imageSrc2}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;