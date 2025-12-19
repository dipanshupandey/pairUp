import express from "express";

const app=express();

app.use("/home",(req,res)=>{
res.send("oye hoye")
})
app.listen(5000,()=>{
    console.log("server shurur");
});