import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()  =>{
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    console.log("Header render");

    //if no dependency array => useEffect is called on every render
    //if dependency array is empty = [] => useEffect is called on initial render(just once)
    //if dependency array is [btnName] => called everytime btnName is updated
    useEffect(() => {
     console.log("useEffect called");   
    },[btnName]);
    
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg px-4 sm:bg-yellow-50 lg:bg-green-50">
           <div className="w-56">
           {/* // Never ever hardcode url's in your code  */}
              <img className= "logo" src= {LOGO_URL} /> 
           </div>
           <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    Online Status: {onlineStatus === true ? "✅" : "🔴"}
                </li>
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4">Cart</li>
                <button className="login" onClick={() =>{
                    btnName === "Login" ? setBtnName("Logout"): setBtnName("Login");
                }}>{btnName}</button>
            </ul>
           </div>
        </div>
    )
};

export default Header;