'use client';

import { useEffect, useState } from "react";
import EventCard from "../components/EventSection";
import Header from "../components/Header";
import VisitedEventsSection from "@/components/VisitedEventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { EventType } from "@/types"; // ✅ make sure this path is correct

export default function HeroSection() {
  const [events, setEvents] = useState<EventType[]>([]); // ✅ replaced `any`

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/api/events");
      const data: EventType[] = await res.json(); // ✅ enforce proper type
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Host, Connect, Celebrate: <br />
              <span className="text-purple-600">Your Events, Our Platform!</span>
            </h1>
            <p className="text-lg text-gray-600">
              Book and learn helpful tips from 3,000+ mentors in world-class companies with our global community.
            </p>
            <Link href="/create-event">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700">
                Explore Now
              </button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/hero.png"
              alt="hero"
              width={1000}
              height={1000}
              className="max-h-[70vh] object-contain object-center"
            />
          </div>
        </div>
      </section>

      {/* Dynamic Events Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300 animate-gradient bg-[length:400%_400%]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Create event */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <Link href="/create-event">
              <button className="bg-blue-900 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-800 transition">
                Create Event
              </button>
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <EventCard
                key={event._id || index}
                image={event.image}
                title={event.title}
                dateTime={event.dateTime}
                organizer={event.organizer}
                category={event.category}
                slug={event.slug}
                price={Number(event.price)}
                ticketsAvailable={event.ticketsAvailable}
              />
            ))}
          </div>
        </div>
      </section>

      <VisitedEventsSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
