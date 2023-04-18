import React from 'react'
import { About, Footer, Navbar, Projects } from '../components';

import Transitions from '../../utils/transitions';


const ProjectsPage = (props) => {
  return (
    <>
      <Transitions
        className={`${
          props.darkMode ? 'dark' : 'light'
        } m-auto lg:w-[70%] flex flex-col gap-4 lg:gap-16 text `}
      >
        <Navbar
          darkMode={props.darkMode}
          toggleDarkMode={props.toggleDarkMode}
        />

        <div className='about-header text-2xl md:text-4xl px-4'>
          <h3 className='py-4'>
            <span className='px-2'>/</span>projects
          </h3>
          <p className='text-lg'>List of my projects</p>
        </div>
        <Projects />
        <Footer />
      </Transitions>
    </>
  );
}

export default ProjectsPage