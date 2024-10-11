import React from 'react';
import '../Hero/Hero.scss';

const Hero = () => {
  return (
    <div className='h-wrapper'>
      <div className='h-container'>
          <h1>WORK WITH PROFESSIONALS</h1>
          <p>In Energym, collaborating with fitness professionals ensures personalized workouts, expert guidance, and efficient progress tracking. <cut>Their expertise fosters a supportive environment, enhancing your fitness journey with tailored advice, motivation, and a commitment to your overall well-being.</cut> </p>
          <div className='buttons'>
            <button>Start Now</button>
            <button>Learn More</button>
          </div>
      </div>
        
    </div>

  )
}

export default Hero