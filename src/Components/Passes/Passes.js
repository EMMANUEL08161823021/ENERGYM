import React from 'react'
import '../Passes/Passes.scss';
import Register from '../Register/Register.js';

const Passes = () => {
  return (
    <div className='gym-wrapper'>
        <div className='passes'>
            <h1>OUR GYM PASSES</h1>
            <Register/>
        </div>
    </div>
  )
}

export default Passes