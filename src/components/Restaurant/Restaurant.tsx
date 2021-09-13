import './Restaurant.css';
import { RestaurantData } from "../../models";

const Restaurant: React.FC<RestaurantData> = (data: RestaurantData) => {
    return (
        <div className='card'>
            <img className='r-pic' src={data.pic} />
            <div className='card-details'>
                <div className='general-details'>
                    <span className='r-name title'>{data.name}</span>
                    <a href='#'>{data.website}</a>
                    <span><span className='title'>Avg. Bill for Two:&nbsp;</span> {data.avgBillFor2}</span>
                    <span><span className='title'>Tags:&nbsp;</span> {data.tags.join(', ')} </span>
                    <span><span className='title'>Est. Time:&nbsp;</span> {data.ETA} {'Minutes'} </span>
                    <span><span className='title'>Ratings:&nbsp;</span> {data.ratings}{'/5'} </span>
                    <span className='italics ellipsis r-desc'>{data.description}</span>
                </div>
                <div className='address-details'>
                    <span className='title'>Address:</span>
                    <span className='ellipsis address-line'>{data.address.line1 + ", " + data.address.line2}</span>
                    <span>{data.address.locality}</span>
                    <span className='italics'>{data.address.phone}</span>
                </div>
            </div>
        </div>
    );
}

export default Restaurant;