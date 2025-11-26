import { Link, useNavigate } from "react-router";
import Button from "../button/Button";
import style from "./Signup.module.scss";
import { useForm } from "react-hook-form";
import { schema, type Schema } from "./Signup.type";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomerService from "../services/CustomerService";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();

  const onSubmitSignup = async (data: Schema) => {
    try {
      const response = await CustomerService.signUpUsers(data);
      toast.success("registered succesfully");
      navigate("/login");

      return response;
    } catch (error) {
      toast.error("registered failed");
    }
  };
  return (
    <>
      <form className={style.Form} onSubmit={handleSubmit(onSubmitSignup)}>
        <h2>Signup</h2>
        <input type="text" placeholder="username" {...register("username")} />
        {errors.username && <p>{errors.username.message}</p>}

        <input type="text" placeholder="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <Button type="submit">Submit</Button>
        <Link to={"/login"}>
          <span>Login</span>
        </Link>
      </form>

      <ToastContainer />
    </>
  );
};

export default Signup;
