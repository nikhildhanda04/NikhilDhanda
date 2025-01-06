import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../Developer/ProjectCard';
import Vlog1 from '../../assets/Projects/Vlog1.png';
import Vlog2 from '../../assets/Projects/Vlog2.png';
import Reel1 from '../../assets/Projects/Reel1.png';
import Reel2 from '../../assets/Projects/Reel2.png';
import Narrative1 from '../../assets/Projects/Narrative1.png';
import PortfolioImage2 from '../../assets/Projects/Portfolio2.png';
import Aftermovie1 from '../../assets/Projects/Aftermovie1.png';
import Aftermovie2 from '../../assets/Projects/Aftermovie2.png';  
const projectData = [
  {
    CardTitle: 'Vlogs',
    imageSrc1: Vlog1,
    imageSrc2: Vlog2,
  },
  
  {
    CardTitle: 'Reels',
    imageSrc1: Reel1,
    imageSrc2: Reel2,
  },
  {
    CardTitle: 'Narrative',
    imageSrc1: Narrative1,
    imageSrc2: PortfolioImage2,
  },
  {
    CardTitle: 'After_Movies',
    imageSrc1: Aftermovie1,
    imageSrc2: Aftermovie2,
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
          className='text-blu text-[6vw] pl-10'
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