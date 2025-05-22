'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

const visitedEvents = [
  {
    image: "/js.jpg",
    title: "JSConf EU 2023",
    dateTime: "Wed, Nov 8, 9:00 AM",
    organizer: "JSConf Team",
  },
  {
    image: "/vercels.jpg",
    title: "Next.js Global Meetup",
    dateTime: "Sun, Oct 15, 1:00 PM",
    organizer: "Vercel",
  },
  {
    image: "/download (1).png",
    title: "Design Matters 2023",
    dateTime: "Mon, Sep 25, 5:30 PM",
    organizer: "Design Conf Org",
  },
];

export default function VisitedEventsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Floating background animation */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,#f0f0f0,transparent),radial-gradient(circle_at_80%_80%,#e0e7ff,transparent)] animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Visited Events</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visitedEvents.map((event, index) => (
            <div
              key={index}
              className={`transform transition duration-700 ease-in-out opacity-0 translate-y-6 ${
                isVisible ? "opacity-100 translate-y-0" : ""
              } bg-white/90 backdrop-blur rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02]`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5 space-y-2">
                <p className="text-sm text-gray-500">{event.dateTime}</p>
                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.organizer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
