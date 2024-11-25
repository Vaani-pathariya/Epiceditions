import { connect } from "@/dbConfig/dbConfig";
import Book from "@/models/bookModel";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
  try {
    
    const body = await request.json();
    const book = await Book.findById(body.id);
    if (!book) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }
    return NextResponse.json({ data: book ,success: true});
  } catch (error: any) {
    console.error("Error retrieving book:", error);
    return NextResponse.json(
      { message: "Error retrieving book" },
      { status: 500 }
    );
  }
}
