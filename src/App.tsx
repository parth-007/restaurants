import React, { useEffect, useState } from 'react';
import './App.css';
import { Filters, Footer, Pagination, Restaurants, SearchHeader, Sort } from './components';
import { RestaurantData } from './models';

function App() {
  const [restaurants, setRestaurants] = useState<RestaurantData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const restaurantsPerPage = 5;

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

  const sortRestaurants = (param: string | number, sortType: string) => {
    if (sortType === 'ascending') {
      switch (param) {
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
    else {
      switch (param) {
        case 'name':
          setRestaurants([...restaurants].sort((rA: RestaurantData, rB: RestaurantData) => rB.name > rA.name ? 1 : -1));
          break;
        case 'locality':
          setRestaurants([...restaurants].sort((rA: RestaurantData, rB: RestaurantData) => rB.address.locality > rA.address.locality ? 1 : -1));
          break;
        case 'eta':
          setRestaurants([...restaurants].sort((rA: RestaurantData, rB: RestaurantData) => rB.ETA - rA.ETA));
          break;
        case 'ratings':
          setRestaurants([...restaurants].sort((rA: RestaurantData, rB: RestaurantData) => rB.ratings - rA.ratings));
          break;
      }
    }
  }

  return (
    <div className="App">
      <SearchHeader />
      <div className="container">
        <Filters />
        <div className="restaurants-container">
          <Sort sortHandler={sortRestaurants} />
          <Restaurants data={currentRestaurants} />
          <Pagination restaurantsPerPage={restaurantsPerPage} totalRestaurants={restaurants.length} paginate={paginate} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
