import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";



//not using keys (not acceptable) <<<< index as a key(last resort) <<<<<<<<<<<<<<<<< unique id as a key (best practice)
const Body = () => {
    const listOfRestaurants = [
        {
            "info": {
              "id": "78857",
              "name": "Domino's Pizza",
              "cloudinaryImageId": "wv3a6ninjnk8ufpvqb5s",
              "locality": "Ashiyana",
              "areaName": "Aashiana",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
              ],
              "avgRating": 4.2,
              "feeDetails": {
                "restaurantId": "78857",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 2000
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 2000
              },
              "parentId": "2456",
              "avgRatingString": "4.2",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-13 02:55:00",
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
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
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
                
              }
            }
    }];
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {console.log("Button Clicked")}} onMouseOver={() => {console.log("Button is hovered")}}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* //Props are arguments to a functions */}
                {resObj.map((res, index) => (<RestaurantCard key = {index} resData = {res} />))}
            </div>
        </div>
    );
};

export default Body;
