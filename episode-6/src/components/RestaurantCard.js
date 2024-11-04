import { IMAGE_URL } from "./utils/constants";

const RestaurantCard = (props)=>{
    const {resData} = props
    const {name, cuisines, avgRating, sla, cloudinaryImageId,costForTwo} = resData.info
    
    return (
        <div className='res-card'>
            <img className='res-image' src={IMAGE_URL + cloudinaryImageId} alt='res-image'></img>
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

export default RestaurantCard;