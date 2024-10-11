import React from 'react';
import Articles from '../Articles/Articles';
import '../Blog/Blog.scss';

const Blog = () => {
  return (
    <div className='blog-wrapper' id='Blog'>
        <div className='blog'>
            <h1>BLOGS & NEWS</h1>
            <p>Our gym's news and blogs deliver valuable insights, from workout tips to nutrition advice. Engaging content keeps us informed about new classes, success stories, and fitness trends, fostering motivation and a sense of community among members.</p>
            <Articles/>
        </div>
    </div>
  )
}

export default Blog