import mongoose from "mongoose";
import { IConversation } from "../types/type";


const conversationSchema = new mongoose.Schema({
    members: {
        type: Array
    }
})


export default mongoose.model<IConversation>("Conversation", conversationSchema);
