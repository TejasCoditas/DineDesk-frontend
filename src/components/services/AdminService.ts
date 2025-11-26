import type { DishesSchema } from "../addCategoryForm/AddCategoryForm.type";
import type { Schema } from "../login/Login.type";
import { axiosInstance } from "./axiosInstance";

const addOwners = async (owner: Schema) => {
  try {
    const { data } = await axiosInstance.post("/registersignup/owner", owner, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getAllCategories = async (restaurant_id: number) => {
  try {
    const { data } = await axiosInstance.get(
      `/all_categories?restaurant_id=${restaurant_id}`,
      {
        params: { restaurant_id: restaurant_id },

        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    return data;
  } catch (error) {}
};

const addDishes = async (formdata: DishesSchema, category_id: number) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axiosInstance.post(
      `/add_dishes?category_id=${category_id}`,
      formdata,
      {
        params: { category_id: category_id },

        headers: {
          "ngrok-skip-browser-warning": "true",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllDishes = async (restaurant_id: number) => {
  try {
    const { data } = await axiosInstance.get("/order/all_dishes", {
      params: { restaurant_id },
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllRevenue = async () => {
  try {
    const { data } = await axiosInstance.get("/order/all_restaurant_revenue", {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMyRestaurants = async () => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axiosInstance.get("/owner_restaurants", {
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

export default {
  addOwners,
  getAllCategories,
  addDishes,
  getAllDishes,
  getAllRevenue,
  getMyRestaurants
};
