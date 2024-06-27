import express, {Router} from "express";
import { getAMessage, newMessage } from "../controllers/message";


const router: Router = express.Router();

router.post("/", newMessage);

router.get("/:conversationId", getAMessage);

export default router;