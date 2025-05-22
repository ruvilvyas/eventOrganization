// app/api/events/[slug]/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Event } from "@/models/Event";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  await connectDB();
  const event = await Event.findOne({ slug: params.slug });

  if (!event) return NextResponse.json({ message: "Event not found" }, { status: 404 });

  return NextResponse.json(event);
}
