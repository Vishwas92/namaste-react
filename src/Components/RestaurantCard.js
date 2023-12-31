import { CON_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const styleCard = { backgroundColor: "#f0f0f0" };
// InJavascript ?. is called as optional chaining
const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        name,
        cloudinaryImageId,
        avgRatingString,
        cuisines,
        costForTwo
    } = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    //console.log(props);
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="res-logo rounded-lg" alt= "res-logo" src={CON_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRatingString} Rating</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

//Higher Order Component

//input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    console.log(RestaurantCard);
    return (props) => {
        return(
            <div>
                <label className="absolute m-2 p-2 bg-black text-white rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
}

export default RestaurantCard;