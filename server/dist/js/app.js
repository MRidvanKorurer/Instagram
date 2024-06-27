"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const connect_1 = __importDefault(require("./db/connect"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const index_1 = __importDefault(require("./routes/index"));
const multer = require("multer");
const path = require("path");
const response_1 = __importDefault(require("./utils/response"));
const error_1 = __importDefault(require("./utils/error"));
const fs = require("fs");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 7000;
const imagesPath = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesPath)) {
    fs.mkdirSync(imagesPath, { recursive: true });
}
// middlewares
app.use("/images", express_1.default.static(imagesPath));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, imagesPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res, next) => {
    try {
        return new response_1.default("File uploaded successfully").success(res);
    }
    catch (error) {
        console.log(error, "ERROR");
        return next(new error_1.default("File uploaded error!", 400));
    }
});
// routing
app.use("/api", index_1.default);
// error
app.use(errorHandler_1.default);
app.listen(port, () => {
    (0, connect_1.default)();
    console.log("Server is running on port " + port);
});
