import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Review from "@/models/Review";

export async function GET() {
  await connectDB();
  const reviews = await Review.find().sort({ createdAt: -1 }).limit(10);
  return NextResponse.json(reviews);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const review = await Review.create(body);
  return NextResponse.json(review, { status: 201 });
}
