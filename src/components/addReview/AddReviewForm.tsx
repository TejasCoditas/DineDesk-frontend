import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Modal from "../modal/Modal";
import AdminService from "../services/AdminService";
import style from "./AddReviewForm.module.scss";
import { useLocation, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  orderDishSchema,
  type Dishes,
  type OrderDishSchema,
} from "./AddReview.type";
import CustomerService from "../services/CustomerService";

const AddReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(orderDishSchema) });

  const [dishes, setDishes] = useState<any[]>([]);

  const { state } = useLocation();
  const navigate = useNavigate();
  const restaurant_id = state.restaurant_id;

  const getdishes = async () => {
    try {
      const response = await AdminService.getAllDishes(restaurant_id);
      setDishes(response);

      return response;
    } catch (error) {
      toast.error("Failed to load dish");
      console.error(error);
    }
  };

  const onOrderDishSubmit = async (data: OrderDishSchema) => {
    try {
      const response = await CustomerService.orderedDish(data);

      setTimeout(() => {
     
        toast.success("Thanks for Ordering");
      }, 1000);
      navigate("/restaurantreview", { state: { restaurant_id } });
      return response;
    } catch (error) {
   
      console.log(error);
    }
  };

  const addMoreClick = async (data: OrderDishSchema) => {
    try {
      const response = await CustomerService.orderedDish(data);

      toast.success("Dish Added SuccessFully");
      reset();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const onCloseClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (restaurant_id) getdishes();
  }, [restaurant_id]);
  return (
    <Modal>
      <form className={style.Form} onSubmit={handleSubmit(onOrderDishSubmit)}>
        <button className={style.CloseButton} onClick={onCloseClick}>
          ❌
        </button>
        <h2>What did you Ordered?</h2>

        <div>
          <select {...register("dish_id")} defaultValue="" required>
            <option value="">Select Dish</option>
            {dishes.map((dish: Dishes) => {
              return (
                <option key={dish.dish_id} value={dish.dish_id}>
                  {dish.dish_name}
                </option>
              );
            })}
          </select>
          {errors.dish_id && <p>{errors.dish_id.message}</p>}
          <input
            type="text"
            placeholder="Enter the quantity"
            required
            {...register("quantity")}
          />
          {errors.quantity && <p>{errors.quantity.message}</p>}
          <input
            type="number"
            placeholder="Rate item"
            {...register("dish_rating")}
          />
          {errors.dish_rating && <p>{errors.dish_rating.message}</p>}
          <h4>Rating: ⭐</h4>
          <div className={style.Button}>
            <button onClick={handleSubmit(addMoreClick)}>Add More</button>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </Modal>
  );
};

export default AddReviewForm;
