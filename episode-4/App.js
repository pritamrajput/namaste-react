import React from "react";
import ReactDOM from "react-dom/client";


// Planning before making an application
/**
 * Header
 *  - logo
 *  - nav items
 * 
 * Body
 *  - search component
 *  - Restaurant component
 *    - Restaurant cards
 *      - image
 *      - Name of restaurant, star rating, cuisines, delivery time..
 * 
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://thumbs.dreamstime.com/b/fast-delivery-food-logo-vector-337616130.jpg?w=768"></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

// const styleCard = {
//     backgroundColor:"#f0f0f0",
// }

const RestaurantCard = (props) => {
    console.log(props);
    
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0" }}>
           <img 
           className="res-logo"
           src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
           alt="res-logo"></img>
           <h3>{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{avgRating} stars</h4>
           <h4>{costForTwo}</h4>
           <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

const resList =  [
    {
      "info": {
        "id": "241027",
        "name": "Namaste",
        "cloudinaryImageId": "dtcwa1rxdskp3crqvpr3",
        "locality": "3rd Sector",
        "areaName": "Hsr Layout",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "South Indian",
          "Chinese",
          "Thalis"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "366271",
        "avgRatingString": "4.1",
        "totalRatingsString": "21K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-26 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/namaste-3rd-sector-hsr-layout-rest241027",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "38634",
        "name": "Third Wave Coffee",
        "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Bakery",
          "Continental"
        ],
        "avgRating": 4.4,
        "parentId": "274773",
        "avgRatingString": "4.4",
        "totalRatingsString": "6.0K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-26 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              "description": "Delivery!"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.4",
            "ratingCount": "4.8K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/third-wave-coffee-koramangala-rest38634",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "711368",
        "name": "Salad Days",
        "cloudinaryImageId": "cfa1123ebf17413dc7d0a80c7361fab3",
        "locality": "BTM Layout",
        "areaName": "HSR",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Salads"
        ],
        "avgRating": 4.4,
        "parentId": "796",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.4K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-26 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/salad-days-btm-layout-hsr-rest711368",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "263485",
        "name": "Chaayos Chai+Snacks=Relax",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_263485.JPG",
        "locality": "Kormangala 8th Block",
        "areaName": "Kormangala",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets"
        ],
        "avgRating": 4.4,
        "parentId": "281782",
        "avgRatingString": "4.4",
        "totalRatingsString": "3.6K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-26 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              "description": "Delivery!"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹169"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-8th-block-kormangala-rest263485",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "739118",
        "name": "Seoul Burgers & Shakes",
        "cloudinaryImageId": "d6a8cb3cae80e0a496e2d7fdbbbc1adb",
        "locality": "Industrial Layout ward",
        "areaName": "Kormangla",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Burgers",
          "Bubble Tea",
          "Beverages",
          "Fast Food",
          "Street Food"
        ],
        "avgRating": 4.1,
        "parentId": "372969",
        "avgRatingString": "4.1",
        "totalRatingsString": "297",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-01 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/seoul-burgers-and-shakes-industrial-layout-ward-kormangla-rest739118",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "255801",
        "name": "Great Indian Khichdi by EatFit",
        "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Home Food",
          "Indian",
          "North Indian",
          "Healthy Food",
          "Snacks",
          "Desserts",
          "Rajasthani",
          "South Indian",
          "Maharashtrian",
          "Sweets"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "319582",
        "avgRatingString": "4.3",
        "totalRatingsString": "3.7K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-26 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Vegan.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Vegan.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹89"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/great-indian-khichdi-by-eatfit-6th-block-koramangala-rest255801",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "107443",
        "name": "Lo! - Low Carb and Keto Foods",
        "cloudinaryImageId": "o8t0w5gdlujpigauaflw",
        "locality": "HSR Layout",
        "areaName": "HSR SECTOR 6",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Healthy Food",
          "Keto",
          "Continental"
        ],
        "avgRating": 4.3,
        "parentId": "8282",
        "avgRatingString": "4.3",
        "totalRatingsString": "6.6K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-26 01:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/lo-low-carb-and-keto-foods-hsr-layout-hsr-sector-6-rest107443",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "288678",
        "name": "Home Plate by EatFit",
        "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Home Food",
          "Healthy Food",
          "Indian",
          "Punjabi",
          "South Indian",
          "Rajasthani",
          "Maharashtrian",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "parentId": "301197",
        "avgRatingString": "4.0",
        "totalRatingsString": "1.6K+",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-26 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹89"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/home-plate-by-eatfit-6th-block-koramangala-rest288678",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "558763",
        "name": "HRX by EatFit",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/27b3c3e0-1215-45b8-9807-81ea0ea98b0a_558763.jpg",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Burgers"
        ],
        "avgRating": 4.6,
        "parentId": "335529",
        "avgRatingString": "4.6",
        "totalRatingsString": "307",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "10-15 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-26 01:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹149"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/hrx-by-eatfit-6th-block-koramangala-rest558763",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "739117",
        "name": "Boba Bhai",
        "cloudinaryImageId": "b0471f6ae8ec204260755f55d35c626e",
        "locality": "Industrial Layout ward",
        "areaName": "Kormangla",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Fast Food",
          "Street Food"
        ],
        "avgRating": 4.1,
        "parentId": "361235",
        "avgRatingString": "4.1",
        "totalRatingsString": "495",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-01 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹139"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/boba-bhai-industrial-layout-ward-kormangla-rest739117",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "733092",
        "name": "Caterspoint",
        "cloudinaryImageId": "be3c347a3ff9e54393083264ebb9228f",
        "locality": "Hosur Road",
        "areaName": "HSR",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Salads",
          "Healthy food",
          "Snacks",
          "pastas",
          "Lebanese",
          "Mexican",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "11011",
        "avgRatingString": "4.4",
        "totalRatingsString": "647",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-26 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/caterspoint-hosur-road-hsr-rest733092",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "307540",
        "name": "SMOOR",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/213db25c-0384-4c3f-8021-78c81c655b61_307540.jpg",
        "locality": "HSR Layout",
        "areaName": "HSR Layout",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Desserts",
          "Bakery"
        ],
        "avgRating": 4.4,
        "parentId": "475296",
        "avgRatingString": "4.4",
        "totalRatingsString": "2.3K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-26 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.6",
            "ratingCount": "32"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/smoor-hsr-layout-rest307540",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "4046",
        "name": "Sri Udupi Park",
        "cloudinaryImageId": "tfbnpd65irvhp9iwhbtk",
        "locality": "Residency Road",
        "areaName": "Central Bangalore",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese",
          "Chaat",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "4284",
        "avgRatingString": "4.4",
        "totalRatingsString": "33K+",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 5.6,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "5.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-25 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "ABOVE ₹2000",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "1.0K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/sri-udupi-park-residency-road-central-bangalore-rest4046",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "8725",
        "name": "Krispy Kreme",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/19/91d22be8-ea60-46bd-b71f-355d495b10ee_8725.jpg",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹170 for two",
        "cuisines": [
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.6,
        "parentId": "570",
        "avgRatingString": "4.6",
        "totalRatingsString": "3.7K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-25 23:50:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "37K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/krispy-kreme-koramangala-rest8725",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "747260",
        "name": "Green Cravings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/6f01ec64-58f3-4345-afbc-3ee8483d4644_747260.JPG",
        "locality": "EJIPURA",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Healthy Food",
          "Grill"
        ],
        "avgRating": 3.9,
        "parentId": "8660",
        "avgRatingString": "3.9",
        "totalRatingsString": "13",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-25 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/green-cravings-ejipura-koramangala-rest747260",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "776753",
        "name": "Blue Tokai Coffee Roasters",
        "cloudinaryImageId": "1a0521375f07155eda2f1ed263206831",
        "locality": "1St Cross Rd",
        "areaName": "Koramangala",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Cafe",
          "Coffee",
          "Beverages"
        ],
        "avgRating": 4.8,
        "parentId": "2682",
        "avgRatingString": "4.8",
        "totalRatingsString": "60",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-25 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "ABOVE ₹390",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/blue-tokai-coffee-roasters-1st-cross-rd-koramangala-rest776753",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "125956",
        "name": "Glen's Bakehouse",
        "cloudinaryImageId": "whfviizdgvwg0uwfk8dy",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Desserts",
          "Bakery",
          "Beverages",
          "Continental",
          "Italian"
        ],
        "avgRating": 4.4,
        "parentId": "3220",
        "avgRatingString": "4.4",
        "totalRatingsString": "9.3K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-26 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "4.3K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/glens-bakehouse-koramangala-rest125956",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "381854",
        "name": "ITC Sunfeast Baked Creations",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/96ea279d-8e6b-48bd-a309-f96f80698c9d_381854.jpg",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Continental",
          "Cafe",
          "Snacks"
        ],
        "avgRating": 4.6,
        "parentId": "12285",
        "avgRatingString": "4.6",
        "totalRatingsString": "903",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-26 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.4",
            "ratingCount": "31"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/itc-sunfeast-baked-creations-koramangala-rest381854",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "381853",
        "name": "ITC Master Chef Creations",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/3/5f883c8c-ba8b-4656-92fb-eb27abd48e2e_381853.JPG",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹650 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Kebabs",
          "Mediterranean",
          "Mughlai"
        ],
        "avgRating": 4.4,
        "parentId": "11992",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.9K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-26 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png",
              "description": "Delivery!"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "2.4",
            "ratingCount": "13"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/itc-master-chef-creations-koramangala-rest381853",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "263606",
        "name": "Pure Veg Meals by Lunchbox",
        "cloudinaryImageId": "huy1jyi4fekmblf9jxpw",
        "locality": "NGK Complex",
        "areaName": "BTM 1st Stage",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "21938",
        "avgRatingString": "4.1",
        "totalRatingsString": "194",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-25 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-000fbaab-101a-4b37-a975-d78d336be078"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/pure-veg-meals-by-lunchbox-ngk-complex-btm-1st-stage-rest263606",
        "type": "WEBLINK"
      }
    }
  ]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                     resList.map((restaurant)=>{
                         return <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
                     })
                }
            </div>

        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
           <Header/>
           <Body/>
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); To render react element
root.render(<AppLayout/>);