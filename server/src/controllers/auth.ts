import { NextFunction, Response, Request } from "express";
import User from "../models/user";
import APIError from "../utils/error";
import { IUser } from "../types/type";
import bcrypt from "bcrypt";


export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {fullname, username, email, password, bio, profilePicture} = req.body as Pick<IUser, "fullname" | "username" | "email" | "password" | "bio" | "profilePicture">;

        

    } catch (error) {
        throw new APIError("Registration Failed", 500);
    }
}