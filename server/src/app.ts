import "express-async-errors"
import express, {Express} from "express";
import dotenv from "dotenv";
import cors from "cors";
import conn from "./db/connect";
import errorHandlerMiddleware from "./middlewares/errorHandler";
import indexRoute from "./routes/index";
import multer = require("multer");
import path = require("path");
import IResponse from "./utils/response";
import APIError from "./utils/error";
import fs = require("fs");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 7000;

const imagesPath = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesPath)) {
    fs.mkdirSync(imagesPath, { recursive: true });
  }


// middlewares
app.use("/images", express.static(imagesPath));
app.use(express.json());
app.use(cors());


const storage = multer.diskStorage({
   destination: (req, file, cb)  => {
    cb(null, imagesPath);
   },
   filename: (req, file, cb) => {
    cb(null, file.originalname);
   }
});

const upload = multer({storage: storage});
app.post("/upload", upload.single("file"), (req, res, next) => {
    try {
        return new IResponse("File uploaded successfully").success(res);
    } catch (error) {
        console.log(error,"ERROR");
        return next(new APIError("File uploaded error!", 400));
    }
});


// routing
app.use("/api", indexRoute);

// error
app.use(errorHandlerMiddleware);

app.listen(port, () => {
    conn();
    console.log("Server is running on port " + port);
});