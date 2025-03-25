import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { getRandomBackgroundImage } from "@/utils/imageUtils";
import SpeciesCard from "@/components/SpeciesCard"; // Update the import statement

const Home = () => {
  // State for the random background image
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  // Set a random background image on component mount
  useEffect(() => {
    setBackgroundImage(getRandomBackgroundImage());
  }, []);

  // Placeholder data for featured catches - using existing images
  const featuredCatches = [
    {
      id: 1,
      title: "Mahi-Mahi",
      description: "A proper day of Mahi-Mahi fishing",
      image: "/LethalWeapon/images/IMG_3663.jpeg",
    },
    {
      id: 2,
      title: "Mutton Snapper",
      description: "One of tastiest catches of the day",
      image: "/LethalWeapon/images/IMG_4011.jpeg",
    },
    {
      id: 3,
      title: "Wahoo",
      description: "Our favorite fish to target...Wahoo!",
      image: "/LethalWeapon/images/IMG_4104.jpeg",
    },
  ];

  // Fish species data
  const fishSpecies = [
    {
      name: "Mahi Mahi",
      image: "/LethalWeapon/images/species/mahi-mahi.jpg",
    },
    {
      name: "Sailfish",
      image: "/LethalWeapon/images/species/sailfish.jpg",
    },
    {
      name: "Wahoo",
      image: "/LethalWeapon/images/species/wahoo.jpg",
    },
    {
      name: "Tuna",
      image: "/LethalWeapon/images/species/tuna.jpg",
    },
    {
      name: "Yellowtail Snapper",
      image: "/LethalWeapon/images/species/yellow-tail.jpg",
    },
    {
      name: "Mutton Snapper",
      image: "/LethalWeapon/images/species/mutton-snapper.jpg",
    },
    {
      name: "Red Grouper",
      image: "/LethalWeapon/images/species/red-grouper.jpg",
    },
    {
      name: "Black Grouper",
      image: "/LethalWeapon/images/species/black-grouper.jpg",
    },
    {
      name: "Red Snapper",
      image: "/LethalWeapon/images/species/red-snapper.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Key Largo Fishing Charters | Lethal Weapon Fishing Charters
        </title>
        <meta
          name="description"
          content="Experience premier Key Largo fishing charters with Lethal Weapon. Target Mahi-Mahi, Tuna, Wahoo, Sailfish, and Snapper on our offshore and nearshore fishing adventures."
        />
        <meta
          name="keywords"
          content="Key Largo fishing, offshore fishing, deep sea fishing, Mahi-Mahi, Tuna, Wahoo, Sailfish, Snapper, Florida Keys fishing charters, sport fishing, family fishing trips"
        />
      </Head>

      {/* Hero Section with Video Background */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight text-white">
              Experience World-Class Fishing in Key Largo
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 text-white">
              Join Captain Pete for unforgettable offshore and nearshore
              adventures aboard our premium fishing vessels
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/contact"
                className="btn btn-primary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg transform hover:scale-105 transition duration-300"
              >
                Book Your Charter
              </Link>
              <Link
                href="/rates"
                className="btn btn-outline text-white border-2 border-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg hover:bg-white hover:text-ocean-blue transform hover:scale-105 transition duration-300"
              >
                View Rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vessels Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Vessels</h2>
            <div className="h-1 w-24 bg-sunset-orange mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect vessel for your fishing adventure in the
              beautiful waters of Key Largo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 34ft Crusader */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="h-64 relative">
                <img
                  src="/LethalWeapon/images/IMG_4011.jpeg"
                  alt="34ft Crusader Fishing Boat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">
                    34ft Crusader
                  </h3>
                  <p className="text-gray-200">
                    Our flagship vessel for serious offshore adventures
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Our 34-foot Crusader Downeast sportfishing boat is powered by
                  a 375 HP Caterpillar engine with a maximum cruising speed of
                  18 knots. This vessel provides a comfortable platform for
                  hunting and capturing South Atlantic game fish, equipped with
                  all the necessary safety and fish-finding technology, plus
                  amenities like a flybridge, toilet, and shower.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-ocean-blue rounded-full text-sm">
                    Offshore Fishing
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-ocean-blue rounded-full text-sm">
                    Up to 6 Guests
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-ocean-blue rounded-full text-sm">
                    Full Amenities
                  </span>
                </div>
                <Link
                  href="/rates"
                  className="text-ocean-blue font-semibold hover:text-sunset-orange flex items-center group"
                >
                  View Crusader Rates
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* 23' Grady-White */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="h-64 relative">
                <img
                  src="/LethalWeapon/images/IMG_3663.jpeg"
                  alt="23' Grady-White Fishing Boat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">
                    23' Grady-White
                  </h3>
                  <p className="text-gray-200">
                    Perfect for small groups and nearshore fishing
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Our 23' Grady-White center console is ideal for smaller groups
                  seeking a more nimble fishing experience. Perfect for
                  nearshore adventures, this vessel features twin outboard
                  engines for reliability and performance. The Grady-White is
                  known for its exceptional handling in various sea conditions
                  and provides an intimate fishing experience with all necessary
                  amenities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-ocean-blue rounded-full text-sm">
                    Nearshore Fishing
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-ocean-blue rounded-full text-sm">
                    Up to 3 Guests
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-ocean-blue rounded-full text-sm">
                    Nimble & Fast
                  </span>
                </div>
                <Link
                  href="/rates"
                  className="text-ocean-blue font-semibold hover:text-sunset-orange flex items-center group"
                >
                  View Grady-White Rates
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Species Section */}
      <section className="py-20 bg-ocean-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Target Species</h2>
            <div className="h-1 w-24 bg-sunset-orange mx-auto"></div>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              The Florida Keys offers some of the most diverse fishing
              opportunities in the world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fishSpecies.map((species, index) => (
              <SpeciesCard
                key={index}
                name={species.name}
                image={species.image}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              The crew are very experienced in targeting offshore game fish and
              will provide you with expert advice on how you can catch them,
              too, so pay close attention and you'll be reeling in throughout
              the trip.
            </p>
            <Link
              href="/species"
              className="inline-block px-8 py-3 bg-sunset-orange text-white rounded-lg hover:bg-sunset-orange/90 transform hover:scale-105 transition-all duration-300"
            >
              Learn More About Our Species
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What's Included</h2>
            <div className="h-1 w-24 bg-sunset-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-ocean-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Equipment</h3>
              <p className="text-gray-600">
                All fishing rods, reels, tackle, live and artificial baits are
                provided for your convenience.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-ocean-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Licensing</h3>
              <p className="text-gray-600">
                A fishing license for all guests is included with your charter
                booking.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-ocean-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Guidance</h3>
              <p className="text-gray-600">
                Professional captain and crew with extensive local knowledge of
                the best fishing spots.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-600">
              All you have to bring is something to eat and drink for the day,
              and enjoy your adventure! You will have an option to book a half
              day or a full day trip depending on the fish you want to catch.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-ocean-blue text-white rounded-lg hover:bg-ocean-blue/90 transform hover:scale-105 transition-all duration-300"
            >
              Book Your Charter Today
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Catches Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Catches</h2>
            <div className="h-1 w-24 bg-sunset-orange mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients have been catching on recent trips
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCatches.map((catch_item) => (
              <div
                key={catch_item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.03] transition-all duration-300"
              >
                <div className="h-64 relative">
                  <img
                    src={catch_item.image}
                    alt={catch_item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{catch_item.title}</h3>
                  <p className="text-gray-600">{catch_item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 border-2 border-ocean-blue text-ocean-blue rounded-lg hover:bg-ocean-blue hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              View More Catches
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ocean-blue to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Fishing Adventure?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today to schedule your unforgettable fishing experience
            in the beautiful waters of Key Largo.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="px-8 py-4 bg-sunset-orange text-white rounded-lg hover:bg-sunset-orange/90 transform hover:scale-105 transition-all duration-300 text-lg font-semibold"
            >
              Book Your Charter
            </Link>
            <Link
              href="/rates"
              className="px-8 py-4 bg-white text-ocean-blue rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-lg font-semibold"
            >
              View Our Rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
