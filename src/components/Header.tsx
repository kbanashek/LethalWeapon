import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBoatsDropdownOpen, setIsBoatsDropdownOpen] = useState(false);

  return (
    <header className="bg-ocean-blue shadow-md">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="mr-auto">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-marker tracking-wide"
              style={
                {
                  background:
                    "linear-gradient(to right, #f8b500, #ff8c00, #ff6347)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                } as React.CSSProperties
              }
            >
              Lethal Weapon Fishing Charters
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-white hover:text-sunset-orange transition-colors"
            >
              Home
            </Link>

            {/* Boats Dropdown */}
            <div className="relative group">
              <button
                className="text-white hover:text-ocean-blue transition-colors flex items-center py-2 px-3 rounded-md hover:bg-blue-50"
                onClick={() => setIsBoatsDropdownOpen(!isBoatsDropdownOpen)}
                onMouseEnter={() => setIsBoatsDropdownOpen(true)}
                aria-expanded={isBoatsDropdownOpen}
                aria-haspopup="true"
              >
                Our Boats
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 ${
                  isBoatsDropdownOpen ? "block" : "hidden"
                }`}
                onMouseEnter={() => setIsBoatsDropdownOpen(true)}
                onMouseLeave={() => {
                  setTimeout(() => setIsBoatsDropdownOpen(false), 200);
                }}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="boats-menu"
              >
                <div className="py-1">
                  <Link
                    href="/crusader"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-ocean-blue"
                    role="menuitem"
                  >
                    34ft Crusader
                  </Link>
                  <Link
                    href="/grady-white"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-ocean-blue"
                    role="menuitem"
                  >
                    23' Grady-White
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/captain"
              className="text-white hover:text-sunset-orange transition-colors"
            >
              About Captain
            </Link>

            <Link
              href="/rates"
              className="text-white hover:text-sunset-orange transition-colors"
            >
              Rates
            </Link>
            <Link
              href="/species"
              className="text-white hover:text-sunset-orange transition-colors"
            >
              Species
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-sunset-orange transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-sunset-orange transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-white hover:text-sunset-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Boats Dropdown */}
              <div>
                <button
                  className="text-white hover:text-sunset-orange transition-colors flex items-center py-2"
                  onClick={() => setIsBoatsDropdownOpen(!isBoatsDropdownOpen)}
                  aria-expanded={isBoatsDropdownOpen}
                  aria-haspopup="true"
                >
                  Our Boats
                  <svg
                    className={`ml-1 h-4 w-4 transform ${
                      isBoatsDropdownOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isBoatsDropdownOpen && (
                  <div
                    className="pl-4 mt-2 space-y-2"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="mobile-boats-menu"
                  >
                    <Link
                      href="/crusader"
                      className="block text-white hover:text-sunset-orange transition-colors py-2"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsBoatsDropdownOpen(false);
                      }}
                      role="menuitem"
                    >
                      34ft Crusader
                    </Link>
                    <Link
                      href="/grady-white"
                      className="block text-white hover:text-sunset-orange transition-colors py-2"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsBoatsDropdownOpen(false);
                      }}
                      role="menuitem"
                    >
                      23' Grady-White
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/captain"
                className="text-white hover:text-sunset-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Captain
              </Link>

              <Link
                href="/rates"
                className="text-white hover:text-sunset-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rates
              </Link>
              <Link
                href="/species"
                className="text-white hover:text-sunset-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Species
              </Link>
              <Link
                href="/gallery"
                className="text-white hover:text-sunset-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-sunset-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
