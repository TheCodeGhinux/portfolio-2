import React from 'react'
import { BiMailSend } from 'react-icons/bi';
import WhatsappSvg from '../AnimatedSvg/WhatsappSvg';

const Contact = () => {
  return (
    <div>
      <div className='contact-con p-2'>
        <div className='contact-header text-2xl md:text-4xl'>
          <h3 className='line'>
            <span>#</span>contact
          </h3>
        </div>
        <div className='contact-content lg:w-[70%] lg:m-auto p-4 flex flex-col gap-6 md:flex-row items-center'>
          <div className='contact-text w-[100%] flex flex-col gap-4'>
            <h3 className='text-lg md:text-xl '>
              I am interested in freelance and internship opportunities.
              However, if you have other request or question, do not hesitate to
              contact me.
            </h3>
          </div>
          <div className='message-con border-2 border-grey w-64 p-4  flex flex-col gap-4'>
            <h3>Send a message</h3>
            <div className='message-links flex flex-col gap-2'>
              <div className='email'>
                <a
                  href='mailto:ilesanmibry@gmail.com'
                  className='flex gap-2 items-center'
                >
                  <BiMailSend className='w-6 h-6' /> Email
                </a>

              </div>
              <div className="whatsapp">
                <a
                  aria-label='Chat on WhatsApp'
                  href='https://wa.me/2348140273725'
                  className='flex gap-2 items-center'
                >
                  <WhatsappSvg /> Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact