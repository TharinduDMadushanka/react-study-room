import { ConnectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/blogModel";
import { log } from "console";

const { NextResponse } = require("next/server")
import {writeFile} from 'fs/promises'
import { title } from "process";

// connect api with db
const LoadDB = async ()=>{
    await ConnectDB();
}

LoadDB();

// API Endpoint for get all blogs
export async function GET(request) {
    
    const blogs = await BlogModel.find({});

    return NextResponse.json({blogs})
}

// API Endpoint for uploading blogs
export async function POST(request){
    const formData = await request.formData();
    const timestamp = Date.now();

    //img storing
    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
    // console.log(imgUrl);

    const blogData = {
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        authorImg:`${formData.get('authorImg')}`
    }

    await BlogModel.create(blogData);
    console.log("Blog Saved");
    

    return NextResponse.json({success:true, msg:"Blog Added"})

}