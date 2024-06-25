import {Document} from "mongoose";


export interface IUser extends Document {
    _id: string,
    fullname: string,
    username: string,
    email: string,
    password: string,
    bio: string,
    profilePicture: string,
    followers: [],
    followings: [],
    isAdmin: boolean,
    createdAt?: string,
    updatedAt?: string
}