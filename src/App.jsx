import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Scroll from './components/SmoothScroll/SmoothScroll'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
// import SmoothScroll from './components/SmoothScroll/SmoothScroll'

const App = () => {

  const [darkMode, setDarkMode] = useState(true);

  // const toggleDarkMode = () => {
  //   setDarkMode(prevDarkMode => !prevDarkMode)
  // }

  const toggleDarkMode = (checked) => {
    setDarkMode(checked)
  }


  const styles = {
    bg: {
      background: darkMode ? '#282C33' : '#f9f9f9'
    }
  }

  return (
    <div style={styles.bg}>
      {/* <SmoothScroll /> */}
      {/* <Scroll /> */}
      {/* <DarkModeSwitch /> */}
      {/* <DarkModeSwitch
        checked={darkMode}
        onChange={toggleDarkMode}
        
      /> */}
      <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App