import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  quote: { type: String, required: true },
  image: { type: String, default: "/man1.jpg" },
}, { timestamps: true });

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
