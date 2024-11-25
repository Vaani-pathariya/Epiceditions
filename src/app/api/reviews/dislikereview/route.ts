import { NextRequest, NextResponse } from "next/server";
import {connect} from "@/dbConfig/dbConfig"
import Book from "@/models/bookModel";
connect();
export async function POST(request:NextRequest) {
    try {
        const body = await request.json();
        const id = body.id;
        const token = request.cookies.get("token")?.value||"";
        if(!token){
            return NextResponse.json({
                message:"Action not allowed",
                success: false
            },{status:200})
        }
        // add the condition that admin cannot like the blog
        const updatedBook = await Book.findOneAndUpdate(
            {_id:id},
            {$inc:{
                likes: -1
            }}
        );
        if (updatedBook.modifiedCount==0){
            return NextResponse.json({
                success:false,
                message:"Failed to update"
            },{status: 400})
        }
        return NextResponse.json({
            message:"disliked",
            success: true
        },{status:200})
    }catch(error){
        console.error("Error disliking the book review", error);
        return NextResponse.json({
            message:"Error disliking the blog",
            success:false
        },{status:500})
    }
}