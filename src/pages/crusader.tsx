import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { getRandomBackgroundImage } from "@/utils/imageUtils";

const Crusader = () => {
  // State for the random background image
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  // Set a random background image on component mount
  useEffect(() => {
    setBackgroundImage(getRandomBackgroundImage());
  }, []);

  // Boat specifications
  const boatSpecs = [
    { label: "Length", value: "34 feet" },
    { label: "Make", value: "Crusader" },
    { label: "Capacity", value: "Up to 6 passengers" },
    { label: "Engines", value: "Twin diesel engines" },
    { label: "Cruising Speed", value: "25 knots" },
    { label: "Max Speed", value: "30+ knots" },
    { label: "Range", value: "Offshore capable" },
  ];

  // Boat features
  const boatFeatures = [
    "Spacious fishing deck",
    "Full electronics package with GPS and fish finder",
    "Outriggers for trolling",
    "Fighting chair for big game fishing",
    "Comfortable cabin with seating",
    "Marine toilet (head)",
    "Coolers for food, drinks, and catch storage",
    "Safety equipment exceeding Coast Guard requirements",
    "Shade canopy",
  ];

  return (
    <>
      <Head>
        <title>34ft Crusader - Lethal Weapon Fishing Charters</title>
        <meta name="description" content="Learn about our 34ft Crusader fishing vessel, perfect for offshore adventures and big game fishing." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 bg-gray-900/70 z-10" />
        <div 
          className="relative h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          <div className="container-custom h-full flex items-center relative z-20">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl font-bold mb-4 text-white">
                The 34ft Crusader
              </h1>
              <p className="text-xl">
                Our flagship vessel for serious offshore fishing adventures. 
                Power, comfort, and range for the ultimate fishing experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Boat Details Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About The Crusader</h2>
              <p className="mb-4">
                The 34ft Crusader is Captain Pete Jacobsen's flagship vessel, designed for 
                serious offshore fishing adventures. With its powerful twin diesel engines and 
                seaworthy hull design, the Crusader can safely take you to the most productive 
                offshore fishing grounds.
              </p>
              <p className="mb-4">
                This vessel combines performance with comfort, featuring a spacious fishing deck, 
                comfortable cabin, and all the amenities needed for a successful day on the water. 
                The Crusader is equipped with top-of-the-line fishing gear and electronics to help 
                locate and catch your trophy fish.
              </p>
              <p className="mb-6">
                Whether you're targeting marlin, tuna, mahi-mahi, or other pelagic species, 
                the Crusader provides the perfect platform for your offshore fishing adventure.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Book The Crusader
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${backgroundImage}')` }} />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vessel Specifications</h2>
            <p className="max-w-3xl mx-auto text-lg">
              The Crusader is a well-equipped fishing machine designed for offshore adventures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Specifications</h3>
              <div className="space-y-4">
                {boatSpecs.map((spec, index) => (
                  <div key={index} className="flex justify-between border-b border-gray-300 pb-2">
                    <span className="font-medium">{spec.label}</span>
                    <span>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Features</h3>
              <ul className="space-y-3">
                {boatFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-ocean-blue mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ocean-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Experience The Crusader?
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Book your charter today and experience the thrill of offshore fishing aboard our 
            flagship vessel. The Crusader is perfect for serious anglers looking for big game action.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/rates"
              className="btn bg-white text-ocean-blue hover:bg-gray-100"
            >
              View Rates
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crusader;
