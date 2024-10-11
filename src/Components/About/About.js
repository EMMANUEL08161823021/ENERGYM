import React from 'react';
import '../About/About.scss';
import Image from '../../Images/close-up-athlete-training.jpg';
import Powerful from '../../Images/powerful-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-background.jpg'
import Woman from '../../Images/young-concentrated-athlete-woman-doing-exercises-with-dumbbell.jpg'

const About = () => {
  return (
    <div className='about' id='About'>
      <div className='about-container'>
        <h1>ABOUT OUR GYM</h1>
        <div className='aboutImage'>
          <div className='image'>
          <img src={Image} alt='about'/>
          </div>
          <div className='experience'>
            <p>
              The ENERGYM mentorship combines expertise with hands-on experience, providing invaluable
               guidance in workouts, form correction, and program personalization. Through shared wisdom
                and practical training, it cultivates a transformative fitness journey, ensuring holistic
                 growth and skill refinement.</p>
            <div className='button'>
              <button>10 years</button>
            </div>
          </div>
          <div className='sectionTwo'>
            <div className='picture'>
              <div className='circle'>
                <img src={Powerful} alt='image'/>
              </div>
              <div className='circleTwo'>
                <img src={Woman} alt='image'/>                
              </div>
            </div>
            <div className='texts'>
              <div className='text One'>
                <h2>Energym On Empowerment</h2>
                <p>Strength, confidence, choice, voice, autonomy—empowerment fuels growth and transformation within individuals.</p>
              </div>
              <div className='text Two'>
                <h2>Energym On Progression</h2>
                <p>                
                  Advance, grow, evolve—progression marks constant improvement and development over time.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About