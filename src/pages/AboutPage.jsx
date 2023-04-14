import React from 'react'
import { About, Footer, Navbar } from '../components'

const AboutPage = (props) => {
  return (
    <>
      <div className={`${props.darkMode ? 'dark' : 'light'} m-auto lg:w-[70%] flex flex-col gap-4 lg:gap-16 `}>
        
        <Navbar
          darkMode={props.darkMode}
          toggleDarkMode={props.toggleDarkMode}
        />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default AboutPage