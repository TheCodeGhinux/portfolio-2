import React from 'react'
import { BsFillSuitHeartFill, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

import logo from '../../assets/logo.svg';
import Logo from '../logo/Logo';

const Footer = (props) => {
  return (
    <div>
      <div className='footer mb-20 lg:mb-20'>
        <div className='footer-con flex justify-between p-8'>
          <div className='footer-logo w-20'>
            <Logo
              src={logo}
              alt=''
              className={`w-[80px] `}
            />
          </div>
          <div className='socials-con'>
            <div className='footer-header'>
              <h1 className='text-2xl'>Socials</h1>
            </div>
            <div className='footer-socials-con flex gap-4'>
              <a href='http://'>
                <BsGithub className=' w-6 h-6' />
              </a>

              <a href='http://'>
                <BsTwitter className=' w-6 h-6' />
              </a>

              <a href='http://'>
                <BsLinkedin className=' w-6 h-6' />
              </a>
            </div>
          </div>
        </div>
        <div className='copyright flex flex-col items-center justify-center '>
          <p className='flex items-center gap-2'>© Copyright 2023.</p>
          <p className='flex items-center gap-2'>
            Built with{' '}
            <span className=''>
              <BsFillSuitHeartFill />{' '}
            </span>{' '}
            by The CodeGhinux
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer