import jwt from "jsonwebtoken";
import User from "../models/User";
export const authMiddleware=async (req,res,next)=>{
    try {
        const token=req.headers.token;
        const decodedUser=jwt.verify(token,process.env.JWT_SECRET);
        const user=await User.findById(decodedUser.id);
        if(!user) return res.json({
            status:false,
            message:"User not found",
        })
        req.user=user;
        next();
    } 
    catch (error) {
        console.log(error.message);
        return res.json({
            status:false,
            message:"Something went wrong",
        })    
    }
}