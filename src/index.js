import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import AboutUs from "./components/AboutUs"
import Error from './components/Error';
import Instamart from './components/Instamart'
import Blogs from "./components/Blogs"
import Body from './components/Body';
import IndividualRestaurantDetails from './components/IndividualRestaurantDetails';
import NestedRoutes from './components/NestedRoutes';
import ClassNestedRoutes from './components/ClassNestedRoutes';
import Shimmer from './components/Shimmer';



const Grocery = lazy(() => import("./components/Grocery")); 



const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <App />,
      errorElement:<Error />,
      children:[
        {
            path:"/",
            element:<Body 
          /> 
        },
        {
            path:"/instamart",
            element:<Instamart />,
            children:[
                {
                    path:"nestedRoute",
                    element:<NestedRoutes />
                },
                {
                    path:"classnestedroutes",
                    element:<ClassNestedRoutes name={"Sachin"} />
                },
            ],
        },
        {
            path:"/about",
            element:<AboutUs />
              
        },
        {
            path:"/blogs",
            element:<Blogs />
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<Shimmer />}>
                        <Grocery />
                    </Suspense>
        }
      
      
      ]
    },

    {
        path:"/restaurant/:resId",
        element:<IndividualRestaurantDetails />
    },
 
    ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={appRouter} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
