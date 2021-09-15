import React, { useEffect, useState } from 'react';
import './App.css';
import Filters from './components/Filters/Filters';
import Footer from './components/Footer/Footer';
import Pagination from './components/Pagination/Pagination';
import Restaurants from './components/Restaurants/Restaurants';
import SearchHeader from './components/SearchHeader/SearchHeader';
import Sort from './components/Sort/Sort';
import { customSortOptions } from './constants';
import { RestaurantData } from './models';

function App() {
  const [restaurants, setRestaurants] = useState<RestaurantData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantsPerPage] = useState(5);

  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = restaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  useEffect(() => {
    const url = 'https://my-restaurants-api.herokuapp.com/restaurants';
    const fetchRestaurants = async () => {
      await fetch(url).then(res => res.json()).then(data => setRestaurants(data)).catch(e => console.error(e));
    }

    fetchRestaurants();
  }, []);

  const sortRestaurants = (param: string | number) => {
    switch(param) {
      case 'name':
        setRestaurants([...restaurants].sort((rA: RestaurantData, rB: RestaurantData) => rA.name > rB.name ? 1 : -1));
        break;
      case 'locality':
        setRestaurants([...restaurants].sort((rA: RestaurantData, rB: RestaurantData) => rA.address.locality > rB.address.locality ? 1 : -1));
        break;
      case 'eta':
        setRestaurants([...restaurants].sort((rA: RestaurantData, rB: RestaurantData) => rA.ETA - rB.ETA));
        break;
      case 'ratings':
        setRestaurants([...restaurants].sort((rA: RestaurantData, rB: RestaurantData) => rA.ratings - rB.ratings));
        break;
    }    
  }

  return (
    <div className="App">
      <SearchHeader />
      <div className="container">
        <Filters />
        <div className="restaurants-container">
          <Sort sortHandler={sortRestaurants}/>
          <Restaurants data={currentRestaurants}/>
          <Pagination restaurantsPerPage={restaurantsPerPage} totalRestaurants={restaurants.length} paginate={paginate}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
