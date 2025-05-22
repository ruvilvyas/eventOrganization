"use client";

import { useEffect, useState } from "react";

interface Review {
  _id: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
}

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [form, setForm] = useState({ name: "", role: "", quote: "" });

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const newReview = await res.json();
    setReviews([newReview, ...reviews]);
    setForm({ name: "", role: "", quote: "" });
  };

  return (
    <section className="relative overflow-hidden py-20 px-6">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300 animate-gradient bg-[length:400%_400%]"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">give your opinion</h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Loved by organizers and attendees alike.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-12 grid gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 rounded-xl border"
            required
          />
          <input
            type="text"
            placeholder="Your Role"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="p-3 rounded-xl border"
            required
          />
          <textarea
            placeholder="Your Review"
            value={form.quote}
            onChange={(e) => setForm({ ...form, quote: e.target.value })}
            className="p-3 rounded-xl border"
            rows={3}
            required
          />
          <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition">
            Submit Review
          </button>
        </form>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Say</h2>

        {/* Reviews */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={r._id || i}
              className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={r.image || "/default-user.png"}
                alt={r.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="italic text-gray-800 mb-4">“{r.quote}”</p>
              <h3 className="font-semibold text-gray-900">{r.name}</h3>
              <p className="text-sm text-gray-600">{r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
