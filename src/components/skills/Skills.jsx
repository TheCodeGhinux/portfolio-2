import React from 'react'
import svg from '../../assets/skills-svg.svg'
import { motion } from 'framer-motion';

import {
  heroVariants,
  heroTextVariant,
  staggerContainer,
  textVariant,
  sentence,
  letter,
} from '../../../utils/motion.js';


const Skills = () => {
  return (
    <div>
      <div className='skills-con'>
        <div className='skills-header text-4xl text-white'>
          <h3 className='line'>
            <span>#</span>skills
          </h3>
        </div>
        <div className='skills-content p-4 flex items-center'>
          <div className='skills-img w-[100%]'>
            <img src={svg} alt='' />
          </div>
          <div className='skills-tab-con w-[100%] flex flex-col lg:flex-row gap-4 py-4'>
            <div className='col1'>
              <motion.div
                variants={heroTextVariant(1.1, 'right')}
                initial='hidden'
                whileInView='show'
                className='skills-tab w-[11rem] text-grey'
              >
                <div className='tab-header border-b '>
                  <h2>Languages</h2>
                </div>
                <div className='skill'>
                  <h3>Python JavaScript NodeJs ML&AI</h3>
                </div>
              </motion.div>
            </div>

            <motion.div className='col2 flex flex-col gap-4'>
              <motion.div
                variants={heroTextVariant(1.1, 'down')}
                initial='hidden'
                whileInView='show'
                className='skills-tab w-[11rem] text-grey'
              >
                <div className='tab-header border-b '>
                  <h2>Databases</h2>
                </div>
                <div className='skill'>
                  <h3>MongoDB SQL PostgreSql</h3>
                </div>
              </motion.div>
              <motion.div
                variants={heroTextVariant(1.1, 'up')}
                initial='hidden'
                whileInView='show'
                className='skills-tab w-[11rem] text-grey'
              >
                <div className='tab-header border-b '>
                  <h2>Others</h2>
                </div>
                <div className='skill'>
                  <h3>Python JavaScript NodeJs ML&AI</h3>
                </div>
              </motion.div>
            </motion.div>
            <motion.div className='col3 flex flex-col gap-4'>
              <motion.div
                variants={heroTextVariant(1.1, 'down')}
                initial='hidden'
                whileInView='show'
                className='skills-tab w-[11rem] text-grey'
              >
                <div className='tab-header border-b '>
                  <h2>Tools</h2>
                </div>
                <div className='skill'>
                  <ul className='flex flex-wrap'>
                    <li>VsCode</li>
                    <li>PyCharm</li>
                    <li>Vim</li>
                    <li>Linux</li>
                    <li>Miicrosoft Azure</li>
                    <li>Amazon AWS </li>
                    <li>Git</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                variants={heroTextVariant(1.1, 'up')}
                initial='hidden'
                whileInView='show'
                className='skills-tab w-[11rem] text-grey'
              >
                <div className='tab-header border-b '>
                  <h2>Frameworks</h2>
                </div>
                <div className='skill'>
                  <ul className='flex flex-wrap'>
                    <li>ReactJs</li>
                    <li>ExpressJS</li>
                    <li>Django</li>
                    <li>Flask</li>
                    <li>TensorFlow</li>
                    <li>NumPy </li>
                    <li>Pandas</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills