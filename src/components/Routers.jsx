import React from "react";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import { SideBar } from "./SideBar";
import { PublishTweet } from "./PublishTweet";
import { DisplayTweets } from "./DisplayTweets";

const MainRouter = ({childern}) => {


    const routesArray = createBrowserRouter([
        {
            path:"/login",
            element:<h1>LOGIN</h1>,
            errorElement:<h1>ERROR</h1>
        },
        
        {
            path:"/home",
            element:<SideBar/>,
            errorElement:<h1>ERROR</h1>,
            children:[
                {
                    path:"publish",
                    element:<PublishTweet/>,
                    errorElement:<h1>ERROR</h1>
                },
                {
                    path:"display",
                    element :<DisplayTweets/>,
                    errorElement:<h1>ERROR</h1>
                }
            ]
        }
    ])


    return(
        <React.Fragment>
            <RouterProvider router = {routesArray}>{childern}</RouterProvider>
        </React.Fragment>
    )

}

export default MainRouter;