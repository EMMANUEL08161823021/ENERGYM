import React from 'react'
import "../Contact/Contact.scss";
import axios from 'axios'
import { useState, useEffect } from "react";
import { FaLocationArrow, FaPhone, FaClock, FaInbox } from 'react-icons/fa';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        console.log(name, email, message);

        const data = {
            Name: name,
            Email: email,
            Message: message
            
        }
        axios.post('https://sheet.best/api/sheets/5e805264-5843-4932-9e25-3855a724e753', data)
        .then(()=> {
            alert('Success!')
            setName('');
            setEmail('');
            setMessage('');
        })
    } 

    
  return (
    <div className='w-contact' id='Contacts'>
        <div className='contact'>
            <div className='message'>
                <h1>CONTACT US</h1>
                <p>Feel free to contact us at any time. We will get back to you as soon as we can!</p>
                <form action='' onSubmit={handleChange} className='form'>
                    <div className='form-group'>
                        <label name='Name'>Name</label>
                        <input 
                        type='text' 
                        placeholder='Your Name' 
                        name='name'
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                        required/>
                    </div>
                    <div className='form-group'>
                        <label name='email'>Email</label>
                        <input 
                        type='email' 
                        placeholder='Your Email' 
                        name='email'
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        required/>
                    </div>
                    <div className='form-group'>
                        <label name='message'>Message</label>
                        <textarea 
                        className='msg' 
                        name='message' 
                        id='message' 
                        cols={20} 
                        rows={5}
                        onChange={(e)=>setMessage(e.target.value)}
                        value={message}
                        required></textarea>
                    </div>
                    <button type='submit'>Send!</button>                    
                </form>
                
            </div>
            <div className='location'>
                <h3>Info</h3>
                <span><span className='icon'><FaInbox/></span>energym@gymfitness.com</span>
                <span><span className='icon'><FaPhone/></span>+44 0203 4494047</span>
                <span><span className='icon'><FaLocationArrow/></span>14, Greenroad St., North London, UK.</span>
                <span><span className='icon'><FaClock/></span>09:00 to 18:00</span>
            </div>
        </div>
    </div>
    
  )
}


export default Contact