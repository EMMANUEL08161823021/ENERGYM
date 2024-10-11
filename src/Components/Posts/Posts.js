import React from 'react'
import '../Posts/Posts.scss';
import data from '../../db.json';
import { BsFillLightningFill } from "react-icons/bs"; 

const Posts = () => {
  return (
    <div className='posts'>
      {
        data.map((post)=> (
          <div className='post' key={post.id}>
            <img src={`${post.url}`} alt='icon'/>
            <h2>{post.title}</h2>
            <p>{post.paragraph}</p>
            <div className='term'>
              <button>Learn More</button>
              <span><BsFillLightningFill /></span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Posts