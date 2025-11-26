import { useNavigate } from "react-router";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import style from "./AddOwnerForm.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../signup/Signup.type";

import AdminService from "../services/AdminService";
import type { Schema } from "./AddOwnerForm.type";
import { toast, ToastContainer } from "react-toastify";


const AddOwnerForm = () => {

  const{register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(schema)})
    const navigate=useNavigate()
  const onCloseClick = () => {
navigate('/admin')
  };


  const onSubmitOwner=async(data:Schema)=>
  {
    try {
      console.log(data)
      const response=await AdminService.addOwners(data)
      console.log(response)
      toast.success("Owner Registered Successfully")

      return response
    } catch (error) {
      console.log(error)
      toast.error("FAILED TRY AGAIN")
    }


  }

  return (
  
      <Modal>
        
          <form className={style.Form} onSubmit={handleSubmit(onSubmitOwner)}>
            <button className={style.CloseButton} onClick={onCloseClick}>
              ❌
            </button>
            <h2>Add Owner</h2>
            <input type="text" placeholder="Owner Name" {...register("username")} />
            {errors.username && <p>{errors.username.message}</p>}
            <input type="text" placeholder="Set the Password "{...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
            <Button>Add</Button>
          </form>
      <ToastContainer/>
      </Modal>
  
  );
};

export default AddOwnerForm;
