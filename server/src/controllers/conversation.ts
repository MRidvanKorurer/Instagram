import Conversation from "../models/conversation";
import {Request, Response, NextFunction} from "express";
import APIError from "../utils/error";
import IResponse from "../utils/response";

export const newConversation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newConversation = new Conversation({
            members: [req.body.senderId, req.body.receiverId],
        });

        const savedConversation = await newConversation.save();

        return new IResponse("Successfully", savedConversation).success(res);
    } catch (error) {
        throw new APIError("Error!", 400);
    }
}


export const getSingleConversation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const conversation = new Conversation({
            members: {$in: [req.params.userId]}
        })
        return new IResponse("Single Successfully", conversation).success(res);
    } catch (error) {
        throw new APIError('Error!', 400);
    }
}

export const getMultipleConversation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const conversation = await Conversation.findOne({
            members: { $all: [req.params.firstUserId, req.params.secondUserId]}
        })
        return new IResponse("Multiple Successfully", conversation).success(res);
    } catch (error) {
        throw new APIError('Error!', 400);
    }
}




