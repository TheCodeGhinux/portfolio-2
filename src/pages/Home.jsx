import React from 'react'
import AnimatedSvg from '../components/AnimatedSvg/AnimatedSvg';
import { About, Hero, Skills, Navbar, Footer } from '../components';
import SmoothScroll from '../components/SmoothScroll/SmoothScroll';


const Home = () => {
  return (
    <>
      <div className='bg-bg lg:w-[70%] m-auto flex flex-col gap-4 lg:gap-16'>
        <SmoothScroll />
        <Navbar />
        <Hero />
        <About />
        {/* <AnimatedSvg /> */}
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default Home