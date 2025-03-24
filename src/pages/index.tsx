import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  // Placeholder data for featured catches
  const featuredCatches = [
    {
      id: 1,
      title: "Giant Marlin",
      description: "A beautiful 250lb Blue Marlin caught off the coast.",
      image: "/images/catch1.jpg",
    },
    {
      id: 2,
      title: "Mahi-Mahi",
      description: "Colorful Mahi-Mahi caught during our half-day charter.",
      image: "/images/catch2.jpg",
    },
    {
      id: 3,
      title: "Yellowfin Tuna",
      description:
        "A group of anglers with their impressive Yellowfin Tuna catch.",
      image: "/images/catch3.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Lethal Weapon Fishing Charters - Unforgettable Fishing Adventures
        </title>
      </Head>

      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0 bg-gray-900/70 z-10" />
        <div className="relative h-full w-full bg-[url('/images/hero-boat.jpg')] bg-cover bg-center">
          <div className="container-custom h-full flex items-center relative z-20">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-4 text-white">
                Lethal Weapon Fishing Adventures
              </h1>
              <p className="text-xl mb-8">
                Experience the thrill of deep sea fishing with our professional
                charter services. Whether you're a seasoned angler or a
                first-timer, we provide unforgettable fishing experiences for
                everyone.
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
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our Charter</h2>
              <p className="mb-4">
                Welcome to Lethal Weapon Fishing Charters, where fishing dreams
                become reality. Our experienced captains and crew are dedicated
                to providing you with the best fishing experience possible.
              </p>
              <p className="mb-4">
                We operate a state-of-the-art fishing vessel equipped with the
                latest navigation and fish-finding technology. Our boat is
                designed for comfort and safety, ensuring that your time on the
                water is enjoyable.
              </p>
              <p className="mb-6">
                Whether you're looking to catch trophy fish or just enjoy a day
                on the water with family and friends, we have the perfect
                charter package for you.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[url('/images/boat.jpg')] bg-cover bg-center" />
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
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Image placeholder</span>
                  </div>
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
