import express, { Router} from "express";
import authRoute from "./auth";
import userRoute from "./user";

const router: Router = express.Router();

router.use("/auth", authRoute);

router.use("/users", userRoute);

export default router;