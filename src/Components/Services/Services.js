import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../Services/Services.scss";
import Posts from '../Posts/Posts';


const Services = () => {

  return (
    <div className='s-wrapper'>
        <div className='services'>
          <h1>WHY CHOOSE US</h1>
          <Posts/>
        </div>
    </div>
  )
}

export default Services