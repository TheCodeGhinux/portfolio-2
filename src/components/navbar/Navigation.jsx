import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};



export const Navigation = () => (
  <motion.ul className="menu-ul" variants={variants}>
    {items.map(({id, name, link}) => (
      <MenuItem id={id} key={id} name={name} link={link} />
    ))}
  </motion.ul>
);

// const itemIds = [0, 1, 2, 3, 4];
// const itemIds = [
//   {
//     id: 0,
//   },
//   {
//     id: 1
//   }
// ];


const items = [
  {
    id: 0,
    name: 'Home',
    link: '/'
  },
  {
    id: 1,
    name: 'Works',
    link: '/works'
  },
  {
    id: 2,
    name: 'About Me',
    link: '/about-me'
  },
  {
    id: 3,
    name: 'Contact',
    link: '/contact'
  }
];
