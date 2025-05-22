// models/Event.ts
import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  image: String,
  title: String,
  dateTime: String,
  organizer: String,
  category: String,
  slug: { type: String, unique: true },
  price: Number,
  ticketsAvailable: Number,
});

export const Event =
  mongoose.models.Event || mongoose.model("Event", EventSchema);
