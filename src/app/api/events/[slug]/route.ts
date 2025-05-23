// src/app/api/events/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Event } from "@/models/Event";

// ✅ Correct GET handler for dynamic routes in Next.js App Router
export async function GET(
  req: NextRequest,
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
