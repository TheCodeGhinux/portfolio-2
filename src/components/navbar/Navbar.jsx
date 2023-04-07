import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import Menu from './Menu';

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <div className='navbar p-4 flex flex-row-reverse lg:flex-row justify-between items-center bg-bg mx-auto w-[100%]'>
        <div className='logo'>
          <img src={logo} alt='' className='w-[80px]' />
        </div>

        <Menu className='sm-nav md:hidden' />
        {/* <div onClick={() => setIsActive(!isActive)}>
          {isActive ? (
            <RiMenu4Fill className='w-9 h-9 fill-white' />
          ) : (
            <RiCloseFill className='w-9 h-9 fill-white' />
          )}
        </div> */}

        <div className='navlinks hidden lg:block'>
          <ul className='flex justify-between gap-4 text-grey'>
            <a href="">
              <li className='lg:text-xl  hover:text-white active:text-white'>
                <span className='text-primary '>#</span> home
              </li>
            </a>
            <a href="">
              <li className='lg:text-xl  hover:text-white active:text-white'>
                <span className='text-primary'>#</span> works
              </li>
            </a>
            <a href="">
              <li className='lg:text-xl  hover:text-white active:text-white'>
                <span className='text-primary'>#</span> about-me
              </li>
            </a>
            <a href="">
              <li className='lg:text-xl  hover:text-white active:text-white'>
                <span className='text-primary'>#</span>contacts
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar