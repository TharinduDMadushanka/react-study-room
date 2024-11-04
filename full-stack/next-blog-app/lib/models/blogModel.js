import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        reqired:true
    },
    description:{
        type:String,
        reqired:true
    },
    category:{
        type:String,
        reqired:true
    },
    author:{
        type:String,
        reqired:true
    },
    image:{
        type:String,
        reqired:true
    },
    authorImg:{
        type:String,
        reqired:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const BlogModel = mongoose.models.blog || mongoose.Model('blog', Schema)
export default BlogModel