import Post from "../models/post";
import {Request, Response, NextFunction} from "express";
import IResponse from "../utils/response";
import APIError from "../utils/error";
import { IPost, IUser } from "../types/type";
import User from "../models/user";



export const createPost = async (req: Request, res: Response, next: NextFunction) => {
    const newPost = new Post(req.body);

    try {
        const savedPost = await newPost.save();

        return new IResponse("New Post Created", savedPost).created(res);
    } catch (error) {
        throw new APIError("New Post Not Created", 400);
    }
}



export const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const post: IPost | any = await Post.findById(req.params.id);
        if(post.userId === req.body.userId) {
            await Post.updateOne({$set: req.body});
            return new IResponse("The post has been updated").success(res);
        }else {
            return next(new APIError("You can only your post", 403));
        }
    } catch (error) {
        throw new APIError("Update Post Failed", 400);
    }
}



export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const post: IPost | any = await Post.findById(req.params.id);
        if(post.userId === req.body.userId) {
            await Post.deleteOne();
            return new IResponse("The post deleted successfully").success(res);
        }else {
            return next(new APIError("You can delete only your post ", 403));
        }
    } catch (error) {
        throw new APIError("Delete Post Failed", 400);
    }
}



export const allPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const posts: IPost | any = await Post.find();

        return new IResponse("Posts fetched successfully", posts).success(res);
    } catch (error) {
        throw new APIError("Fetch Post Failed", 400);
    }
}


export const singlePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const post: IPost | null = await Post.findById(req.params.id);

        return new IResponse("A post fetched successfully", post).success(res);

    } catch (error) {
        throw new APIError("Fetch A Post Failed", 400);
    }
}


export const timelinePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const currentUser: IUser | any = await User.findById(req.params.userId);
        const userPosts: IPost | any = await Post.find({userId: currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId: string) => {
                return Post.find({userId: friendId})
            })
        );
        return new IResponse("Operation Successful", userPosts.concat(...friendPosts)).success(res);
    } catch (error) {
        throw new APIError("Operation Failed", 400);
    }
}



export const userPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null | any = await User.findOne({username: req.params.username});
        const posts: IPost | null | any = await Post.find({userId: user._id});

        return new IResponse("User posts successfully captured", posts).success(res);
    } catch (error) {
        throw new APIError("Operation Failed", 400);
    }
}


export const postLikeDislike = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const post: IPost | any = await Post.findById(req.params.id);
        if(post?.likes.includes(req.body.userId)) {
            await post.updateOne({$pull: {likes: req.body.userId}});
            return new IResponse("The post has been unliked").success(res);
        }else {
            await post.updateOne({$push: {likes: req.body.userId}});
            return new IResponse("The post has been liked").success(res);
        }
    } catch (error) {
        throw new APIError("Operation Failed", 400);
    }
}
