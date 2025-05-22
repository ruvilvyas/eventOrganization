import { notFound } from "next/navigation";
import Image from "next/image";
import RSVPForm from "@/components/RSVPForm";

async function getEvent(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = await getEvent(params.slug);
  if (!event) return notFound();

  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Event Info */}
        <div className="w-full lg:w-2/3">
          <Image
            src={event.image}
            alt={event.title}
            width={1000}
            height={500}
            className="w-full h-96 object-cover rounded-xl mb-6"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>
          <p className="text-gray-600 mb-2">
            <span className="font-medium text-gray-800">Date:</span> {event.dateTime}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-medium text-gray-800">Location:</span>{" "}
            {event.location || "TBD"}
          </p>
        
          <p className="text-sm text-gray-500">Organized by: {event.organizer}</p>
        </div>

        {/* RSVP Form */}
        <div className="w-full lg:w-1/3 bg-gray-50 rounded-xl shadow-md p-6 sticky top-20">
          <RSVPForm eventTitle={event.title} />
        </div>
      </div>
    </main>
  );
}
