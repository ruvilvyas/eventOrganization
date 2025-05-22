import { notFound } from "next/navigation";

async function getEvent(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function CheckoutPage({ params }: { params: { slug: string } }) {
  const event = await getEvent(params.slug);
  if (!event) return notFound();

  return (
    <main className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Checkout: {event.title}</h1>
        <p><strong>Date:</strong> {event.dateTime}</p>
        <p><strong>Price:</strong> ₹{event.price}</p>
        <p><strong>Tickets Available:</strong> {event.ticketsAvailable}</p>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block font-medium text-gray-700">
              Number of Tickets
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min={1}
              max={event.ticketsAvailable}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="payment" className="block font-medium text-gray-700">
              Payment Method
            </label>
            <select
              id="payment"
              name="payment"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              <option value="credit-card">Credit Card</option>
              <option value="upi">UPI</option>
              <option value="paypal">PayPal</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Confirm & Pay
          </button>
        </form>
      </div>
    </main>
  );
}
