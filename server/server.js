import express from "express";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js"; 
import "dotenv/config";
const app=express();
const server=http.createServer(app);


app.use(express.json({limit:"4mb"}));
app.use(cors());

app.use("/api/status",(req,res)=>{
res.send("server is live");
});

connectDB();
const PORT=process.env.PORT||5000;
server.listen(PORT,()=>console.log("running on ",PORT));

