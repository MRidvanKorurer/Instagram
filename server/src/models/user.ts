import mongoose from "mongoose";
import {IUser} from "../types/type";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    bio: {
        type: String,
        max: 100,
        default: ""
    },
    profilePicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, {timestamps: true});


export default mongoose.model<IUser>("User", userSchema);