import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header"
import Body from "./Components/Body";






//not using keys (not acceptable) <<<< index as a key(last resort) <<<<<<<<<<<<<<<<< unique id as a key (best practice)

const AppLayout = () =>{
    return (
        <div className="app">
         <Header />
         <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
// {Config Driven UI}
// Useful in frontend system design interviews
// Building our frontend application based on the data driven