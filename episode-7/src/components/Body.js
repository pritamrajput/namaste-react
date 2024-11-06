import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

const Body = () => {
    //Local State variable - super power variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    let listOfRestaurant3;

    console.log("Body rendered");

    // useEffect hooks
    useEffect(()=>{
         fetchData();
    },[]);

    const fetchData = async () => {
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       
       const json =  await data.json();

       console.log(json);

       setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

       
    }


    // Normal JS variable
    // let listOfRestaurant = [];

    // Normal js variable
//     let listOfRestaurant2 = [{
//         "info": {
//             "id": "241027",
//             "name": "Namaste",
//             "cloudinaryImageId": "dtcwa1rxdskp3crqvpr3",
//             "locality": "3rd Sector",
//             "areaName": "Hsr Layout",
//             "costForTwo": "₹100 for two",
//             "cuisines": [
//               "South Indian",
//               "Chinese",
//               "Thalis"
//             ],
//             "avgRating": 3.9,
//             "veg": true,
//             "parentId": "366271",
//             "avgRatingString": "4.1",
//             "totalRatingsString": "21K+",
//             "sla": {
//               "deliveryTime": 26,
//               "lastMileTravel": 4.3,
//               "serviceability": "SERVICEABLE",
//               "slaString": "25-30 mins",
//               "lastMileTravelString": "4.3 km",
//               "iconType": "ICON_TYPE_EMPTY"
//             },
//           }
//     },
//     {
//         "info": {
//         "id": "38634",
//         "name": "Third Wave Coffee",
//         "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
//         "locality": "Koramangala",
//         "areaName": "Koramangala",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Beverages",
//           "Bakery",
//           "Continental"
//         ],
//         "avgRating": 4.4,
//         "parentId": "274773",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "6.0K+",
//         "sla": {
//           "deliveryTime": 22,
//           "lastMileTravel": 0.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "0.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//     }
//    },
//    {
//     "info": {
//     "id": "38634",
//     "name": "Third Wave Coffee",
//     "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
//     "locality": "Koramangala",
//     "areaName": "Koramangala",
//     "costForTwo": "₹400 for two",
//     "cuisines": [
//       "Beverages",
//       "Bakery",
//       "Continental"
//     ],
//     "avgRating": 4.4,
//     "parentId": "274773",
//     "avgRatingString": "4.4",
//     "totalRatingsString": "6.0K+",
//     "sla": {
//       "deliveryTime": 22,
//       "lastMileTravel": 0.9,
//       "serviceability": "SERVICEABLE",
//       "slaString": "20-25 mins",
//       "lastMileTravelString": "0.9 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
// }
//    },
//     ];

     // conditional rendering
    // if(listOfRestaurant.length == 0){
    //   return <Shimmer/>;
    // }

    return listOfRestaurant.length == 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"  value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        //Filter the restaurant cards and update the UI
                        // searchText
                        console.log(searchText);
                        
                       const filterRestaurant =  listOfRestaurant.filter((restaurant)=>{
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        

                       setFilteredRestaurant(filterRestaurant);
                       
                    }}                    
                    >Search</button>
                </div>
                <button 
                className="filter-btn" 
                onClick={
                      ()=>{
                         const filteredList = listOfRestaurant.filter((restaurant)=>{
                            return restaurant.info.avgRating > 4;
                        })
                        setListOfRestaurant(filteredList);
                      }
                    }>
                   Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                     filteredRestaurant.map((restaurant)=>{
                         return <Link to={"/restaurants/" + restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData = {restaurant}/></Link>
                     })
                }
            </div>

        </div>
    );
}

export default Body;