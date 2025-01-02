import React from 'react'
import Navbar from '../components/Developer/Navbar'
import HeroSection from '../components/Developer/HeroSection'
import Projects from '../components/Developer/Projects'
import Carousel from '../components/Developer/Carousel'
import Work from '../components/Developer/Work'
import Footer from '../components/Developer/Footer'
import { useRef } from 'react'
const Developer = () => {
  const projectsRef = useRef(null);
  return (
    <div>
      <Navbar />
      <HeroSection projectsRef={projectsRef} />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div className=' carousel-container border-y-4 relative border-white'>
      <Carousel />
      </div>
      <Work />
      <Footer/>
    </div>
  )
}

export default Developer
