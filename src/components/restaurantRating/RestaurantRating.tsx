import { useForm } from "react-hook-form";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import style from "./RestaurantRating.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  restaurantRatingSchema,
  type RestaurantRating,
} from "./RestaurantRating.type";
import CustomerService from "../services/CustomerService";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

const ResaturantRating = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(restaurantRatingSchema),
  });
  const { state } = useLocation();
  const restaurant_id = state.restaurant_id;
  const navigate = useNavigate();

  const onResaturantRateSubmit = async (data: RestaurantRating) => {
    try {
      const response = await CustomerService.sendRestaurantRating(
        data,
        restaurant_id
      );
      console.log(data);
      setTimeout(() => {
        toast.success("Rating Done Sucessfully");
        toast.error(response.data.detail)
      }, 1000);
      navigate(-2);

      return response;
    } catch (error) {
      toast.error("Failed to submit");
      console.log(error);
    }
  };
  return (
    <Modal>
      <form
        className={style.Form}
        onSubmit={handleSubmit(onResaturantRateSubmit)}
      >
        <h2>Restaurant Rating ⭐</h2>

        <input
          type="number"
          placeholder="Ambience Rating"
          {...register("ambience_rating")}
        ></input>
        {errors.ambience_rating && <p>{errors.ambience_rating.message}</p>}

        <input
          type="number"
          placeholder="Service Rating"
          {...register("service_rating")}
        ></input>
        {errors.service_rating && <p>{errors.service_rating.message}</p>}

        <input
          type="number"
          placeholder="Food Rating"
          {...register("food_rating")}
        ></input>
        {errors.food_rating && <p>{errors.food_rating.message}</p>}

        <input
          type="number"
          placeholder="Cleaniness Rating"
          {...register("cleanliness_rating")}
        ></input>

        {errors.cleanliness_rating && (
          <p>{errors.cleanliness_rating.message}</p>
        )}

        <input
          type="text"
          placeholder="Comments Rating"
          {...register("comment")}
        ></input>

        <Button type="submit">Submit</Button>
      </form>
      <ToastContainer />
    </Modal>
  );
};

export default ResaturantRating;
