import './SearchHeader.css';
import { useState } from 'react';

const SearchHeader = () => {
    const [search, setSearch] = useState('');
    return (
        <div className="search-input">
            <input className='search-box' type="text" placeholder="Search Here!" onChange={e => setSearch(e.target.value)} />
            <button className='search-action'>Search</button>
        </div>
    );
}

export default SearchHeader;