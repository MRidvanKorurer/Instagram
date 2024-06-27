import express, { Router} from "express";
import authRoute from "./auth";
import userRoute from "./user";
import postRoute from "./post";
import conversationRoute from "./conversation";


const router: Router = express.Router();

router.use("/auth", authRoute);

router.use("/users", userRoute);

router.use("/posts", postRoute);

router.use("/conversations", conversationRoute);

export default router;