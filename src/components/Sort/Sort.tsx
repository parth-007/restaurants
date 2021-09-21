import './Sort.css';
import { useState } from 'react';
import { customSortOptions, selectSortOptions, selectSortParameter, selectSortType, sortTypes } from "../../constants";
import { SortInterface } from '../../models';

const Sort: React.FC<SortInterface> = (props) => {

    const [sortType, setSortType] = useState(sortTypes[0].toLowerCase());

    const handleParamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.sortHandler(e.target.value, sortType);
    }

    return (
        <div className='sort-container'>
            <div className='sort-header'>{selectSortOptions}</div>
            <div>
                <div className='sort-option-header'>
                    {selectSortType}
                </div>
                {sortTypes.map((type) => (
                    <span className='sort-radio'>
                        <span className='content'>{type}</span>&nbsp;
                        <input type='radio' name='sortType' value={type.toLocaleLowerCase()} onChange={e => setSortType(e.target.value)} />
                    </span>
                ))}
            </div>
            <div className='sort-set'>
                <div className='sort-option-header'>
                    {selectSortParameter}
                </div>
                {customSortOptions.map((option) => (
                    <span className='sort-radio'>
                        <span className='content'>{option}</span>&nbsp;
                        <input type='radio' name='sort' value={option.toLocaleLowerCase()} onChange={e => handleParamChange(e)} />
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Sort;