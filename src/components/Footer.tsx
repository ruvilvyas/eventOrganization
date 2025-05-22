export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">EventOrganix</h3>
          <p className="text-sm text-gray-400">
            Making events seamless for everyone. Discover, attend, and organize with ease.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="#events" className="hover:text-white">Upcoming Events</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-pink-400">Instagram</a>
            <a href="#" className="hover:text-blue-300">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} EventOrganix. All rights reserved.
      </div>
    </footer>
  );
}
