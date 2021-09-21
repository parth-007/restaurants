import './Restaurant.css';
import { RestaurantData } from "../../models";
import { addressString, avgBillFor2, estTimeString, minutesString, outOf5, ratingsString, tagsString } from '../../constants';

const Restaurant: React.FC<RestaurantData> = (data: RestaurantData) => {
    return (
        <div className='card d-flex'>
            <img alt='Restaurant' role='presentation' className='r-pic' src={data.pic} />
            <div className='card-details d-flex'>
                <div className='general-details'>
                    <div className='r-name title'>{data.name}</div>
                    <a href='!#'>{data.website}</a>
                    <div className='title'>{avgBillFor2}&nbsp;<span> {data.avgBillFor2}</span></div>
                    <div className='title tags'>{tagsString}&nbsp; <span>{data.tags.join(', ')}</span> </div>
                    <div className='title'>{estTimeString}&nbsp; <span>{data.ETA} {minutesString}</span> </div>
                    <div className='title'>{ratingsString}&nbsp; <span>{data.ratings}{outOf5} </span></div>
                    <div className='italics ellipsis r-desc'>{data.description}</div>
                </div>
                <div className='address-details'>
                    <div className='title'>{addressString}</div>
                    <div className='ellipsis address-line'>{data.address.line1 + ", " + data.address.line2}</div>
                    <div>{data.address.locality}</div>
                    <div className='italics'>{data.address.phone}</div>
                </div>
            </div>
        </div>
    );
}

export default Restaurant;