import React from 'react'
import { Contact, Footer, Navbar, Skills } from '../components';
import Transitions from '../../utils/transitions';

const ContactsPage = (props) => {
  return (
    <>
      <Transitions>
        <div
          className={`${
            props.darkMode ? 'dark' : 'light'
          } m-auto lg:w-[70%] flex flex-col gap-4 lg:gap-16 `}
        >
          <Navbar
            darkMode={props.darkMode}
            toggleDarkMode={props.toggleDarkMode}
          />
          <Contact />
          <Footer />
        </div>
      </Transitions>
    </>
  );
}

export default ContactsPage