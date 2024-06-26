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

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = resData.card.card?.info;

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId}
      />
      <h3> {name} </h3>
      <h4> {cuisines.join(",")} </h4>
      <h4>{costForTwo}</h4>
      <h4> {avgRating} stars </h4>
      <h4> {resData.card.card.info.sla.deliveryTime} minutes </h4>
    </div>
  )
}



const resList = [
  {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "410471",
        "name": "Dosa Republic",
        "cloudinaryImageId": "byfxaingdz90sqpwqfha",
        "locality": "Birla Colony",
        "areaName": "Phulwari Sharif",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "Pizzas",
          "Cakes & Pastries"
        ],
        "avgRating": 3.7,
        "veg": true,
        "parentId": "244977",
        "avgRatingString": "3.7",
        "totalRatingsString": "500+",
        "promoted": true,
        "adTrackingId": "cid=14128086~p=0~adgrpid=14128086#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=410471~eid=78f76fcf-a7a8-491c-b599-7a94c6a11fdb~srvts=1718637625432~collid=80424",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 8.2,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "8.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-17 22:00:00",
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
        "link": "swiggy://menu?restaurant_id=410471&source=collection&query=Dosa",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  },

  {
    "card": {
      "card": {
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
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "416917",
          "name": "Prabhuji Pure Food",
          "cloudinaryImageId": "q0fgqbukuv2xsgrxudzc",
          "locality": "Ashiana Nagar Main Road",
          "areaName": "Rukanpura",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Sweets",
            "Indian",
            "Snacks"
          ],
          "avgRating": 4.1,
          "veg": true,
          "parentId": "160307",
          "avgRatingString": "4.1",
          "totalRatingsString": "500+",
          "promoted": true,
          "adTrackingId": "cid=14005305~p=1~adgrpid=14005305#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=416917~eid=59004613-690b-4c89-a45c-eca3a6ce1dca~srvts=1718637625432~collid=80424",
          "sla": {
            "deliveryTime": 46,
            "lastMileTravel": 9.6,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "9.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-17 22:00:00",
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
          "aggregatedDiscountInfoV2": {

          },
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
          "link": "swiggy://menu?restaurant_id=416917&source=collection&query=Dosa",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "732567",
          "name": "Basant Vihar",
          "cloudinaryImageId": "220ebaa6b397acdef18ddf9b17725b11",
          "locality": "Fraser Road Area",
          "areaName": "Fraser Road Area",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "Chinese",
            "Snacks",
            "South Indian"
          ],
          "avgRating": 4.5,
          "parentId": "435068",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 57,
            "lastMileTravel": 2.9,
            "serviceability": "SERVICEABLE",
            "slaString": "55-60 mins",
            "lastMileTravelString": "2.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-17 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
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
              "textBased": {

              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                      "description": "Delivery!"
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
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
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
              "rating": "4.1",
              "ratingCount": "1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=732567&source=collection&query=Dosa",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "660800",
          "name": "Mishri",
          "cloudinaryImageId": "321023eadacec2b7ed1615299a753efc",
          "locality": "Exhibition Rd",
          "areaName": "Exhibition Road",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Chinese",
            "South Indian",
            "North Indian"
          ],
          "avgRating": 4,
          "veg": true,
          "parentId": "396683",
          "avgRatingString": "4.0",
          "totalRatingsString": "100+",
          "promoted": true,
          "adTrackingId": "cid=14041660~p=2~adgrpid=14041660#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=660800~eid=55fa1c54-cc1e-4633-9453-5224ce88ee54~srvts=1718637625432~collid=80424",
          "sla": {
            "deliveryTime": 41,
            "lastMileTravel": 4.4,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "4.4 km",
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

              },
              "textBased": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
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
          "link": "swiggy://menu?restaurant_id=660800&source=collection&query=Dosa",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "732582",
          "name": "Bansi Vihar Restaurant",
          "cloudinaryImageId": "e151d851f362be24799c22f45ffd50f5",
          "locality": "Dak Bunglow",
          "areaName": "Fraser Road",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "South Indian",
            "Chinese",
            "Thalis"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "41590",
          "avgRatingString": "4.4",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 53,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-17 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
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
              "textBased": {

              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                      "description": "Delivery!"
                    }
                  },
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
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
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
          "link": "swiggy://menu?restaurant_id=732582&source=collection&query=Dosa",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "88779",
          "name": "Dosa Plaza (Pure Veg)",
          "cloudinaryImageId": "tupgvlxmds77dhxaunkh",
          "locality": "Mithapur",
          "areaName": "Biscomaun Bhawan",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "South Indian"
          ],
          "avgRating": 4,
          "parentId": "8016",
          "avgRatingString": "4.0",
          "totalRatingsString": "5K+",
          "promoted": true,
          "adTrackingId": "cid=14328658~p=3~adgrpid=14328658#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=88779~eid=6cc38c4d-94ff-4329-ba02-cdce62551d1b~srvts=1718637625432~collid=80424",
          "sla": {
            "deliveryTime": 44,
            "lastMileTravel": 3.9,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "3.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-17 23:59:00",
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
              "textExtendedBadges": {

              },
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
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹199",
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
              "rating": "3.3",
              "ratingCount": "1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=88779&source=collection&query=Dosa",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "87984",
          "name": "Palsons",
          "cloudinaryImageId": "sxdvlku43zwsia8lryeh",
          "locality": "Fraser Road",
          "areaName": "Fraser Road Area",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Bakery",
            "Sweets"
          ],
          "avgRating": 4.1,
          "veg": true,
          "parentId": "154090",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-17 22:00:00",
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
          "aggregatedDiscountInfoV2": {

          },
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
              "textExtendedBadges": {

              },
              "textBased": {

              }
            }
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
          "link": "swiggy://menu?restaurant_id=87984&source=collection&query=Dosa",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "440857",
          "name": "Dosa by Dakshin",
          "cloudinaryImageId": "b21387f77624c8ead12c5f7a790b410c",
          "locality": "PC Colony",
          "areaName": "Kankarbagh",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "South Indian"
          ],
          "avgRating": 3.9,
          "parentId": "315610",
          "avgRatingString": "3.9",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-17 22:30:00",
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
              "textExtendedBadges": {

              },
              "textBased": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "35% OFF",
            "subHeader": "UPTO ₹175",
            "discountTag": "SAVE BIG"
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
          "link": "swiggy://menu?restaurant_id=440857&source=collection&query=Dosa",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "811281",
          "name": "Madras Dosa",
          "cloudinaryImageId": "a2e3a45fafa1d53b84a19cc4043e8aee",
          "locality": "Kankarbagh",
          "areaName": "Kadamkuan",
          "costForTwo": "₹149 for two",
          "cuisines": [
            "South Indian"
          ],
          "avgRating": 3.9,
          "parentId": "128849",
          "avgRatingString": "3.9",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-17 22:00:00",
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
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
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
          "isNewlyOnboarded": true,
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
          "link": "swiggy://menu?restaurant_id=811281&source=collection&query=Dosa",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  }
];





const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
        <RestaurantCard resData={resList[9]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
      </div>
    </div>
  )
}


const AppLayout = () => {
  return (<div className="app">
    <Header />
    <Body />

  </div>

  )
}



const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<AppLayout />);