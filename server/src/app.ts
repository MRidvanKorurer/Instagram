import "express-async-errors"
import express, {Express} from "express";
import dotenv from "dotenv";
import cors from "cors";
import conn from "./db/connect";
import errorHandlerMiddleware from "./middlewares/errorHandler";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 7000;


// middlewares
app.use(express.json());
app.use(cors());


// routing


// error
app.use(errorHandlerMiddleware);

app.listen(port, () => {
    conn();
    console.log("Server is running on port " + port);
})
