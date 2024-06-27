import Message from "../models/message";
import {Request, Response, NextFunction} from "express";
import IResponse from "../utils/response";
import APIError from "../utils/error";
import { IMessage } from "../types/type";


export const newMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newMessage = new Message(req.body);
        const savedMessage : IMessage = await newMessage.save();

        return new IResponse("Message Saved Successful", savedMessage ).success(res);
    } catch (error) {
        throw new APIError("Save Message Error", 400);
    }
}



export const getAMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const messages: IMessage | null | any = await Message.find({
            conversationId: req.params.conversationId
        })

        return new IResponse("Message Fetched Successful", messages ).success(res);
    } catch (error) {
        throw new APIError("Save Message Error", 400);
    }
}