import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Event } from "@/models/Event";

export async function GET(req: NextRequest) {
  // Extract slug from the URL pathname
  const url = req.nextUrl;
  const slug = url.pathname.split("/").pop(); // get last part of path

  if (!slug) {
    return NextResponse.json({ message: "Slug is required" }, { status: 400 });
  }

  await connectDB();
  const event = await Event.findOne({ slug });

  if (!event) {
    return NextResponse.json({ message: "Event not found" }, { status: 404 });
  }

  return NextResponse.json(event);
}
