import './Restaurants.css'
import React, { useState, useEffect } from 'react';
import Sort from '../Sort/Sort';
import Restaurant from '../Restaurant/Restaurant';
import { RestaurantData } from '../../models';

const Restaurants = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const url = 'https://my-restaurants-api.herokuapp.com/restaurants';
        const fetchRestaurants = async () => {
            await fetch(url).
                then(res => res.json()).
                then(data => setRestaurants(data)).
                catch(e => console.error(e));
        }

        fetchRestaurants();
    }, []);

    return (
        <div className='data-container'>
            <Sort />
            {restaurants.map((r: RestaurantData) => <Restaurant key={r.id} {...r} />)}
        </div>
    );
}

export default Restaurants;