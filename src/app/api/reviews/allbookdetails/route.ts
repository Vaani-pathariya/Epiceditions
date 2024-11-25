import Book from "@/models/bookModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function POST(request: NextRequest) {
  try {
    const books = await Book.find();
    return NextResponse.json({
      message: "Data shared successfully",
      success: true,
      data: books,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error getting books" },
      { status: 500 }
    );
  }
}
