import type { OrderDishSchema } from "../addReview/AddReview.type";
import type { RestaurantRating } from "../restaurantRating/RestaurantRating.type";
import type { Schema } from "../signup/Signup.type";
import { axiosInstance } from "./axiosInstance";

export const signUpUsers = async (user: Schema) => {
  try {
    const { data } = await axiosInstance.post(
      "/register/signup/customer",
      user
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const loginUsers = async (user: Schema) => {
  try {
    const { data } = await axiosInstance.post("register/login", user);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getHotelData = async () => {
  try {
    const { data } = await axiosInstance.get("/all_restaurants", {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getReviewsByHotel = async (restaurant_id: number) => {
  const { data } = await axiosInstance.get(
    `customer/all_reviews?restaurant_id=${restaurant_id}`,
    {
      params: { restaurant_id: restaurant_id },

      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    }
  );
  return data;
};

export const orderedDish = async (formdata: OrderDishSchema) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axiosInstance.post("/order/place_order", formdata, {
      headers: {
        "ngrok-skip-browser-warning": "true",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error)
  }
};

export const getOrderDishes = async () => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axiosInstance.get("/order/all_order_history", {
      headers: {
        "ngrok-skip-browser-warning": "true",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const sendRating = async (rating:number,dish_id:number) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axiosInstance.post("/customer/review_dish", {rating,dish_id}, {
    

      headers: {
        "ngrok-skip-browser-warning": "true",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error)
  }
};

export const sendRestaurantRating = async (formdata:RestaurantRating,id:number) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axiosInstance.post(`/customer/review_restaurant?restuarant_id=${id}`, formdata, {
        //  params: { id },
      headers: {
        "ngrok-skip-browser-warning": "true",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error)
  }
};

export default {
  signUpUsers,
  loginUsers,
  getHotelData,
  getReviewsByHotel,
  orderedDish,
  getOrderDishes,
  sendRating,
  sendRestaurantRating
};
