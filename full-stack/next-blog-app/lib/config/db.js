import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://tharindudmadushanka920:Thariya920@@cluster0.6qkty.mongodb.net/blog-app')    
    console.log("DB Connected")
}