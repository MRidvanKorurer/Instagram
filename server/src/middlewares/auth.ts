import {Request, Response, NextFunction} from "express";
import APIError from "../utils/error";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { IUser } from "../types/type";


const authMiddleware = async (req: any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) {
        return next(new APIError("İşlem Yapmak İçin Login Olun", 401));
    }

    jwt.verify(token, process.env.JWT_KEY || "", async(err: any, decoded: any) => {
        if(err) {
            return next(new APIError("Token Error!", 401));
        }

        const user: IUser | null = await User.findById(decoded.sub);

        if(!user) {
            return next(new APIError("Token Error İnvalid User!", 401));
        }

        req.user = user;

        next();
    })
}

export default authMiddleware;