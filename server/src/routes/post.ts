import express, {Router} from "express";
import { allPosts, createPost, deletePost, postLikeDislike, singlePost, timelinePost, updatePost, userPosts } from "../controllers/post";


const router: Router = express.Router();

router.post("/create", createPost);

router.put("/update/:id", updatePost);

router.delete("/delete/:id", deletePost);

router.get("/all", allPosts);

router.get("/single/:id", singlePost);

router.get("/timeline/:userId", timelinePost);

router.get("/profile/:username", userPosts);

router.put("/:id/like", postLikeDislike);

export default router;

