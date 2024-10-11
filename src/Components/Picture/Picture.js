import React from 'react'
import coachDetails from '../../coach.json';
import '../Picture/Picture.scss';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MediaQuery from '../MediaQuery/MediaQuery';

const Picture = () => {
    const [coachDetail, setCoachDetail] = useState(coachDetails.slice(0, 9));
    const [pageNumber, setPageNumber] = useState(0);
    const matches = MediaQuery("(min-width: 650px )");
    const userPerPage = `${matches ? 3 : 1}`;

    const pageVisited = `${matches ? 3 : 1}` * pageNumber;

    const displayCoachDetails = coachDetail.slice(pageVisited, pageVisited + (matches ? 3 : 1))
    .map((coachDetail)=> {
        return (
            <div className='details' key={coachDetail.id}>
                <img src={`${coachDetail.url}`} alt='image'/>
                <h2>{coachDetail.name}</h2>
                <h5>{coachDetail.position}</h5>
            </div>            
        )
     

    })
    const pageCount = Math.floor( 9 / userPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
  return (
    <div className='photo'>
        <div className='picture-container'>
            {displayCoachDetails}

        </div>
        <div className='reactpaginate'>
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                className='paginateButton'
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
            />
        </div>
    </div>
  )
}

export default Picture