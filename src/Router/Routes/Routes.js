import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServices from "../../Pages/Home/CountryTour/AllServices";

import CountryTourCard from "../../Pages/Home/CountryTour/CountryTourCard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[{
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/services",
        element:<AllServices></AllServices>
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/signup",
        element:<Signup></Signup>,
      },
    
    ]
    },
  ]);
  
  export default router;