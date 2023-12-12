import { CON_URL } from "../utils/constants";



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
    console.log(props);
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt= "res-logo" src={CON_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRatingString} Rating</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;