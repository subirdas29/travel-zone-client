import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blogs from "../../Pages/Blogs/Blogs";
import AllCountryTour from "../../Pages/Home/CountryTour/AllCountryTour";
import IndividualCountrytour from "../../Pages/Home/CountryTour/IndividualCountrytour";
import ReviewSection from "../../Pages/Home/CountryTour/ReviewSection/ReviewSection";



import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ReviewEdit from "../../Pages/ReviewEdit/ReviewEdit";
import Signup from "../../Pages/Signup/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


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
        element:<AllCountryTour></AllCountryTour>,
        loader:()=>fetch('https://travel-zone-server-subirdas29.vercel.app/allcountries')
      },
      {
        path:"/services/allcountries/:id",
        element:<IndividualCountrytour></IndividualCountrytour>,
        loader:({params})=>fetch(`https://travel-zone-server-subirdas29.vercel.app/services/allcountries/${params.id}`)
      },

      {
        path:"/services/allcountries/:id",
        element:<ReviewSection></ReviewSection>,
        loader:({params})=>fetch(`https://travel-zone-server-subirdas29.vercel.app/services/allcountries/${params.id}`)
      },
      {
        path:"/myreviews/:id",
        element:<ReviewEdit></ReviewEdit>,
        loader:({params})=>fetch(`https://travel-zone-server-subirdas29.vercel.app/allreviews/${params.id}`)
      },


      {
        path:'/myreviews',
        element:
        <PrivateRouter>
        <MyReviews></MyReviews>
        </PrivateRouter>
      },
      {
        path:'/addservices',
        element:
        <PrivateRouter>
        <AddServices></AddServices>
        </PrivateRouter>
      },

      {
        path:'/blogs',
        element:<Blogs></Blogs>
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