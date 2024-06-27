import mongoose from "mongoose";
import { IMessage } from "../types/type";


const messageSchema = new mongoose.Schema({
    conversationId: {
        type: String
    },
    sender: {
        type: String,
    },
    text: {
        type: String
    }
});


export default mongoose.model<IMessage>("Message", messageSchema);