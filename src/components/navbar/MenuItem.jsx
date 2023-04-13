import * as React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors1 = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];
const colors = ['#C778DD', '#C778DD', '#C778DD', '#C778DD', '#C778DD'];

export const MenuItem = ({ id, name, link }) => {
  const style = { border: `2px solid ${colors[id]}`, background:`${colors[id]}` };
  const textStyle = {color: `${colors[id]}`}
  return (
    <motion.li
    className='menu-li'
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className='icon-placeholder' style={style} />
      <div className='text-placeholder' style={style} >
        <a className='px-2 text-md text-white' href={link}>{name}</a>
      </div>
    </motion.li>
  );
};
