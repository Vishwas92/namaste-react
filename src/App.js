import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header"
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";






//not using keys (not acceptable) <<<< index as a key(last resort) <<<<<<<<<<<<<<<<< unique id as a key (best practice)

const AppLayout = () =>{
    return (
        <div className="app">
         <Header />
         <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
// {Config Driven UI}
// Useful in frontend system design interviews
// Building our frontend application based on the data driven