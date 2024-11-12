import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "./utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResinfo] = useState(null);

    const {resId} = useParams();
  
    

    useEffect(()=>{
      fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data =  await fetch(MENU_API + resId);
        const json = await data.json();
        setResinfo(json.data);
    
    };

    if(resInfo == null) return <Shimmer/>

    const {
        name = "Restaurant Name Not Available",
        cuisines = [],
        cloudinaryImageId = "",
        costForTwoMessage = "Cost info not available"
    } = resInfo?.cards?.[2]?.card?.card?.info || {};


 
    
    const {
        itemCards
    } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    

    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item)=>{
                      return <li key={item.card.info.id}>{item.card.info.name} - {"Rs"} {item.card.info.price/100||item.card.info.defaultPrice/100}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default RestaurantMenu;