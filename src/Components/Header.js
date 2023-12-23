import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
const Header = ()  =>{
    const [btnName, setBtnName] = useState("Login");
    console.log("Header render");

    //if no dependency array => useEffect is called on every render
    //if dependency array is empty = [] => useEffect is called on initial render(just once)
    //if dependency array is [btnName] => called everytime btnName is updated
    useEffect(() => {
     console.log("useEffect called");   
    },[btnName]);
    
    return (
        <div className="header">
           <div className="logo-container">
           {/* // Never ever hardcode url's in your code  */}
              <img className= "logo" src= {LOGO_URL} /> 
           </div>
           <div className="nav-items">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>Cart</li>
                <button className="login" onClick={() =>{
                    btnName === "Login" ? setBtnName("Logout"): setBtnName("Login");
                }}>{btnName}</button>
            </ul>
           </div>
        </div>
    )
};

export default Header;