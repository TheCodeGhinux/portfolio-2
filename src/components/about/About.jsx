import React from 'react'
import { motion } from 'framer-motion'
import { sentence, letter } from '../../../utils/motion'
import { RiArrowRightLine } from 'react-icons/ri'
import img from '../../assets/image.png'

const About = () => {
  return (
    <div>
      <div className='about-con p-2'>
        <div className='about-header text-2xl md:text-4xl'>
          <h3 className='line'>
            <span>#</span>about-me
          </h3>
        </div>
        <div className='about-content p-4 flex flex-col lg:flex-row items-center'>
          <div className='about-text w-[100%] flex flex-col gap-4'>
            <h3 className='text-base md:text-xl '>
              I am a Backend and front-end developer
              based in Nigeria. I can develop responsive websites from scratch
              and raise them into modern user-friendly web experiences. <br />{' '}
              <br /> Transforming my creativity and knowledge into a websites
              has been my passion for over a year. I have helped various
              clients to establish their presence online. I am flexible always strive to
              be up to date with the newest technologies and frameworks.
            </h3>
            <a href="/about">
              <button className='flex items-center gap-1'>
                Read more <RiArrowRightLine />
              </button>
            </a>
            
          </div>
          <div className='about-pic-con w-[100%]'>
            <img className='mx-auto' src={img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About