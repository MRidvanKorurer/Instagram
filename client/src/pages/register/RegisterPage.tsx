import { Button, TextField } from "@mui/material";
import "./register.css";
import { useState } from "react";
import { IUser } from "../../types/type";
import { useRegisterMutation } from "../../redux/services/authApi";
import { useUploadMutation } from "../../redux/services/uploadFileApi";


export const RegisterPage = () => {
  const [register] = useRegisterMutation();
  const [upload] = useUploadMutation();

  const [formData, setFormData] = useState<Pick<IUser, "fullname" | "username" | "email" | "password" | "passwordAgain" | "profilePicture" | "bio">>({
    fullname: "",
    username: "",
    email: "",
    password: "",
    passwordAgain: "",
    profilePicture: null,
    bio: ""
  });

  const handleChange = (e: any) => {
    if (e.target.name === "profilePicture" && e.target.files) {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if(formData.password !== formData.passwordAgain) {
      return alert("Password don't match");
    }else {
      const user: Pick<IUser, "fullname" | "username" | "email" | "password" | "bio" | "profilePicture"> = {
       fullname: formData.fullname,
       username: formData.username,
       email: formData.email,
       password: formData.password,
       bio: formData.bio,
       profilePicture: formData.profilePicture
      }

      if(formData.profilePicture) {
        const data: FormData | any = new FormData();
        const fileName = Date.now() + formData.profilePicture.name
        data.append("name", fileName);
        data.append("file", formData.profilePicture);
        user.profilePicture = fileName;

        try {
          await register(user).unwrap()
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
              console.log(err);
            })
          await upload(data).unwrap()
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            })
        } catch (error) {
          console.log(error);
        }
      }
    }
  }


  
  return (
    <div className="auth-page">
      <h1>Welcome to Social Media App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-input">
          <TextField
            required
            type="text"
            label="Full Name"
            variant="outlined"
            name="fullname"
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <TextField required type="text" label="Username" variant="outlined" name="username" onChange={handleChange}/>
        </div>
        <div className="form-input">
          <TextField required type="email" label="Email" variant="outlined" name="email" onChange={handleChange}/>
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
        <div className="form-input">
          <TextField
            required
            type="password"
            label="Password Confirm"
            variant="outlined"
            name="passwordAgain"
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <TextField required type="file" variant="outlined" name="profilePicture" onChange={handleChange}/>
        </div>
        <div className="form-input">
          <TextField
            required
            type="text"
            label="Biography"
            variant="outlined"
            name="bio"
            onChange={handleChange}
          />
        </div>
        <a href="/login" className="auth-link">
          Back to Login
        </a>
        <Button type="submit" variant="contained" color="success">
          Register
        </Button>
      </form>
    </div>
  );
};