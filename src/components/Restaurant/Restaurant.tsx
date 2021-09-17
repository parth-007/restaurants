import './Restaurant.css';
import { RestaurantData } from "../../models";

const Restaurant: React.FC<RestaurantData> = (data: RestaurantData) => {
    return (
        <div className='card'>
            <img alt='Restaurant' role='presentation' className='r-pic' src={data.pic} />
            <div className='card-details'>
                <div className='general-details'>
                    <div className='r-name title'>{data.name}</div>
                    <a href='!#'>{data.website}</a>
                    <div className='title'>Avg. Bill for Two:&nbsp;<span> {data.avgBillFor2}</span></div>
                    <div className='title tags'>Tags:&nbsp; <span>{data.tags.join(', ')}</span> </div>
                    <div className='title'>Est.Time:&nbsp; <span>{data.ETA} {'Minutes'}</span> </div>
                    <div className='title'>Ratings:&nbsp; <span>{data.ratings}{'/5'} </span></div>
                    <div className='italics ellipsis r-desc'>{data.description}</div>
                </div>
                <div className='address-details'>
                    <div className='title'>Address:</div>
                    <div className='ellipsis address-line'>{data.address.line1 + ", " + data.address.line2}</div>
                    <div>{data.address.locality}</div>
                    <div className='italics'>{data.address.phone}</div>
                </div>
            </div>
        </div>
    );
}

export default Restaurant;