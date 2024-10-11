import React from 'react'
import Links from './Links/Links';
import "../Slidebar/Slidebar.scss";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
// import ToggleButton from './ToggleButton/ToggleButton'

const Slidebar = () => {
    const [open, setOpen] = useState(false);
    const colorChange = open ? 'bg' : null;
    const variants = {
      open: {
          clipPath: "circle(1300px)",
          type: "spring",
          stiffness: 40
      },
      closed: {
          
        clipPath: "circle(0px)",
        transition: {
          delay: 0.2,
          // type: "spring",
          stiffness: 400,
          damping: 40
        }
      }
    }
    const onChange = () => {
      setOpen((open)=> !open)

      return colorChange;

    }
    console.log(colorChange);

  return (
    <motion.div className='slidebar' animate={open ? "closed" : "open"}>
        <motion.div className='slidebar-bg' variants={variants}>
            <Links/>
        </motion.div>
        <button className={`bg ${colorChange}`} onClick={onChange}>
        <svg width="25" height="5" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path d='M0 0 l10 0' stroke="black" strokeWidth={3} strokeLinecap='round'
          variants={{
            // closed: {d:"M0 0.5H90"},
            open: {d: 'M0 0.5 L8 9' },
        }} />
        </svg>


        <svg width="25" height="5" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path d='M0 0 l10 0' stroke="black" strokeWidth={3} strokeLinecap='round'
          variants={{
            // closed: {d:"M0 0.5H90"},
            open: {d: '3 16.5 L 17 2.5'},
          }} 
        /></svg>



        
        <svg width="25" height="5" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path d='M0 0 l10 0' stroke="black" strokeWidth={3} strokeLinecap='round'
          variants={{
            // closed: {d:"M0 0.5H90"},
            open: {d: 'M0 0.5 L9 -7' },
        }}
        /></svg>
    </button>
    </motion.div>
  )
}

export default Slidebar