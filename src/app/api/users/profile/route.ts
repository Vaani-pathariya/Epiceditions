import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const token = request.cookies.get("token")?.value || "";
    if (!token){
        return NextResponse.json({
            message:"The user is not logged in",
            success: true
        },{status: 200})
    }
    return NextResponse.json({
        message:"User is logged in",
        success :true 
    },{status:200})
}