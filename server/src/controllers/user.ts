import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import APIError from "../utils/error";
import { IUser } from "../types/type";
import bcrypt from "bcrypt";
import IResponse from "../utils/response";


export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    if(req.body.userId = req.params.id || req.body.isAdmin) {
        if(req.body.password) {
            try {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            } catch (error) {
                return next(new APIError("Password Error", 400));
            }
        }

        try {
            const user: IUser | null = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true});

            return new IResponse("Accound has been updated", user).success(res);
        } catch (error) {
            throw new APIError("Update Failed", 400);
        }
    }
}


export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    if(req.body.userId = req.params.id || req.body.isAdmin) {
        try {
            const user: IUser | null = await User.findByIdAndDelete(req.params.id);

            return new IResponse("Accound has been deleted", user).success(res);
        } catch (error) {
            throw new APIError("Delete Failed", 400);
        }
    }
}


export const singleUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        let user : IUser | null | any;

        if(userId) {
            user = await User.findById(userId);
        }else if(username) {
            user =  await User.findOne({username});
        }

        if(user) {
            return new IResponse("Single User Successfully Fetched", user).success(res);
        }else {
            return next(new APIError("User Not Fount", 400));
        }

    } catch (error) {
        throw new APIError("Get a User Failed", 400);
    }
}


export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users: IUser | null | any = await User.find();

        return new IResponse("Users Successfully Fetched", users).success(res);
    } catch (error) {
        throw new APIError("Users Fetch Failed", 400);
    }
}



export const followUser = async (req: Request, res: Response, next: NextFunction) => {
    if(req.body.userId !== req.params.id) {
        try {
            const user: any = await User.findById(req.params.id);
            const currentUser: any = await User.findById(req.body.userId);

            if(!user?.followers.includes(req.body.userId)) {
                await user.updateOne({$push: {followers: req.body.userId}})
                await currentUser.updateOne({$push: {followings: req.params.id}})

                return new IResponse("User has been followed").success(res);
            }else {
                return next(new APIError("You are already following this user!", 403));
            }
        } catch (error) {
            throw new APIError("Follow Error", 500);
        }
    }else {
        throw new APIError("You can't follow yourself", 403)
    }
}



export const unFollowUser = async (req: Request, res: Response, next: NextFunction) => {
    if(req.body.userId !== req.params.id) {
        try {
            const user: any = await User.findById(req.params.id);
            const currentUser: any = await User.findById(req.body.userId);

            if(user?.followers.includes(req.body.userId)) {
                await user.updateOne({$pull: {followers: req.body.userId}})
                await currentUser.updateOne({$pull: {followings: req.params.id}})

                return new IResponse("User has been unfollowed").success(res);
            }else {
                return next(new APIError("You are already unfollowing this user!", 403));
            }
        } catch (error) {
            throw new APIError("Follow Error", 500);
        }
    }else {
        throw new APIError("You can't unfollow yourself", 403)
    }
}



export const searchUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const name: any = req.query.username;
        if(!name) {
            return next(new APIError("Name query parameter is required", 400));
        }
        const users: any = await User.find({username: new RegExp(name, "i")});

        if(users.length > 0) {
            return new IResponse(null, users).success(res);
        }else {
            next(new APIError("No users found with that name", 400));
        }
    } catch (error) {
        throw new APIError("Search Failed", 400);
    }
}