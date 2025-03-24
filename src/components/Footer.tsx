import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-sea text-white">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Lethal Weapon Fishing Charters
            </h3>
            <p className="mb-4">
              Experience the thrill of deep sea fishing with our professional
              charter services. We provide unforgettable fishing adventures for
              anglers of all skill levels.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-sunset-orange transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/rates"
                  className="hover:text-sunset-orange transition-colors"
                >
                  Rates
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-sunset-orange transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-sunset-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">123 Harbor Drive</p>
              <p className="mb-2">Coastal City, FL 12345</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p className="mb-2">Email: info@deepseacharters.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>
            &copy; {currentYear} Lethal Weapon Fishing Charters. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
