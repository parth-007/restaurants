import React from 'react';
import './App.css';
import Filters from './components/Filters/Filters';
import Footer from './components/Footer/Footer';
import Restaurants from './components/Restaurants/Restaurants';
import SearchHeader from './components/SearchHeader/SearchHeader';
import Sort from './components/Sort/Sort';

function App() {
  return (
    <div className="App">
      <SearchHeader />
      <div className="container">
        <Filters />
        <Restaurants />
      </div>
      <Footer />
    </div>
  );
}

export default App;
