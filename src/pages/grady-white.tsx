import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { getRandomBackgroundImage } from "@/utils/imageUtils";

const GradyWhite = () => {
  // State for the random background image
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  // Set a random background image on component mount
  useEffect(() => {
    setBackgroundImage(getRandomBackgroundImage());
  }, []);

  // Boat specifications
  const boatSpecs = [
    { label: "Length", value: "22 feet" },
    { label: "Make", value: "Grady-White" },
    { label: "Capacity", value: "Up to 4 passengers" },
    { label: "Engine", value: "Single outboard motor" },
    { label: "Cruising Speed", value: "20 knots" },
    { label: "Max Speed", value: "35 knots" },
    { label: "Range", value: "Nearshore and bay" },
  ];

  // Boat features
  const boatFeatures = [
    "Center console design for 360° fishing access",
    "GPS and fish finder electronics",
    "Rod holders throughout",
    "Live bait well",
    "Coolers for food, drinks, and catch storage",
    "Comfortable seating",
    "Shade T-top",
    "Complete safety equipment",
    "Swim platform with ladder",
  ];

  return (
    <>
      <Head>
        <title>22' Grady-White - Lethal Weapon Fishing Charters</title>
        <meta name="description" content="Learn about our 22' Grady-White fishing vessel, perfect for nearshore and bay fishing adventures." />
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
                The 22' Grady-White
              </h1>
              <p className="text-xl">
                Our versatile center console boat for nearshore and bay fishing adventures.
                Perfect for smaller groups seeking a personalized experience.
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
              <h2 className="text-3xl font-bold mb-6">About The Grady-White</h2>
              <p className="mb-4">
                The 22' Grady-White is Captain Pete Jacobsen's versatile center console vessel, 
                perfect for nearshore and bay fishing adventures. Known for its exceptional 
                handling and stability, this boat provides a comfortable and safe platform for 
                fishing the coastal waters.
              </p>
              <p className="mb-4">
                With its nimble size and powerful outboard motor, the Grady-White can quickly 
                reach fishing spots and navigate shallow waters that larger vessels can't access. 
                The center console design allows for 360-degree fishing access, making it ideal 
                for multiple anglers to fish simultaneously.
              </p>
              <p className="mb-6">
                Whether you're targeting redfish, snook, trout, or other inshore species, 
                the Grady-White offers the perfect combination of performance, comfort, and fishability.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Book The Grady-White
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
              The Grady-White is a well-equipped center console designed for versatile fishing adventures.
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

      {/* Ideal For Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ideal For</h2>
            <p className="max-w-3xl mx-auto text-lg">
              The Grady-White is perfect for these fishing experiences:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Nearshore Fishing</h3>
              <p>
                Perfect for fishing reefs, wrecks, and structures within a few miles of shore. 
                Target species like snapper, grouper, and kingfish.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Bay & Inshore Fishing</h3>
              <p>
                Ideal for navigating shallow bays and estuaries to target redfish, 
                snook, trout, and other inshore gamefish.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Small Group Charters</h3>
              <p>
                Perfect for families, couples, or small groups of friends looking for 
                a more personalized fishing experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ocean-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Experience The Grady-White?
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Book your charter today and enjoy a personalized fishing adventure aboard our 
            versatile Grady-White. Perfect for smaller groups and those looking to explore 
            nearshore and bay fishing opportunities.
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

export default GradyWhite;
