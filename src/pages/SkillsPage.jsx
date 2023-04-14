import React from 'react'
import { Footer, Navbar, Skills } from '../components';

const SkillsPage = (props) => {
  return (
    <>
      <div
        className={`${
          props.darkMode ? 'dark' : 'light'
        } m-auto lg:w-[70%] flex flex-col gap-4 lg:gap-16 `}
      >
        <Navbar
          darkMode={props.darkMode}
          toggleDarkMode={props.toggleDarkMode}
        />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default SkillsPage