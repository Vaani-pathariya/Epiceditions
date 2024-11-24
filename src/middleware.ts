import { NextRequest, NextResponse } from "next/server";
import { tokenexpiry } from "./helpers/tokenexpiry";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get("token")?.value || "";

    try {
        return NextResponse.next();
    } catch (error: any) {
    }
}

export const config = {
    matcher: ["/"],
};