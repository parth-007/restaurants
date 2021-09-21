import './SearchHeader.css';
import { useState } from 'react';
import { SearchHeaderInterface } from '../../models';
import { searchString } from '../../constants';

const SearchHeader: React.FC<SearchHeaderInterface> = (props) => {
    const [search, setSearch] = useState('');

    const searchRestaurants = (searchKeyword: string) => {
        props.searchRestaurants(searchKeyword);
    }

    return (
        <div className="search-input d-flex align-items-center justify-content-center">
            <input className='search-box' type="text" placeholder="Search Here!" onChange={e => setSearch(e.target.value)} />
            <button className='search-action' onClick={(e) => searchRestaurants(search)}>{searchString}</button>
        </div>
    );
}

export default SearchHeader;