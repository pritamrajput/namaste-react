import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "./utils/mockData";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    async function fetchData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

    useEffect(()=>{
       fetchData()
    },[]);

   console.log(listOfRestaurant)
    return listOfRestaurant.length == 0 ? <Shimmer/> :  (
       <div className='body'>
         <div className='filter'>
            <button className="filter-btn" onClick={
                ()=>{
                    const filteredList = listOfRestaurant.filter((restaurant)=>{
                            return restaurant.info.avgRating > 4.5;
                    })
                    
                    setFilteredRestaurant(filteredList);
                }
            }>
                Top Rated Restaurant
            </button>
              
            <div className="search">
               <input 
                 type="search" 
                 name="name"
                 placeholder="search"
                 value={searchText}
                 className="search-input"
                 onChange={(e)=>{
                    setSearchText(e.target.value);
                 }} 
               />
               <button
               className="search-btn"
                onClick={
                    ()=>{
                       const updatedRestaurantList = listOfRestaurant.filter((restaurant)=>{
                        return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                       })
                       console.log(updatedRestaurantList);
                     
                       setFilteredRestaurant(updatedRestaurantList);
                       
                       
                    }
                }
               >search</button>
            </div> 
    
         </div>
         <div className='res-container'>
            {
                filteredRestaurant.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                })
            }
         </div>
       </div>
    );
}

export default Body;