import {Document} from "mongoose";


export interface IUser extends Document {
    _id?: string,
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


export interface IPost extends Document {
    _id?: string,
    userId: string
    image: string,
    description: "",
    likes: [],
    createdAt?: string,
    updatedAt?: string
}


export interface IConversation extends Document {
    _id?: string,
    members: string[]
};


export interface IMessage extends Document {
    _id?: string,
    conversationId: string,
    sender: string,
    text: string
}