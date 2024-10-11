import React from 'react'
import '../Register/Register.scss';
import { useState } from 'react';
import Register from '../Register/Register';

const Toggle = () => {
  const [open, setOpen] = useState(false);

  const toggleChange = () => {
    setOpen(open => !open)     
    console.log(open);
    
  }
  const add = open ? 233: 33; 
  // console.log(add);

  return (
    <div>        
        <label >
            <input type='checkbox'/> 
            <span className='slider' add={add} onClick={toggleChange}></span>               
        </label>
    </div>
  )
}

export default Toggle