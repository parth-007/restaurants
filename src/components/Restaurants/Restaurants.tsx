import './Restaurants.css'
import React from 'react';
import Restaurant from '../Restaurant/Restaurant';
import { RData } from '../../models';

const Restaurants: React.FC<RData> = (restaurantsData: RData) => {
    const rData = restaurantsData.data;

    return (
        <div className='data-container'>
            {!restaurantsData ? 'Data Not available yet!' : rData.map(d => <Restaurant key={d.id} {...d}/>)}
        </div>
    );
}

export default Restaurants;