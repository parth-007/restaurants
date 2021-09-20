import './TagFilters.css';
import React, { useState } from 'react';
import { tags } from '../../../constants';
import { FiltersInterface } from '../../../models';

const TagFilters: React.FC<FiltersInterface> = (props) => {
    const [checkedTagsMap, setCheckedTagsMap] = useState<Map<string, boolean>>(new Map());

    const handleOnChange = (tagName: string) => {
        if (checkedTagsMap.has(tagName)) {
            // If key exists, then toggle it's value
            const value = checkedTagsMap.get(tagName);
            checkedTagsMap.set(tagName, !value);

            // If value is false, remove the key from map
            if (value) {
                checkedTagsMap.delete(tagName);
            }
        }
        else {
            // Key does not exist, then set the value to true
            checkedTagsMap.set(tagName, true);
        }
        setCheckedTagsMap(checkedTagsMap);
    }

    return (
        <div className='filters-panel'>
            <div className='tag-filters'>
                <label>Pick Filters:</label>
                {tags.map((tag, index) => (
                    <label className='tag-container' htmlFor={`tag${index}`}>
                        <input type='checkbox' value={tag} id={`tag${index}`} name='tags' onChange={() => handleOnChange(tag)} />
                        <span className='tag-name'>{tag}</span>
                    </label>
                ))}

                <button className='action-btn' onClick={() => checkedTagsMap && props.filterTags(checkedTagsMap)}>Filter Restaurants!</button>
            </div>
        </div>
    );
}

export default TagFilters;