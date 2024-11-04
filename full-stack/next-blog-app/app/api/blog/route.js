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

export async function GET(request) {
    // console.log("Blog GET Hit")
    return NextResponse.json({msg:"API Working"})
}

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