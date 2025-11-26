import { useForm } from "react-hook-form";
import Modal from "../modal/Modal";
import style from "./AddCategoryForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoryschema, type CategorySchema } from "./AddCategoryForm.type";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import OwnerService from "../services/OwnerService";

const AddCategoryForm = () => {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(categoryschema),
  });
  const navigate = useNavigate();
  const { state } = useLocation();

  const id = state.id;
  console.log("id", id);

  const addMoreClick = async (data: CategorySchema) => {
    const response = OwnerService.addCategory(data, id);

    toast.success("Category Added SuccessFully");

    reset();
    return response;
  };

  const onSubmitCategory = async (data: CategorySchema) => {
    try {
      const response = OwnerService.addCategory(data, id);
      toast.success("Submiited Category Successfully");
      navigate("/adddish", { state: { id } });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal>
      <form className={style.Form} onSubmit={handleSubmit(onSubmitCategory)}>
        <h2>Add Category for Menu</h2>
        <input
          type="text"
          placeholder="Enter Category"
          {...register("category_name")}
        />
        <div className={style.Button}>
          <button type="button" onClick={handleSubmit(addMoreClick)}>
            Add More
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </Modal>
  );
};

export default AddCategoryForm;
