import React from 'react'
import coachDetails from '../../coach.json';
import { useState } from 'react';
import '../News/News.scss';
import { FaQuoteRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import Portrait from '../../Images/close-up-portrait-lovely-young-african-american-woman-with-curly-afro-haircut-smiling-with-happy-pleasant-expression-enjoying-winter-holidays-wearing-sweater-blue-wall.jpg';

const News = () => {
    const [news, setNews] = useState(coachDetails.slice(12, 16));
    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 1;

    const pageVisited = userPerPage * pageNumber; 

    const pageCount = Math.floor( (coachDetails.length - 12) / userPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    const displayNews = news.slice(pageVisited, pageVisited + userPerPage)
    .map((news)=>{
        return (
            <div className='news-container' key={news.id}>
                {FaQuoteRight}
                <p>{news.words}</p>
                <div className='paginate'>
                    <div className='person'>
                        <img src={Portrait} alt='image'/>
                        <div>
                            <h3>{news.name}</h3>
                            <h5>{news.position}</h5>
                        </div>                                
                    </div>
                    <ReactPaginate
                        previousLabel={<FaArrowLeft/>}
                        nextLabel={<FaArrowRight/>}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        className='reactpaginate' 
                        previousLinkClassName={"previousBtn"}
                        nextLinkClassName={"nextBtn"}
                    /> 
                </div>
            </div>
            
        )
    })

  return (
    <div className='news'>
        {displayNews}
    </div>
  )
}

export default News