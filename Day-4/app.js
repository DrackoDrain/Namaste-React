import { React } from "react";
import ReactDOM from "react-dom/client";

/**
 * Header 
 *  - Logo 
 *  - Nav Items 
 * Body 
 *  - Search 
 *  - RestaurantContainer 
 *    - RestaurantCard
 *      -rating 
 *      -menu
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
                <img 
                className="logo" src=" https://reactjs.org/logo-og.png" alt="React Image" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US </li>
                    <li>Cart</li>
                    <li>Contact US </li>
                </ul>
            </div>

        </div>

    )
}

const RestaurantCard = ({resData}) =>{
    return (
        <div className="res-card">
        <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ddn26k6s0kifkmyiesmd" }
        />
        {/* <div><h3>Hotel Taj </h3></div> */}
        <h4> {resData.info.name} </h4>
        <h4> {resData.info.cuisines} </h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4> {resData.info.avgRating} </h4>
        <h4> {resData.info.deliveryTime} </h4>
        </div>
    )
}



const resObj = {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "132703",
      "name": "Dosa Station",
      "cloudinaryImageId": "ddn26k6s0kifkmyiesmd",
      "locality": "P C Colony",
      "areaName": "Kankarbagh",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 3.6,
      "veg": true,
      "parentId": "19938",
      "avgRatingString": "3.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-17 23:00:00",
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
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
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
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=132703&source=collection&query=Dosa",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  }
 




const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resData={resObj} />
              
                </div>   
            
        </div>

    )
}


const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Body/>
   
         </div>
    
    )
}



const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<AppLayout/>);