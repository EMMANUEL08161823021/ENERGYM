import React from 'react'
import '../Reviews/Reviews.scss';
import View from '../../Images/group-young-people-training-gym-indoors-maintaining-sportive-lifestyle.jpg';
import News from '../News/News';

const Reviews = () => {
  return (
    <div className='review-wrapper'>
        <div className='reviews'>
            <h1>REVIEWS FROM CLIENTS</h1>
            <div className='review-image'>
              <img src={View} alt=''/>
              <div className='opinions'>
                <News/>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Reviews