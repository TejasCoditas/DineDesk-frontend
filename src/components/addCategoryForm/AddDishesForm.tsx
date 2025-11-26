import { useForm } from "react-hook-form";

import Modal from "../modal/Modal";
import style from "./AddCategoryForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { dishesSchema, type DishesSchema } from "./AddCategoryForm.type";
import { toast, ToastContainer } from "react-toastify";

import { useLocation } from "react-router";
import AdminService from "../services/AdminService";
import { useEffect, useState } from "react";

const AddDishesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(dishesSchema) });

  // const navigate = useNavigate();
  const { state } = useLocation();

  const [categories, setCategories] = useState<any[]>([]);

  const restaurant_id = state.id;

  const addMoreClick = async (data: DishesSchema) => {
    try {
      const response = await AdminService.addDishes(data, data.category_id);
      console.log(response);

      toast.success("Dish Added SuccessFully");
      reset();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getcategory = async () => {
    try {
      const response = await AdminService.getAllCategories(restaurant_id);

      setCategories(response.All_Categories);
      return response;
    } catch (error) {
      toast.error("Failed to load categories");
      console.error(error);
    }
  };

  useEffect(() => {
    if (restaurant_id) getcategory();
  }, [restaurant_id]);

  const onSubmitDish = async (data: DishesSchema) => {
    try {
      console.log("submitted dish");
      const response = await AdminService.addDishes(data, data.category_id);
      toast.success("Submiited Dishes Successfully");

      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal>
      <form className={style.Form} onSubmit={handleSubmit(onSubmitDish)}>
        <h2>Add Dishes</h2>
        <select {...register("category_id")} defaultValue="">
          <option value="">Select Category</option>
          {categories.map((category) => {
            return (
              <option key={category.category_id} value={category.category_id}>
                {category.category_name}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Enter the Dish Name"
          {...register("dish_name")}
        />
        <input
          type="number"
          placeholder="Enter the Price"
          {...register("price", { valueAsNumber: true })}
        />
        <div className={style.Button}>
          <button onClick={handleSubmit(addMoreClick)}>Add More</button>
          <button type="submit">Submit</button>
        </div>
        <span>
          {
            (errors.category_id?.message,
            errors.dish_name?.message,
            errors.price?.message)
          }
        </span>
      </form>
      <ToastContainer />
    </Modal>
  );
};

export default AddDishesForm;
