import type { CategorySchema } from "../addCategoryForm/AddCategoryForm.type";
import type { Schema } from "../addHotelForm/AddHotelForm.type";
import { axiosInstance } from "./axiosInstance";

export const addHotel = async (formdata: Schema) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No valid token found");
    }

    const { data } = await axiosInstance.post("/add_restaurant", formdata, {
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

export const addCategory = async (
  category: CategorySchema,
  restaurand_id: number
) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axiosInstance.post(
      `/add_category?restaurant_id=${restaurand_id}`,
      category,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {}
};

export default {
  addHotel,
  addCategory,
};
