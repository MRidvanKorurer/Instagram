import { IUser } from "../types/type";
import jwt from "jsonwebtoken";

const createJwtToken = (user: IUser)  => {
    const token: string = jwt.sign({sub: user._id, name: user.username}, process.env.JWT_KEY || "", {
        expiresIn: "7d",
        algorithm: "HS512"
    })

    return token;
}


export default createJwtToken;