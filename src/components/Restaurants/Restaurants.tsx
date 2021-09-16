import './Restaurants.css'
import React from 'react';
import Restaurant from '../Restaurant/Restaurant';
import Spinner from '../Spinner/Spinner';
import { RData } from '../../models';

const Restaurants: React.FC<RData> = (restaurantsData: RData) => {
    const rData = restaurantsData.data;

    return (
        <div className='data-container'>
            {!restaurantsData ? <Spinner /> : rData.map(data => <Restaurant key={data.id} {...data} />)}
        </div>
    );
}

export default Restaurants;