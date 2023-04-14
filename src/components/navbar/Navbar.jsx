import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import Logo from '../logo/Logo';

import { Link } from 'react-router-dom';

import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import Menu from './Menu';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navbar = (props) => {
  const [isActive, setIsActive] = useState(true);



  return (
    <div className='flex items-center'>
      <div className={`navbar ${props.darkMode ? 'dark' : 'light'} p-4 lg:p-8 flex flex-row-reverse lg:flex-row justify-between items-center mx-auto w-[100%]`}>
        <Link to="/">
          <div className='logo'>
            <Logo src={logo} alt='' className={`w-[80px] ${props.darkMode ? 'dark' : 'light'}`} />
          </div>
        </Link>

        <Menu className='sm-nav md:hidden' />
        {/* <div onClick={() => setIsActive(!isActive)}>
          {isActive ? (
            <RiMenu4Fill className='w-9 h-9 fill-white' />
          ) : (
            <RiCloseFill className='w-9 h-9 fill-white' />
          )}
        </div> */}

        <div className='navlinks hidden lg:block'>
          <ul className='flex justify-between gap-4'>
            
            <Link to="/">
              <li className='lg:text-xl  hover:text-primary active:text-primary'>
                <span className='text-primary '>#</span> home
              </li>
            </Link>

            <Link to="/projects">
              <li className='lg:text-xl  hover:text-primary active:text-primary'>
                <span className='text-primary'>#</span> works
              </li>
            </Link>

            <Link to="/about">
              <li className='lg:text-xl  hover:text-primary active:text-primary'>
                <span className='text-primary'>#</span> about-me
              </li>
            </Link>

            <Link to="/contacts">
              <li className='lg:text-xl  hover:text-primary active:text-primary'>
                <span className='text-primary'>#</span>contacts
              </li>
            </Link>
            
          </ul>
        </div>

      </div>
      <DarkModeSwitch
        checked={props.darkMode}
        onChange={props.toggleDarkMode}
        className='relative -top-4 right-32 lg:right-0 z-10'
      />
    </div>
  );
}

export default Navbar