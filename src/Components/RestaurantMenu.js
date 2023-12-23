import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
      fetchMenu();
    },[]);

    const {resId} = useParams();
    console.log(resId);

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8158236&lng=80.9041817&restaurantId=" + resId);
        const json = await data.json();
        setResInfo(json);
        console.log(json);
    }

    if(resInfo === null)
    {
        return (<Shimmer />);
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;
    console.log(resInfo?.data?.cards[0]?.card?.card?.info);
    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    console.log(itemCards);
    
    return (
        <div className="menu">
           <h1>{name}</h1>
           <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
           <h2>Menu</h2>
           <ul>
           {itemCards.map((res) => (<li key={res.card.info.id}>{res.card.info.name} - Rs.{(res.card.info.price || res.card.info.defaultPrice)/100}</li>))}
           </ul>
        </div>
    );
};

export default RestaurantMenu;