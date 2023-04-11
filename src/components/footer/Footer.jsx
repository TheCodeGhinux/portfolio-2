import React from 'react'
import { BsFillSuitHeartFill, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div>
      <div className='footer text-grey mb-10 lg:mb-16'>
        <div className='footer-con flex justify-between p-8'>
          <div className='footer-logo w-20'>
            <img src={logo} alt='' />
          </div>
          <div className='socials-con'>
            <div className='footer-header'>
              <h1 className='text-2xl'>Socials</h1>
            </div>
            <div className='footer-socials-con flex gap-4'>
              <a href="http://">
                <BsGithub className='fill-grey w-6 h-6' />
              </a>

              <a href="http://">
                <BsTwitter className='fill-grey w-6 h-6' />
              </a>

              <a href="http://">
                <BsLinkedin className='fill-grey w-6 h-6' />
              </a>
              
            </div>
          </div>
        </div>
        <div className='copyright flex flex-col items-center justify-center text-grey '>
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