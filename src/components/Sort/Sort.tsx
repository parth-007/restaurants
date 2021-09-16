import './Sort.css';
import { useState } from 'react';
import { customSortOptions, sortTypes } from "../../constants";
import { SortInterface } from '../../models';

const Sort: React.FC<SortInterface> = (props) => {

    const [sortType, setSortType] = useState('ascending');

    const handleParamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.sortHandler(e.target.value, sortType);
    }

    return (
        <div className='sort-container'>
            <div className='sort-header'>Select Sort options:</div>
            <div>
                <div className='sort-option-header'>
                    Select Sort type:
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
                    Select Sort parameter:
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