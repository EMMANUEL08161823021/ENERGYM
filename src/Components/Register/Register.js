import React from 'react'
import { useState } from 'react';
import '../Register/Register.scss';
import Toggle from '../Toggle/Toggle';
import { FaCheckCircle } from 'react-icons/fa';

const Register = () => {
    const [open, setOpen] = useState(false);

    const toggleChange = () => {
      setOpen(open => !open)     

    
    }
    const add = open ? 700: 60; 
    const time = open ? 'yr': 'mo'; 
    const premium = open ? 1400: 120; 
    const personal = open ? 1860: 160; 

    const toggleColor = open ? 'active' : 'show';
    // let toggleText = open ? 'show' : null ;

  return (
    <div className='register'>
        <div className='color'>
            <span className={`active ${toggleColor}`}>Monthly / </span>
            <span className={`show ${toggleColor}`}>Yearly</span>
        </div>
        <div className='switch'>
        <div>        
        <label >
            <input type='checkbox'/> 
            <span className='slider' add={add} onClick={toggleChange}></span>               
        </label>
        </div>
            
        </div>
        
        <div className='plans'>
            <div className='plan'>
                <h2>Basic Membership</h2>
                <h1>{add}$<span>/{time}</span></h1>
                <div>
                    <ul>
                        <li><FaCheckCircle/>Cardio Machines</li>
                        <li><FaCheckCircle/>Strength Training Equipment</li>
                        <li><FaCheckCircle/>Functional Training Area</li>
                        <li><FaCheckCircle/>Locker Rooms</li>
                        <li><FaCheckCircle/>General Gym Space</li>
                    </ul>
                </div>
                <div className='buttons'>
                    <button>Purchase Now</button>
                </div>
            </div>
            <div className='plan'>
                <h2>Premium Membership</h2>
                <h1>{premium}$<span>/{time}</span></h1>
                <div>
                    <ul>
                        <li><FaCheckCircle/>Enhanced Facilities</li>
                        <li><FaCheckCircle/>Specialty Classes</li>
                        <li><FaCheckCircle/>Additional Services</li>
                        <li><FaCheckCircle/>Personalized Services</li>
                        <li><FaCheckCircle/>Extended Hours</li>
                    </ul>
                </div>
                <div className='buttons'>
                    <button>Purchase Now</button>
                </div>
            </div>
            <div className='plan'>
                <h2>Personal Training</h2>
                <h1>{personal}$<span>/{time}</span></h1>
                <div>
                    <ul>
                        <li><FaCheckCircle/>Customized Workouts</li>
                        <li><FaCheckCircle/>One-on-One Sessions</li>
                        <li><FaCheckCircle/>Nutritional Guidance</li>
                        <li><FaCheckCircle/>Progress Tracking</li>
                        <li className='wrap'><FaCheckCircle/>Form Correction & Technique</li>
                    </ul>
                </div>
                <div className='buttons'>
                    <button>Purchase Now</button>
                </div>
            </div>
        </div>
        
    </div>
  )
  
}

export default Register