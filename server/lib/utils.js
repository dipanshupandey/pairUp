import jwt from "jsonwebtoken";


export const generateToken=async (userId)=>{
    const token=jwt.sign(
        {id:userId},
        process.env.JWT_SECRET,
        {expireIN:"7d"}
        )

        return token;
}