// components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/logo.svg" 
              width={140}
              height={40}
              alt="Evently logo"
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/events/react-day-berlin" 
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Events
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="ml-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <Link 
                href="/events" 
                className="block px-4 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="block w-full text-center bg-purple-600 text-white px-4 py-2 rounded-full mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;