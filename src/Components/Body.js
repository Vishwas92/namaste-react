import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from 'react'
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import { Link } from "react-router-dom";

//imp information regarding the useState hooks is never use useState Hook outside a functional component
//never create useState inside an if else this can create inconsistencies in your code

//not using keys (not acceptable) <<<< index as a key(last resort) <<<<<<<<<<<<<<<<< unique id as a key (best practice)
const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestrant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const[searchText, setSearchText] = useState("");

  //Whenver state variable update, react triggers a reconcilliation cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
     const d =  fetchData();    
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);

    const json = await data.json();
    //Optional Chaining
    //console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestrant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  //Conditional Rendering
    return listOfRestaurants.length === 0 ? <Shimmer /> :
        (<div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
                <button onClick={() => {
                  let filteredRestaurants = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurant(filteredRestaurants);
                  console.log(searchText);}}>Search</button>
              </div>
                <button className="filter-btn" onClick={() => {
                  console.log(listOfRestaurants);
                  let filteredList = listOfRestaurants.filter(restaurant => restaurant?.info?.avgRating > 4);
                  console.log(filteredList);
                  setFilteredRestaurant(filteredList);
                  }} onMouseOver={() => {console.log("Button is hovered")}}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* //Props are arguments to a functions */}
                {filteredRestaurant.map((res) => (<Link to={"/restaurants/" + res.info.id} key= {res.info.id}><RestaurantCard resData = {res} /></Link>))}
            </div>
        </div>
    );
};

export default Body;
