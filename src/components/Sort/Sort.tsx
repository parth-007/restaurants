import './Sort.css';
import { customSortOptions } from "../../constants";
import { SortInterface } from '../../models';

const Sort:React.FC<SortInterface> = (props) => {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        props.sortHandler(e.target.value);
    }

    return (
        <div className='sort-container'>
            <div className='sort-header'>Select Sort option:</div>
            <div>
            {customSortOptions.map((option) => (
                <span className='sort-radio'>
                    <span className='content'>{option}</span>&nbsp;
                    <input type='radio' name='sort' value={option.toLocaleLowerCase()} onChange={e => handleChange(e)}/>
                </span>
            ))}
            </div>
        </div>
    );
}

export default Sort;