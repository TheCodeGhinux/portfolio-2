import React from 'react'
import AnimatedSvg from '../components/AnimatedSvg/AnimatedSvg';
import { About, Hero, Skills, Navbar, Footer, Contact } from '../components';
import SmoothScroll from '../components/SmoothScroll/SmoothScroll';

import Transitions from '../../utils/transitions'


const Home = (props) => {


  return (
    <>
      <Transitions>
        <div className={`${props.darkMode ? 'dark-nav' : 'light-nav'} m-auto lg:w-[70%] flex flex-col gap-4 lg:gap-16`}>
          
          <Navbar
            darkMode={props.darkMode}
            toggleDarkMode={props.toggleDarkMode}
          />
          <Hero />
          <About />
          {/* <AnimatedSvg /> */}
          <Skills />
          <Contact />
          <Footer />
        </div>
      </Transitions>
    </>
  );
}

export default Home