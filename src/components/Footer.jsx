import React from 'react'
import {Instagram, Linkedin, Github, Link } from 'lucide-react'
const Footer = () => {
  return (
    <div className='bg-[#1A1A1A] py-[16vh] px-[8vw] font-[Velcan]  text-white'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-y-10   justify-between'>
        <div className='flex flex-col text-[34px]'>

            <div>
                nikhil dhanda
            </div>
            <div className=' grid grid-cols-3 pt-[2vh] items-center justify-between '>
                <div className='w-[100px] h-[100px] overflow-hidden rounded-full bg-gray-800 flex items-center justify-center'>
                    <img
                    src="/src/assets/footer1.jpg"
                    className=' aspect-auto object-cover'
                    />
                </div>
                <div className='w-[100px] h-[100px] overflow-hidden rounded-full bg-gray-800 flex items-center justify-center'>
                    <img
                    src="/src/assets/footer2.jpg"
                    className='aspect-auto object-cover'
                    />
                </div>
                <div className='w-[100px] h-[100px] overflow-hidden rounded-full bg-gray-800 flex items-center justify-center'>
                    <img
                    src="/src/assets/footer3.jpg"
                    className='aspect-auto object-cover'
                    />
                </div>
            </div>
        </div>

        <div className='items-center justify-center'>
            <div className='grid grid-cols-1 gap-y-3 place-content-center place-items-center'>
                <p className='text-[34px]'>
                    contact me
                </p>
                <p className='text-[21px]'>
                    nikhildhanda84@gmail.com
                </p>
                <p className='text-[18px]'>
                    OR
                </p>
                <p className='text-[21px]'>
                    +91 9215593793
                </p>
            </div>
        </div>

        <div className=''>
    <div className='flex flex-col items-center'>
        <p className='text-[34px]'>
            socials 
        </p>
        <div className='flex pt-[5vh] flex-row items-center justify-center gap-4'>
            <a 
                href="https://www.instagram.com/nikhildhanda005/"
                className='flex items-center justify-center rounded-full bg-[#272727] w-[50px] h-[50px]'
                target="_blank"
                rel="noopener noreferrer"
            >
                <Instagram color='#FF00E5' strokeWidth={1}/>
            </a>
            <a 
                href="https://www.linkedin.com/in/nikhil-dhanda-00241a24a/"
                className='flex items-center justify-center rounded-full bg-[#272727] w-[50px] h-[50px]'
                target="_blank"
                rel="noopener noreferrer"
            >
                <Linkedin color='#00FCE7' strokeWidth={1}/>
            </a>
            <a
                href="https://github.com/nikhildhanda04"
                className='flex items-center justify-center rounded-full bg-[#272727] w-[50px] h-[50px]'
                target="_blank"
                rel="noopener noreferrer"
            >
                <Github color='#00FF3C' strokeWidth={1}/>
            </a>
            <a 
                href=""
                className='flex items-center justify-center rounded-full bg-[#272727] w-[50px] h-[50px]'
            >
                <Link color='#FBFF00' strokeWidth={1}/>
            </a>
        </div>
    </div>
</div>

      </div>
    </div>
  )
}

export default Footer
