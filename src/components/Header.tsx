import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBoatsDropdownOpen, setIsBoatsDropdownOpen] = useState(false);

  return (
    <header className="bg-ocean-blue shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            Lethal Weapon Fishing Charters
          </Link>

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
                className="text-white hover:text-sunset-orange transition-colors flex items-center"
                onClick={() => setIsBoatsDropdownOpen(!isBoatsDropdownOpen)}
                onMouseEnter={() => setIsBoatsDropdownOpen(true)}
                onMouseLeave={() => setIsBoatsDropdownOpen(false)}
              >
                Our Boats
                <svg 
                  className="ml-1 h-4 w-4" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 ${isBoatsDropdownOpen ? 'block' : 'hidden'} group-hover:block`}
                onMouseEnter={() => setIsBoatsDropdownOpen(true)}
                onMouseLeave={() => setIsBoatsDropdownOpen(false)}
              >
                <div className="py-1">
                  <Link 
                    href="/crusader" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    34ft Crusader
                  </Link>
                  <Link 
                    href="/grady-white" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    22' Grady-White
                  </Link>
                </div>
              </div>
            </div>
            
            <Link
              href="/rates"
              className="text-white hover:text-sunset-orange transition-colors"
            >
              Rates
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
                  className="text-white hover:text-sunset-orange transition-colors flex items-center"
                  onClick={() => setIsBoatsDropdownOpen(!isBoatsDropdownOpen)}
                >
                  Our Boats
                  <svg 
                    className={`ml-1 h-4 w-4 transform ${isBoatsDropdownOpen ? 'rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isBoatsDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/crusader"
                      className="block text-white hover:text-sunset-orange transition-colors"
                      onClick={() => {setIsMenuOpen(false); setIsBoatsDropdownOpen(false);}}
                    >
                      34ft Crusader
                    </Link>
                    <Link
                      href="/grady-white"
                      className="block text-white hover:text-sunset-orange transition-colors"
                      onClick={() => {setIsMenuOpen(false); setIsBoatsDropdownOpen(false);}}
                    >
                      22' Grady-White
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                href="/rates"
                className="text-white hover:text-sunset-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rates
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
