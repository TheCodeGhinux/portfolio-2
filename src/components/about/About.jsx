import React from 'react'
import { motion } from 'framer-motion'
import { sentence, letter } from '../../../utils/motion'
import { RiArrowRightLine } from 'react-icons/ri'
import img from '../../assets/image.png'

const About = () => {
  return (
    <div>
      <div className='about-con'>
        <div className='about-header text-4xl text-white'>
          <h3 className='line'>
            <span>#</span>about-me
          </h3>
        </div>
        <div className="about-content p-4 flex items-center">
          <div className='about-text w-[100%] flex flex-col gap'>
            <h3 className="text-xl text-grey">
              Hello, im Ayo! <br /> <br /> Im a Backend and front-end developer based
              in Nigeria. I can develop responsive websites from scratch and raise
              them into modern user-friendly web experiences. <br /> <br /> Transforming
              my creativity and knowledge into a websites has been my passion for
              over a year. I have been helping various clients to establish their
              presence online. I always strive to learn about the newest
              technologies and frameworks.
            </h3>
            <button className='flex items-center gap-1' >
              Read more <RiArrowRightLine />
            </button>
          </div>
          <div className="about-pic-con w-[100%]">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About