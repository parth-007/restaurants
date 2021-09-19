import './Filters.css';
import { useState } from 'react';
import { tags } from '../../constants';
import { FiltersInterface } from '../../models';

const Filters: React.FC<FiltersInterface> = (props) => {
    const [checkedTagsMap, setCheckedTagsMap] = useState<Map<string, boolean>>(new Map());

    const handleOnChange = (tagName: string) => {
        if (checkedTagsMap.has(tagName)) {
            // Key exists
            const value = checkedTagsMap.get(tagName);
            checkedTagsMap.set(tagName, !value);

            // If tag is unchecked, remove key from map
            if (value) {
                checkedTagsMap.delete(tagName);
            }
        }
        else {
            // Key does not exist
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

                <button className='tags-filters-action' onClick={() => checkedTagsMap && props.filterTags(checkedTagsMap)}>Filter Restaurants!</button>
            </div>

            <div className='price-filters'>
            </div>
        </div>
    );
}

export default Filters;