import React from 'react'
import image from '../../assets/image.png'
import outline from '../../assets/outline.svg'
import sign from '../../assets/quote-sign.svg'
import dots from '../../assets/dots.svg'

import { motion } from 'framer-motion'
import {
  heroVariants,
  heroTextVariant,
  staggerContainer,
  textVariant,
  sentence,
  letter,
} from '../../../utils/motion.js';


const line1 = 'Software Engineer, Backend Developer';
const text3 =
  'He crafts responsive websites where technologies meet creativity';


const Hero = () => {
  return (
    <div>
      <div className=' hero  mx-auto px-8 text-white flex flex-col gap-10 lg:gap-28'>
        <div className='lg:pt-20 lg:top-48 lg:left-44 hero-div text-3xl flex flex-col lg:flex-row gap-8'>
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='hero-text flex flex-col gap-8 w-[100%]'
          >
            <motion.h1
              variants={heroTextVariant(1.1, 'right')}
              initial='hidden'
              whileInView='show'
              className='text-xl lg:text-3xl'
            >
              Hello, from the tech side
            </motion.h1>

            <motion.h1
              variants={heroTextVariant(1.5, 'left')}
              initial='hidden'
              whileInView='show'
              className='text-xl lg:text-3xl'
            >
              I'm Ayo, <br />{' '}
              <span className='text-primary'>
                {' '}
                {line1}
              </span>{' '}
              and
              <span className='text-primary'> Front-end developer</span>
            </motion.h1>

            <motion.h3
              variants={sentence}
              initial='hidden'
              animate='show'
              className='text-xl text-grey'
            >
              {text3.split("").map((char, index) => {
                return (
                  <motion.span
                    variants={letter}
                    key={char + "-" + index}
                  >
                    {char}
                  </motion.span>
                )
              })}
            </motion.h3>

            <motion.button
              variants={textVariant(1.1)}
              initial='hidden'
              whileInView='show'
              className='px-4 py-2 text-xl border-2 border-primary w-fit'
            >
              Contact me !!
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1, }} 
            className='hero-img  w-[90%] relative top-[3rem] lg:top-0 h-60 lg:h-auto'
          >
            <img className='w-[100%] w-[9rem]' src={outline} alt='' />
            <div className='absolute top-[-4rem] lg:top-[-63px]'>
              <img className=' ' src={image} alt='' />
              <img src={dots} alt='' className='absolute right-[5%] bottom-0' />
            </div>
          </motion.div>
        </div>

        <div className='quote  relative w-fit m-auto'>
          <h1 className='border-2 border-grey lg:text-2xl p-2 lg:p-8 box-border font-medium '>
            With great power comes great electricity bill
          </h1>
          <img
            className='absolute w-[20px] -top-1 lg:top-[-12px] left-4'
            src={sign}
            alt=''
          />
          <img
            className=' absolute w-[20px] bottom-7 lg:bottom-[44px] right-4'
            src={sign}
            alt=''
          />
          <div className='quote-name right-0 border-2 border-grey border-t-0 ml-auto p-1 lg:p-4 w-fit text-'>
            <h1> - Dr. Who</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero