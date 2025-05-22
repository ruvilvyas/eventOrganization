// src/app/api/events/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Event } from "@/models/Event";

export async function GET() {
  await connectDB();
  const events = await Event.find();
  return NextResponse.json(events);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  try {
    // Optional default fallback image
    const defaultImage = "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80";

    const newEvent = await Event.create({
      title: body.title,
      image: body.image || defaultImage,
      dateTime: body.dateTime,
      organizer: body.organizer,
      category: body.category,
      slug: body.slug,
      price: Number(body.price),
      ticketsAvailable: Number(body.ticketsAvailable),
    });

    return NextResponse.json(newEvent, { status: 201 });
  } catch (err: any) {
    console.error("❌ Error creating event:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
