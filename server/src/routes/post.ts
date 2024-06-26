import express, {Router} from "express";
import { allPosts, createPost, deletePost, singlePost, updatePost } from "../controllers/post";


const router: Router = express.Router();

router.post("/create", createPost);

router.put("/update/:id", updatePost);

router.delete("/delete/:id", deletePost);

router.get("/all", allPosts);

router.get("/single/:id", singlePost);

export default router;

