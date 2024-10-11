import React from 'react';
import '../Navbar/Navbar.scss';
import Hero from '../Hero/Hero';
import { motion } from "framer-motion";
import Slidebar from '../Slidebar/Slidebar';

const Navbar = () => {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-200%",
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 16
      }
    },
  }
  return (
    <div className='wrapper' id='Home'>
      <div className='n-container'>
        <motion.div 
        initial={{opacity: 0, scale: 0.5 }} 
        animate={{opacity: 1, scale: 1 }}
        transition={{duration: 2}}
         className='logo'>ENERGYM</motion.div>
        <ul>
          <li><a href='#Home'>Home</a></li>
          <li><a href='#About'>About</a></li>
          <li><a href='#'>Shop</a></li>
          <li><a href='#Blog'>Blog</a></li>
          <li><a href='#Contacts'>Contacts</a></li>
        </ul>

        <Slidebar/>
      </div>
      <Hero/>
      <motion.div className='mirror' >
        <motion.p variants={sliderVariants} initial="initial" animate="animate">* DRAWING UP AN INDIVIDUAL TRAINING PROGRAM BEST PROFESSIONALS * DRAWING UP AN INDIVIDUAL TRAINING PROGRAM BEST PROFESSIONALS</motion.p>
      </motion.div>
    </div>
  )
}

export default Navbar;