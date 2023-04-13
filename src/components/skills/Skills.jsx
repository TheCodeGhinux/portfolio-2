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
      <div className='skills-con p-2 my-4'>
        <div className='skills-header text-2xl md:text-4xl'>
          <h3 className='line'>
            <span>#</span>skills
          </h3>
        </div>
        <div className='skills-content  m-4 flex items-center'>
          <div className='skills-img w-[90%] absolute lg:static blur-sm lg:blur-0'>
            <img className='mx-auto' src={svg} alt='' />
          </div>
          <div className='skills-tab-con w-[100%] flex flex-wrap-reverse lg:flex-nowrap lg:flex-row justify-center gap-4 py-4'>
            <div className='col1'>
              <motion.div
                variants={heroTextVariant(1.1, 'left')}
                initial='hidden'
                whileInView='show'
                className='skills-tab w-[11rem]'
              >
                <div className='tab-header border-b '>
                  <h2>Languages</h2>
                </div>
                <div className='skill'>
                  <ul className='flex flex-wrap gap-2'>
                    <li>Python, </li>
                    <li>JavaScript, </li>
                    <li>TypeScript, </li>
                    <li>NodeJs </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div className='col2 flex flex-row md:flex-col gap-4'>
              <motion.div
                variants={heroTextVariant(1.1, 'down')}
                initial='hidden'
                whileInView='show'
                className='skills-tab w-[11rem]'
              >
                <div className='tab-header border-b '>
                  <h2>Databases</h2>
                </div>
                <div className='skill'>
                  <ul className='flex flex-wrap gap-2'>
                    <li>MongoDB, </li>
                    <li>SQL, </li>
                    <li>PostgreSql </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                variants={heroTextVariant(1.1, 'up')}
                initial='hidden'
                whileInView='show'
                className='skills-tab w-[11rem]'
              >
                <div className='tab-header border-b '>
                  <h2>Others</h2>
                </div>
                <div className='skill'>
                  <ul className='flex flex-wrap gap-2'>
                    <li>Data analysis, </li>
                    {/* <li>JavaScript, </li> */}
                    {/* <li> </li> */}
                    <li>ML&AI, </li>
                    <li>Shell, </li>
                    <li>OOP </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
            <motion.div className='col3 flex flex-row md:flex-col gap-4'>
              <motion.div
                variants={heroTextVariant(1.1, 'down')}
                initial='hidden'
                whileInView='show'
                className='skills-tab w-[11rem]'
              >
                <div className='tab-header border-b '>
                  <h2>Tools</h2>
                </div>
                <div className='skill'>
                  <ul className='flex flex-wrap gap-2'>
                    <li>VsCode,</li>
                    <li>PyCharm,</li>
                    <li>Vim,</li>
                    <li>Linux,</li>
                    <li>Miicrosoft Azure,</li>
                    <li>Amazon AWS, </li>
                    <li>Git</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                variants={heroTextVariant(1.1, 'up')}
                initial='hidden'
                whileInView='show'
                className='skills-tab w-[11rem]'
              >
                <div className='tab-header border-b '>
                  <h2>Frameworks</h2>
                </div>
                <div className='skill'>
                  <ul className='flex flex-wrap gap-2'>
                    <li>ReactJs,</li>
                    <li>ExpressJS,</li>
                    <li>Django,</li>
                    <li>Flask,</li>
                    <li>TensorFlow,</li>
                    <li>NumPy, </li>
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