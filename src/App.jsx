import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Scroll from './components/SmoothScroll/SmoothScroll'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { About, Home, Projects, Contact} from './pages'

import { AnimatePresence } from 'framer-motion';

// import SmoothScroll from './components/SmoothScroll/SmoothScroll'

const App = () => {

  const location = useLocation();

  const [darkMode, setDarkMode] = useState(true);

  // const toggleDarkMode = () => {
  //   setDarkMode(prevDarkMode => !prevDarkMode)
  // }

  const toggleDarkMode = (checked) => {
    setDarkMode(checked)
  }


  const styles = {
    bg: {
      background: darkMode ? '#545c66' : '#f9f9f9'
    }
  }

  return (
    <AnimatePresence mode='wait'>
      <div style={styles.bg}>
        <Routes>
          <Route
            path='/'
            element={
              <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />

          <Route
            path='/about'
            element={
              <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          {/* <Route
            path='/skills'
            element={
              <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          /> */}
          <Route
            path='/projects'
            element={
              <Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            path='/contacts'
            element={
              <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/about' element={<Projects />} /> */}
        </Routes>
        {/* <SmoothScroll /> */}
        {/* <Scroll /> */}
        {/* <DarkModeSwitch /> */}
        {/* <DarkModeSwitch
          checked={darkMode}
          onChange={toggleDarkMode}
          
        /> */}
      </div>
    </AnimatePresence>
  );
}

export default App