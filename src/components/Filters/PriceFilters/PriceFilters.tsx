import './PriceFilters.css';
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { SliderInterface } from '../../../models';
import { filterRestaurants, selectPrice } from '../../../constants';

const PriceFilters: React.FC<SliderInterface> = (props) => {
  const minRange = props.range[0];
  const maxRange = props.range[1];
  const [rangeSlicerValue, setRangeSlicerValue] = useState<number[]>([minRange, maxRange]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setRangeSlicerValue(newValue as number[]);
  };

  return (
    <div className='price-filters d-flex'>
      <div className='price-filter-header'>
      {selectPrice}
      </div>
      <Slider
        value={rangeSlicerValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={minRange - 50}
        max={maxRange + 50} />
      <button className='action-btn' onClick={() => props.handleSliderChange(rangeSlicerValue)}>{filterRestaurants}</button>
    </div>

  );
}
export default PriceFilters;