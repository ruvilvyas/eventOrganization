import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Event } from "@/models/Event";

// Correct function signature for dynamic API route
export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;

  await connectDB();

  const event = await Event.findOne({ slug });

  if (!event) {
    return NextResponse.json({ message: "Event not found" }, { status: 404 });
  }

  return NextResponse.json(event);
}
