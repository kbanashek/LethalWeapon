import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { getRandomBackgroundImage } from "@/utils/imageUtils";

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
        <meta
          property="og:title"
          content="Key Largo Fishing Charters | Lethal Weapon Fishing"
        />
        <meta
          property="og:description"
          content="Book your Key Largo fishing adventure with Captain Pete. Target Mahi-Mahi, Tuna, Wahoo, Sailfish, and more on our custom offshore fishing charters."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lethalweaponfishing.com/" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0 bg-gray-900/70 z-10" />
        <div
          className="relative h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          <div className="container-custom h-full flex items-center relative z-20">
            <div className="max-w-2xl text-white">
              {/* <h1 className="text-4xl font-bold mb-4 text-white">
                Lethal Weapon Fishing Adventures
              </h1> */}
              <p className="text-xl mb-8">
                Experience the thrill of deep sea fishing with our professional
                charter services. Whether you're a seasoned angler or a
                first-timer, Lethal Weapon charters provide unforgettable
                fishing experiences for everyone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/rates" className="btn btn-primary">
                  View Rates
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center relative">
            About Lethal Weapon
            <span className="block h-1 w-24 bg-gradient-to-r from-ocean-blue to-sunset-orange mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Main Content */}
            <div className="space-y-12">
              <div className="transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-lg mb-6 leading-relaxed text-gray-800">
                  Welcome to Lethal Weapon Fishing Charters, where fishing
                  dreams become reality. Our experienced captains and crew are
                  dedicated to providing you with the best fishing experience
                  possible.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Captain Pete Jacobsen invites you on a first class fishing
                  adventure in the offshore waters of Key Largo, Florida. This
                  area has an abundance of fish you will be able to chase and
                  target with an expert crew led by Capt. Pete. Families and
                  children are most welcome, as he loves to teach them about
                  fishing and sharing his vast knowledge. The captain also
                  welcomes beginners and seasoned anglers.
                </p>
              </div>

              <div className="transform hover:scale-[1.01] transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-5 text-ocean-blue flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-r from-ocean-blue to-blue-400 mr-3 flex-shrink-0"></span>
                  Our Vessels
                </h3>
                <p className="leading-relaxed mb-4 text-gray-700 pl-11">
                  Capt. Pete will take you fishing on a 34-foot Crusader
                  Downeast sportfishing boat. It is powered by one 375 HP
                  Caterpillar engine, with a maximum cruising speed of 18 knots.
                  The vessel provides a comfortable platform to hunt and capture
                  South Atlantic game fish. You will find all the safety and
                  fish finding technology on board, as well as a flybridge, a
                  toilet, and a shower.
                </p>
                <p className="leading-relaxed text-gray-700 pl-11">
                  For smaller groups or those seeking a more nimble fishing
                  experience, we also offer trips on our 23' Grady-White center
                  console. This vessel is perfect for nearshore adventures,
                  featuring twin outboard engines for reliability and
                  performance. The Grady-White is known for its exceptional
                  handling in various sea conditions and provides an intimate
                  fishing experience with all the necessary amenities and
                  fishing equipment on board.
                </p>
              </div>

              <div className="transform hover:scale-[1.01] transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-5 text-ocean-blue flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-r from-ocean-blue to-blue-400 mr-3 flex-shrink-0"></span>
                  Target Species
                </h3>
                <p className="leading-relaxed text-gray-700 pl-11">
                  The charter offers traditional nearshore and offshore fishing
                  in the Florida Keys for species such as Mutton Snapper, Red
                  and Black Grouper, Mahi Mahi, Sailfish, Wahoo, Red Snapper,
                  Skipjack Tuna, and more local species. The crew are very
                  experienced in targeting offshore game fish and will provide
                  you with expert advice on how you can catch them, too, so pay
                  close attention and you'll be reeling in throughout the trip.
                </p>
              </div>

              <div className="transform hover:scale-[1.01] transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-5 text-ocean-blue flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-r from-ocean-blue to-blue-400 mr-3 flex-shrink-0"></span>
                  What's Included
                </h3>
                <p className="leading-relaxed mb-6 text-gray-700 pl-11">
                  Each trip will include rods, reels, tackle, live and
                  artificial baits, and a fishing license. So all you have to
                  bring is something to eat and drink for the day, and enjoy
                  your adventure! You will have an option to book a half day or
                  a full day trip depending on the fish you want to catch, so
                  take your pick and get ready to reel!
                </p>
                <p className="mb-8 leading-relaxed text-gray-700 pl-11">
                  Whether you're looking to catch trophy fish or just enjoy a
                  day on the water with family and friends, we have the perfect
                  charter package for you.
                </p>
                <div className="pl-11">
                  <Link
                    href="/contact"
                    className="btn btn-primary inline-block transform hover:translate-y-[-2px] transition-transform duration-300 shadow-md hover:shadow-lg"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Image and Benefits */}
            <div className="space-y-12">
              <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/LethalWeapon/images/IMG_4011.jpeg"
                  alt="Fishing on Lethal Weapon Charter"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-gradient-to-br from-ocean-blue to-blue-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-white/20 mr-3 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white">✓</span>
                  </span>
                  <span className="text-white">Why Choose Lethal Weapon?</span>
                </h3>
                <ul className="space-y-4 pl-11">
                  <li className="flex items-start">
                    <span className="text-sunset-orange mr-3 text-xl">•</span>
                    <span className="leading-relaxed">
                      Experienced captain with extensive local knowledge
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunset-orange mr-3 text-xl">•</span>
                    <span className="leading-relaxed">
                      Top-of-the-line fishing equipment and technology
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunset-orange mr-3 text-xl">•</span>
                    <span className="leading-relaxed">
                      Family-friendly charters for all experience levels
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunset-orange mr-3 text-xl">•</span>
                    <span className="leading-relaxed">
                      Prime fishing locations in the Florida Keys
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunset-orange mr-3 text-xl">•</span>
                    <span className="leading-relaxed">
                      Variety of target species year-round
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-md border border-gray-200 transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-4 text-ocean-blue">
                  Ready to Book Your Charter?
                </h3>
                <p className="mb-6 text-gray-700">
                  Contact us today to schedule your unforgettable fishing
                  adventure in the beautiful waters of Key Largo.
                </p>
                <Link
                  href="/rates"
                  className="text-ocean-blue font-semibold hover:underline flex items-center group"
                >
                  View our rates
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

      {/* Featured Catches Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Catches</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Take a look at some of the impressive catches our clients have
              made on recent charters. You could be next!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCatches.map((catch_) => (
              <div
                key={catch_.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${catch_.image}')` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{catch_.title}</h3>
                  <p className="text-gray-600 mb-4">{catch_.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="btn btn-primary">
              View More Catches
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ocean-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready for an Unforgettable Fishing Adventure?
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Book your charter today and create memories that will last a
            lifetime. We offer competitive rates and flexible scheduling to
            accommodate your needs.
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

export default Home;
