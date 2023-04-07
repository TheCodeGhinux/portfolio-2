import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
);


const MenuToggle = ({ toggle }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
       <button className='menu-btn' onClick={toggle}>
        <div onClick={() => setIsActive(!isActive)}>
          {isActive ? (
            <RiMenu4Fill className='w-6 h-6 fill-white' />
          ) : (
            <RiCloseFill className='w-6 h-6 fill-white' />
          )}
        </div>
       </button>
    </div>
  )
}

export  {MenuToggle}

// export const MenuToggle = ({ toggle }) => (
//   const [isActive, setIsActive] = useState(true)


//   <button onClick={toggle}>
//     <div onClick={() => setIsActive(!isActive)}>
//       {isActive ? (
//         <RiMenu4Fill className='w-9 h-9 fill-white' />
//       ) : (
//         <RiCloseFill className='w-9 h-9 fill-white' />
//       )}
//     </div>
//     {/* <svg width='23' height='23' viewBox='0 0 23 23'>
//       <Path
//         variants={{
//           closed: { d: 'M 2 2.5 L 20 2.5' },
//           open: { d: 'M 3 16.5 L 17 2.5' },
//         }}
//       />
//       <Path
//         d='M 2 9.423 L 20 9.423'
//         variants={{
//           closed: { opacity: 1 },
//           open: { opacity: 0 },
//         }}
//         transition={{ duration: 0.1 }}
//       />
//       <Path
//         variants={{
//           closed: { d: 'M 2 16.346 L 20 16.346' },
//           open: { d: 'M 3 2.5 L 17 16.346' },
//         }}
//       />
//     </svg> */}
//   </button>
// );
