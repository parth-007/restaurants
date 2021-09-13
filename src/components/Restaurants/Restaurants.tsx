import {useState, useEffect} from 'react';

const Restaurants = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>{
        const url = 'https://my-restaurants-api.herokuapp.com/restaurants';
        const fetchRestaurants = async() => {
            await fetch(url).
                then(res => res.json()).
                then(data => setRestaurants(data)).
                catch(e => console.error(e));
        }

        fetchRestaurants();
    },[]);

    return (
        <div>Restaurants Data here!</div>
    );
}

export default Restaurants;