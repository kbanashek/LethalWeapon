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
    { label: "Length", value: "23 feet" },
    { label: "Make", value: "Grady-White" },
    { label: "Type", value: "Dual Console" },
    { label: "Capacity", value: "Up to 3 passengers" },
    { label: "Engine", value: "Outboard motor" },
    { label: "Features", value: "Outriggers, GPS, Fish Finder" },
    { label: "Location", value: "Key Largo, Florida" },
  ];

  // Targeted fish species
  const targetedSpecies = [
    "Mangrove Snapper",
    "Yellowtail Snapper",
    "Blackfin Tuna",
    "Great Barracuda",
    "Vermilion Snapper",
    "Black Grouper",
    "Sailfish",
    "Rainbow Runner",
    "King Mackerel (Kingfish)",
    "Cero Mackerel",
    "Dolphin (Mahi Mahi)"
  ];

  // Fishing techniques
  const fishingTechniques = [
    "Spinning",
    "Trolling",
    "Jigging",
    "Bottom fishing"
  ];

  // What's included
  const whatsIncluded = [
    "Fishing rods and reels",
    "Lures and tackle",
    "Fishing license",
    "Professional captain with local knowledge",
    "Safety equipment"
  ];

  // What to bring
  const whatToBring = [
    "Bottled water",
    "Sunscreen (non-spray)",
    "Sunglasses",
    "Light snacks",
    "Camera"
  ];

  return (
    <>
      <Head>
        <title>Captain Pete Jacobsen's 23' Grady-White - Lethal Weapon Fishing Charters</title>
        <meta name="description" content="Experience fishing in Key Largo aboard Captain Pete Jacobsen's 23' Grady-White dual console. Perfect for families and small groups targeting a variety of species." />
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
                Captain Pete's 23' Grady-White
              </h1>
              <p className="text-xl">
                Experience the thrill of fishing in Key Largo's beautiful waters aboard our versatile 
                23' Grady-White dual console. Perfect for families and small groups.
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
                There's a fish with your name on it in Key Largo, and Captain Pete Jacobsen will help you catch it! 
                Having logged many hours on these tides, Captain Pete can tell you all about the local waters and 
                the best spots to find your target species.
              </p>
              <p className="mb-4">
                Our 23' Grady-White dual console is the perfect vessel for exploring the rich fishing grounds 
                of Key Largo. With space for up to 3 passengers, this boat offers a comfortable and stable 
                platform for various fishing techniques including spinning, trolling, jigging, and bottom fishing.
              </p>
              <p className="mb-6">
                Families who love fishing together will be glad to know that kids are welcome aboard! 
                Children must wear life vests, which we provide. Feel free to bring your own snacks so 
                that everyone stays happy and energized throughout the trip.
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
              The 23' Grady-White is a well-equipped fishing machine designed for versatile fishing adventures.
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
              <h3 className="text-2xl font-semibold mb-6">What's Included</h3>
              <ul className="space-y-3">
                {whatsIncluded.map((item, index) => (
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Species Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Target Species</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Key Largo waters are home to a diverse range of game fish. Here are some of the species you can target:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {targetedSpecies.map((species, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <span className="font-medium">{species}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fishing Techniques Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fishing Techniques</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Depending on the species you're after, you may find yourself using various fishing techniques:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {fishingTechniques.map((technique, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-2">{technique}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What to Bring</h2>
            <p className="max-w-3xl mx-auto text-lg">
              To ensure you have the best experience on your fishing trip, we recommend bringing:
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3">
              {whatToBring.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-sunset-orange mr-2 mt-0.5"
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
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Alcohol is allowed in moderation, but please avoid hard liquor as well as glass bottles. 
                Some fish may have harvest limits or closed seasons - Captain Pete will advise on current regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ocean-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Fish with Captain Pete?
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Book your charter today and turn your fishing dreams into reality. With Captain Pete Jacobsen's 
            expertise and the versatile Grady-White, you're in for an unforgettable fishing adventure in Key Largo.
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
