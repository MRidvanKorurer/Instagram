import express, {Router} from "express";
import { getMultipleConversation, getSingleConversation, newConversation } from "../controllers/conversation";

const router: Router = express.Router();

router.post("/", newConversation);

router.get("/:userId", getSingleConversation);

router.get("/find/:firstUserId/:secondUserId", getMultipleConversation);


export default router;