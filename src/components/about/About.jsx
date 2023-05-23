import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import img from '../../assets/image.png'

import { Link } from 'react-router-dom';

import { motion, useAnimation } from 'framer-motion';
import {
  heroVariants,
  heroTextVariant,
  staggerContainer,
  textVariant,
  sentence,
  letter,
  heroImgVariants,
} from '../../../utils/motion.js';


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
          <motion.div 
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='about-pic-con w-[100%]'
          >
            <motion.img 
              variants={heroImgVariants( 'down', 'tween', 0.2, 0.8)}
              initial='hidden'
              whileInView='show'
              whileHover={{ scale: 1.2, transition: {duration: 3} }}
              whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
              className='mx-auto' src={img} alt='' 
            />
          </motion.div>
          <div className='about-text w-[100%] flex flex-col gap-4'>
            <h3 className='text-base md:text-xl '>
              I am a Backend and front-end developer
              based in Nigeria. I develop responsive websites from scratch
              and raise them into modern user-friendly web experiences. <br />{' '}
              <br /> Transforming my creativity and knowledge into a websites
              has been my passion for over a year. I have helped various
              clients to establish their presence online. I am flexible always strive to
              be up to date with the newest technologies and frameworks.
            </h3>
            <Link to="/about">
              <button className='flex items-center gap-1'>
                Read more <RiArrowRightLine />
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About