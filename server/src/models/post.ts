import mongoose from "mongoose";
import { IPost } from "../types/type";


const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        max: 600
    },
    likes: {
        type: Array,
        default: []
    },
}, {timestamps: true});



export default mongoose.model<IPost>("Post", postSchema);