import { NextFunction, Response, Request } from "express";
import User from "../models/user";
import APIError from "../utils/error";
import { IUser } from "../types/type";
import bcrypt from "bcrypt";
import createJwtToken from "../utils/createJwtToken";
import IResponse from "../utils/response";


export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {fullname, username, email, password, bio, profilePicture} = req.body as Pick<IUser, "fullname" | "username" | "email" | "password" | "bio" | "profilePicture">;

        const user = await User.findOne({email});

        if(user) {
            return next(new APIError("Email Address Already Registered", 401));
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser: IUser = await User.create({fullname, username, email, password: hashPassword, bio, profilePicture});

        const token: string = createJwtToken(newUser);
        
        return new IResponse("Registration success", newUser, token).created(res);

        

    } catch (error) {
        throw new APIError("Registration Failed", 500);
    }
}


export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body as Pick<IUser, "email" | "password">;

        let user: IUser | any = await User.findOne({email});

        if(!user) {
            return next(new APIError("Email Address Incorrect", 401));
        }

        const comparePassword = await bcrypt.compare(password, user.password);

        if(!comparePassword) {
            return next(new APIError("Password Incorrect", 401));
        }

        const token: string = createJwtToken(user);

        return new IResponse("Login Success", user, token).success(res);
    } catch (error) {
        throw new APIError("Login Failed", 500);
    }
}