import './Restaurants.css'
import React from 'react';
import Restaurant from '../Restaurant/Restaurant';
import Spinner from '../Spinner/Spinner';
import { RData } from '../../models';
import { noDataFound } from '../../constants';

const Restaurants: React.FC<RData> = (props) => {
    const {data} = props;
    if (data.length === 0) {
        return (
            <div className='no-data d-flex align-items-center justify-content-center'>{noDataFound}</div>
        );
    }

    return (
        <div className='data-container'>
            {data ? data.map(data => (<Restaurant key={data.id} {...data} />)) : <Spinner />}
        </div>
    );
}

export default Restaurants;