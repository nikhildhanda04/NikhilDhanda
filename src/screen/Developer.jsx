import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import Carousel from '../components/Carousel'
import Work from '../components/Work'
import Footer from '../components/Footer'
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
