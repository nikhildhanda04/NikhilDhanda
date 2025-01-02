import {useRef} from 'react'
import Navbar from '../components/Editor/Navbar'
import HeroSection from '../components/Editor/HeroSection'
import Projects from '../components/Editor/Projects'
import Carousel from '../components/Editor/Carousel'
import Work from '../components/Editor/Work'
import Footer from '../components/Developer/Footer'
const Editor = () => {
    const projectsRef = useRef(null);
  return (
    <div>

      <Navbar />
      <HeroSection projectsRef={projectsRef} />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div className='carousel-container border-y-4 relative border-white'>
      <Carousel />
      </div>
      <Work />
      <Footer/>
    </div>
  )
}

export default Editor
