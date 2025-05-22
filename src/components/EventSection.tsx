'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type EventCardProps = {
  image: string;
  title: string;
  dateTime: string;
  organizer: string;
  category?: string;
  slug: string;
  price: number;
  ticketsAvailable: number;
};

export default function EventCard({
  image,
  title,
  dateTime,
  organizer,
  category,
  slug,
  price,
  ticketsAvailable,
}: EventCardProps) {
  const router = useRouter();

  const handleBuyTicket = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/checkout/${slug}`);
  };

  return (
    <Link
      href={`/events/${slug}`}
      className="group relative block transform transition-transform hover:scale-[1.02] animate-fade-in-up"
    >
      {/* Background animations */}
      <div className="absolute inset-0 z-[0] overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#ec4899_50%,#6366f1_100%)] opacity-20 group-hover:opacity-30 animate-conic-spin transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient-blur" />
      </div>

      {/* Card Content */}
      <div className="bg-white relative z-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 group-hover:translate-x-1 transition-transform">
              {dateTime}
            </span>
            {category && (
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium transition-all duration-300 hover:bg-purple-200 hover:scale-105">
                {category}
              </span>
            )}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:translate-x-2 transition-transform">
            {title}
          </h3>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <p className="text-sm text-gray-600">{organizer}</p>
          </div>

          {/* Price + Button */}
          <div className="flex items-center justify-between pt-4">
            <p className="text-base font-semibold text-gray-800">₹{price}</p>
            <p className="text-base font-semibold text-gray-800">₹{ticketsAvailable}</p>
            
            <button
  className="bg-orange-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition"

              onClick={handleBuyTicket}
              type="button"
            >
              Get Ticket
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
