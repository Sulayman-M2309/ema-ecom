import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Dashboard from "../pages/Dashboard/Dashboard";
import Product from "../pages/Product/Product";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/EditProfile/EditProfile";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
           // {
            //     path : "/products",
            //     element : <Products></Products>,
            //     loader : ()=> fetch(`https://dummyjson.com/products`)
                
            // },

            // {
            //     path : "/products",
            //     element : <Products></Products>,
            //     loader : async ()=> {
            //       const res =  await fetch(`https://dummyjson.com/products`)
            //       console.log(res);
            //       return res
            //     }
                
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "/products/:id",
        element: <Product></Product>,
        loader : (object)=>fetch(`https://dummyjson.com/products/${object.params.id}`)
      },
     
      {
        path : "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children : [
            {
                path : "/dashboard",
                element :<Dashboard></Dashboard>
            },
            {
                path : "/dashboard/profile",
                element :<Profile></Profile>
            },
            {
                path : "/dashboard/editProfile",
                element :<EditProfile></EditProfile>
            },
        ]
    }
    ],
  },
]);

export default myCreatedRoute;
