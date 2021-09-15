import './Pagination.css';
import React, { useState } from 'react';
import { PaginationInterface } from '../../models';

const Pagination:React.FC<PaginationInterface> = ({totalRestaurants, restaurantsPerPage, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i<=Math.floor(totalRestaurants / restaurantsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination-list'>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a className='page-link' href='#' onClick={() => paginate(number)}>{number}</a>
                    </li>))}
            </ul>
        </nav>
    )
}

export default Pagination
