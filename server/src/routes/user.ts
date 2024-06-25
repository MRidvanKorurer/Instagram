import express from "express";
import { deleteUser, followUser, getAllUsers, singleUser, unFollowUser, updateUser } from "../controllers/user";

const router = express.Router();

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.get("/single", singleUser);

router.get("/", getAllUsers);

router.put("/:id/follow", followUser);

router.put("/:id/unfollow", unFollowUser);

export default router;