import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
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
    </div>
  )
}

export default Developer
