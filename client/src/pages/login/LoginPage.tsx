import { Button, TextField } from "@mui/material";
import { useLoginMutation } from "../../redux/services/authApi";
import {IUser} from "../../types/type";
import { useState } from "react";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { useAppDispatch } from "../../redux/hooks";
import { changeIsAuth, saveLocalStorage } from "../../redux/slices/authSlice";


export const LoginPage = () => {
  const [login, result] = useLoginMutation();

  const [formData, setFormData] = useState<Pick <IUser, "email" | "password">>({
    email: "",
    password: ""
  })

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    setFormData((prev) => ({...prev, [e.target.name] : e.target.value}));
  }
 

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await login(formData).unwrap()
        .then((res) => {
            toast.success(res.message);
            navigate(`/`);
            dispatch(saveLocalStorage(res.data));
            dispatch(changeIsAuth(true));
        })
        .catch((err) => {
          toast.error(err.data.message);
          console.log(err,"asdasdas");

        })
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="auth-page">
      <h1>Welcome to Social Media App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-input">
          <TextField required type="email" label="Email" variant="outlined" name="email" onChange={handleChange} />
        </div>
        <div className="form-input">
          <TextField
            required
            type="password"
            label="Password"
            variant="outlined"
            name="password"
            onChange={handleChange}
          />
        </div>
        <a href="/register" className="auth-link">
          Go to Register
        </a>
        <Button type="submit" variant="contained" color="success">
          {result.isLoading ? <Loading customClass={"w-1/2 h-1/2 flex justify-center items-center  "}/> : "Login"} 
        </Button>
      </form>
    </div>
  );
};