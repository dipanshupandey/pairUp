import mongoose from "mongoose";

export const connectDB=async ()=>{
    try{
        mongoose.connection.on('connected',()=>{
            console.log("DATABASE CONNECTED");
        })
       
        await mongoose.connect(`${process.env.MONGODB_URI}/pairup`);
    
    }
    catch(error)
    {
        console.log(error)
    }
}