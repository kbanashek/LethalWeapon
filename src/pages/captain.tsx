import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { getRandomBackgroundImage } from "@/utils/imageUtils";

const Captain = () => {
  // State for the random background image
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  // Set a random background image on component mount
  useEffect(() => {
    setBackgroundImage(getRandomBackgroundImage());
  }, []);

  // Captain's experience highlights
  const experienceHighlights = [
    "Lifelong fisherman with decades of experience",
    "Expert in offshore and nearshore fishing techniques",
    "Specializes in Tuna, Mahi Mahi, Sailfish, and Wahoo",
    "Family-friendly captain who loves teaching fishing skills",
    "Fishes nearly every day of the year in Key Largo waters",
  ];

  return (
    <>
      <Head>
        <title>About Captain Pete - Lethal Weapon Fishing Charters</title>
        <meta
          name="description"
          content="Meet Captain Pete Jacobsen, an experienced fishing guide with a passion for offshore fishing and teaching others the art of fishing."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0 bg-gray-900/70 z-10" />
        <div
          className="relative h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          <div className="container-custom h-full flex items-center relative z-20">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl font-bold mb-4 text-white">
                About Captain Pete
              </h1>
              <p className="text-xl">
                Meet the man behind Lethal Weapon Fishing Charters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Captain Bio Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Captain Pete Jacobsen</h2>
              <p className="mb-4">
                Captain Pete has been on the water his whole life, fishing and
                perfecting his techniques almost every day of the year. He is a
                family man who loves taking his own kids out on the water, as
                well as other families, and teaching them all the tricks that
                will make their trips successful.
              </p>
              <p className="mb-4">
                He is a fun and patient captain who says he is blessed to do
                this job that is also his passion. Captain Pete loves fishing
                for offshore species such as Tuna, Mahi Mahi, Sailfish, and
                Wahoo.
              </p>
              <p className="mb-6">
                Whether you're an experienced angler or a complete beginner,
                Captain Pete's friendly approach and extensive knowledge ensure
                that every charter is not just a fishing trip, but an
                unforgettable experience on the water.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Book a Trip with Captain Pete
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/captain-pete.jpg')` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Video</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Captain Pete provides a unique perspective on fishing on the
              Lethal Weapon in Key Largo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <div
                className="wistia_responsive_padding"
                style={{ padding: "56.25% 0 0 0", position: "relative" }}
              >
                <div
                  className="wistia_responsive_wrapper"
                  style={{
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  }}
                >
                  <iframe
                    src="https://fast.wistia.net/embed/iframe/alhj3m9vvg?videoFoam=true"
                    title="Captain Pete Jacobsen fishing charter video"
                    allow="autoplay; fullscreen"
                    allowTransparency={true}
                    frameBorder="0"
                    scrolling="no"
                    className="wistia_embed"
                    name="wistia_embed"
                    width="100%"
                    height="100%"
                  ></iframe>
                </div>
              </div>
              <script
                src="https://fast.wistia.net/assets/external/E-v1.js"
                async
              ></script>
              <div className="mt-4 text-center">
                <a
                  href="https://fishingbooker.com/charters/view/7132?gallery_position=0&gallery=scroll&wvideo=alhj3m9vvg"
                  className="text-ocean-blue hover:text-sunset-orange font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Captain Pete Jacobsen - See Latest Prices and Availability
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Experience & Expertise</h2>
            <p className="max-w-3xl mx-auto text-lg">
              With countless hours on the water, Captain Pete brings unmatched
              experience to every charter.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {experienceHighlights.map((highlight, index) => (
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
                  <span className="text-lg">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Captain's Philosophy</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Captain Pete believes that fishing is more than just catching
              fish—it's about creating memories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Family First</h3>
              <p>
                As a family man himself, Captain Pete creates a welcoming
                environment for families and children of all ages, ensuring
                everyone has a great time on the water.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Teaching & Sharing</h3>
              <p>
                Captain Pete takes pride in sharing his knowledge and teaching
                fishing techniques to anglers of all skill levels, from
                beginners to experienced fishermen.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Conservation Minded
              </h3>
              <p>
                Respecting the ocean and its resources is paramount. Captain
                Pete practices and promotes sustainable fishing to preserve the
                marine environment for future generations.
              </p>
            </div>
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
            Book your charter with Captain Pete today and experience the thrill
            of fishing in Key Largo's beautiful waters with an expert guide
            who's passionate about making your trip a success.
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

export default Captain;
