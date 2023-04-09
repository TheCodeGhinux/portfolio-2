import React from 'react'
import './App.css'
import Home from './pages/Home'
import Scroll from './components/SmoothScroll/SmoothScroll'

const App = () => {
  return (
    <div className='app bg-darkbg'>
      {/* <Scroll /> */}
      <Home />
    </div>
  )
}

export default App