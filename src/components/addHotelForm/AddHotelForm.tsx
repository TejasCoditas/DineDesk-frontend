import { useForm } from "react-hook-form";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import style from "./AddHotelForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type Schema } from "./AddHotelForm.type";
import OwnerService from "../services/OwnerService";
import { useNavigate } from "react-router";

const AddHotelForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const navigate = useNavigate();
  const onAddHotelForm = async (data: Schema) => {
    try {
      const response = await OwnerService.addHotel(data);

      navigate("/addcategory", { state: { id: response.restaurant_id } });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const onError = (errors: any) => {
    console.log("Validation errors:", errors);
  };

  const onCloseClick = () => {
    navigate(-1);
  };
  return (
    <Modal>
      <form
        className={style.Form}
        onSubmit={handleSubmit(onAddHotelForm, onError)}
      >
        <button className={style.CloseButton} onClick={onCloseClick}>
          ❌
        </button>
        <h2>Add Hotel</h2>
        <input
          type="text"
          placeholder="Hotel Name"
          {...register("restaurant_name")}
        />
        <input type="text" placeholder="Address " {...register("address")} />
        <input type="text" placeholder="Contact " {...register("contact")} />
        <input
          type="text"
          placeholder="Enter Image URL "
          {...register("image_url")}
        />

        <Button type="submit" onClick={() => console.log("submitted")}>
          Add
        </Button>
      </form>
    </Modal>
  );
};

export default AddHotelForm;
