import { Link, useNavigate } from "react-router";
import Button from "../button/Button";
import style from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { schema, type Schema } from "./Login.type";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomerService from "../services/CustomerService";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  const onLoginsubmit = async (data: Schema) => {
    try {
      const response = await CustomerService.loginUsers(data);
      const token = response.Token;
      console.log(token);

      console.log(response.role);
      if (response.role === "customer") {
        toast.success("Login SuccessFully");
        localStorage.setItem("token", token);
        navigate("/user");
      } else if (response.role === "owner") {
        toast.success("Login SuccessFully as Owner");
        localStorage.setItem("token", token);
        navigate("/owner", { state: { role: response.role } });
      } else if (response.role === "admin") {
        localStorage.setItem("token", token);
        toast.success("Login SuccessFully as Admin");
        navigate("/admin");
      }

      return response;
    } catch (error) {
      toast.error("Go for Signup Please");
    }
  };

  return (
    <div>
      <form className={style.Form} onSubmit={handleSubmit(onLoginsubmit)}>
        <h2>LOGIN</h2>
        <input type="text" placeholder="username" {...register("username")} />
        {errors.username && <p>{errors.username.message}</p>}

        <input type="text" placeholder="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <Button type="submit">Submit</Button>
        <Link to={"/signup"}>
          <span>Signup</span>
        </Link>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
