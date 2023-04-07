import React from 'react'
import AnimatedSvg from '../components/AnimatedSvg/AnimatedSvg';
import { About, Hero, Skills, Navbar } from '../components';


const Home = () => {
  return (
    <>
      <div className='bg-bg lg:w-[70%] m-auto flex flex-col gap-4 lg:gap-16'>
        <Navbar />
        <Hero />
        <About />
        {/* <AnimatedSvg /> */}
        <Skills />
      </div>
    </>
  );
}

export default Home