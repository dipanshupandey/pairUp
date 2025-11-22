import User from "../models/User";
import bcrypt from "bcryptjs"
import { generateToken } from "../lib/utils";

// Sign Up controller

const signup=async (req,res)=>{
    const {fullname,email,password,bio}=req.body;

    try {
        if(!fullname||!email||!password)
        {
            return res.status(404).json({
                success:false,
                message:"Missing Details"
            })
        }

        const user=await User.findOne({email});
        if(user){
            return res.status(404).json({
                success:false,
                message:"User already exists"
            })
        }

        const salt =await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);

        const newUser=await User.create({fullname,email,password:hashedPassword,bio});
        const token=generateToken(newUser._id);
        return res.status(201).json({
            success:true,
            userData:{
                id:newUser._id,
                fullname:newUser.fullname,
                email:newUser.email,
                bio:newUser.bio,
            },
            token,
            message:"User successfully created"
        })
        

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Some error occured"
        })
    }

}


//login controller

const login=async (req,res)=>{
    const {email,password}=req.body;
    
    try {
        if(!email||!password)
        {
        return res.status(404).json({
            success:false,
            message:"Feilds cant be empty"
        })
        }
        const userData=await User.findOne({email});
        if(!userData)
        {
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        const isPasswordCorrect=await bcrypt.compare(password,userData.password);
        if(!isPasswordCorrect)
        {
            return res.status(404).json({
                success:false,
                message:"Invalid password"
            })
        }

        const token=await generateToken(userData._id);
        return res.status(201).json({
            success:true,
            userData:{
                id:userData._id,
                name:userData.fullname,
                email:userData.email,
                bio:userData.bio,
            },
            token,
            message:"User logged in successfully"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Some error occured"
        })
    }
}