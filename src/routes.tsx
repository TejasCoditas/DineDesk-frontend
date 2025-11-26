import { createBrowserRouter } from "react-router";
import App from "./App";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";
import HotelDetail from "./components/hotelDetail/HotelDetail";
import OwnerScreen from "./components/ownerScreen/OwnerScreen";
import AdminScreen from "./components/adminScreen/AdminScreen";
import CustomerScreen from "./components/reviewerScreen/ReviewerScreen";
import AddOwnerForm from "./components/addOwnerForm/AddOwnerForm";
import AddHotelForm from "./components/addHotelForm/AddHotelForm";
import Logout from "./components/logout/Logout";
import AddCategoryForm from "./components/addCategoryForm/AddCategoryForm";
import AddDishesForm from "./components/addCategoryForm/AddDishesForm";
import AddReviewForm from "./components/addReview/AddReviewForm";
import ResaturantRating from "./components/restaurantRating/RestaurantRating";
import Revenue from "./components/revenue/Revenue";
import MyRestaurant from "./components/myRestaurant/MyRestaurant";


export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      
      },
    ],
  },
  {
    path: "user",
    element: <CustomerScreen />,
    
  },
  {
    path: "hotel/:id",
    element: <HotelDetail />,
  },
  {
    path: "owner",
    element: <OwnerScreen />,
  },

  {
    path: "addhotel",
    element: <AddHotelForm />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
  {
    path: "admin",
    element: <AdminScreen />,
  },
  {
    path: "addOwner",
    element: <AddOwnerForm />,
  },

  {
    path:'addcategory',
    element:<AddCategoryForm/>
  },
  {
    path:'adddish',
    element:<AddDishesForm/>
  },
    {
    path: "reviewform",
    element: <AddReviewForm />,
    
  },
    {
    path: "restaurantreview",
    element: <ResaturantRating/>,
    
  },

  {
    path:'revenue',
    element:<Revenue/>
  },
    {
    path:'myrestaurant',
    element:<MyRestaurant/>
  }
]);
