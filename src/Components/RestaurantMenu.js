import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "./../utils/useRestrauntMenu";
import RestaurantCategory from './RestaurantCategories';
import {useState} from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    console.log(resInfo);

    if(resInfo === null)
    {
        return (<Shimmer />);
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;
    console.log(resInfo?.data?.cards[0]?.card?.card?.info);
    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    //console.log(itemCards);
    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return (
        <div className="menu">
           <h1 className="text-center m-6 font-bold text-xl">{name}</h1>
           <p className="text-center font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>
           <ul className="text-center">
            {categories.map((category, index) => (
                <li key={index}><RestaurantCategory  data={category.card.card} showItems={index === showIndex && true} setShowIndex={() => { return setShowIndex(index) }}/></li>
            ))}
           </ul>
        </div>
    );
};

export default RestaurantMenu;