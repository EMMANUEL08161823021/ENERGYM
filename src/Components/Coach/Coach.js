import React from 'react'
import Picture from '../Picture/Picture';
import '../Coach/Coach.scss';
// import coachDetails from '../../coach.json';

const Coach = () => {
  return (
    <div className='coach'>
        <div className='coach-container'>
            <h1>OUR BEST <br className='undo'/>COACHES</h1>
            <p>The best coaches in a gym inspire, educate, and personalize
                 guidance, fostering technique mastery, motivation, injury prevention,
                  and tailored plans that elevate performance, ensuring holistic growth and sustained fitness success.</p>
            <Picture/>      
        </div>
    </div>
  )
}

export default Coach