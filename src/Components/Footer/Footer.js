import React from 'react';
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer'>
            <div className='one'>
                <h1>ENERGYM</h1>
            </div>
            <div className='one two'>
                <h2>About</h2>
                <h4>About Us</h4>
                <h4>Blog</h4>
                <h4>Contacts</h4>
                <h4>Vacancy</h4>
            </div>
            <div className='one three'>
                <h2>Services</h2>
                <h4>How to Work</h4>
                <h4>Work</h4>
                <h4>Prices</h4>
            </div>
            <div className='one four'>
                <h2>Support</h2>
                <h4>Contact Us</h4>
                <h4>Our Channel</h4>
                <h4>Telegram</h4>
                <h4>Instagram</h4>
            </div>
            <div className='one five'>
                <h2>FAQ</h2>
                <h4>Payments</h4>
                <h4>Monthly Pay</h4>
                <h4>Work Time</h4>
                <h4>More</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer