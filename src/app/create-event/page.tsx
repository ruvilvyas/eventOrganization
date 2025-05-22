'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateEventPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    dateTime: '',
    organizer: '',
    category: '',
    slug: '',
    price: '',
    ticketsAvailable: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const defaultImage =
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80";

    const response = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        image: formData.image || defaultImage,
        price: Number(formData.price),
        ticketsAvailable: Number(formData.ticketsAvailable),
      }),
    });

    if (response.ok) {
      alert('✅ Event Created Successfully!');
      router.push('/');
    } else {
      alert('❌ Error creating event');
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-8 bg-white rounded-lg shadow-md border">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Create New Event</h1>
      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Event Title</label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Ex: Food Fest 2025"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="https://..."
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date & Time</label>
            <input
              type="datetime-local"
              name="dateTime"
              required
              value={formData.dateTime}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Organizer</label>
            <input
              type="text"
              name="organizer"
              required
              value={formData.organizer}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Ex: Music, Food, Tech"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Slug (unique)</label>
            <input
              type="text"
              name="slug"
              required
              value={formData.slug}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="unique-event-id"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              required
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              min="0"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Tickets Available</label>
            <input
              type="number"
              name="ticketsAvailable"
              required
              value={formData.ticketsAvailable}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              min="1"
            />
          </div>
        </div>

      

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}
