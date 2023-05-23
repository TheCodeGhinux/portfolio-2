import React from 'react'
import { motion } from 'framer-motion';
import { sentence, letter } from '../../../utils/motion';
import { RiArrowRightLine } from 'react-icons/ri';


import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: 'python',
    img: '',
    desc: 'description'
  }
]


const Projects = () => {
  return (
    <div>
      <div className='about-con p-2'>
        <div className='about-header text-2xl md:text-4xl'>
          <h3 className='line'>
            <span>#</span>complete-apps
          </h3>
        </div>
        <div className='about-content p-4 flex flex-col lg:flex-row items-center'>
          <div className='about-text w-[100%] flex flex-col gap-4'>
            <div className="projects-con">
              <div className="projects">
                {projects.map(({id, name, img, desc}) => {
                  return (
                    <div className="project">

                    </div>
                  )
                })}
                <div className="project-con">

                </div>
              </div>
            </div>
          </div>
          <div className='about-pic-con w-[100%]'>
            {/* <img className='mx-auto' src={img} alt='' /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects