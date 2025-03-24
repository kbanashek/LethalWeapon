import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { getRandomBackgroundImage } from "@/utils/imageUtils";

const Rates = () => {
  // State for the random background image
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  // Set a random background image on component mount
  useEffect(() => {
    setBackgroundImage(getRandomBackgroundImage());
  }, []);

  // Crusader charter rates
  const crusaderRates = [
    {
      id: 1,
      title: "3 Hour Trip - Reef Fishing",
      duration: "3 hours",
      price: "$700",
      maxGuests: 6,
      startTime: "1:00 PM",
      description:
        "Perfect for beginners or those with limited time. Great for reef fishing in Key Largo's waters.",
      features: [
        "Professional captain and mate",
        "All fishing equipment provided",
        "Live and artificial bait",
        "Fish cleaning and bagging",
        "Fishing license for all guests",
        "FREE Cancellation (7 days notice)",
      ],
    },
    {
      id: 2,
      title: "Half Day Trip (AM)",
      duration: "4 hours",
      price: "$900",
      maxGuests: 6,
      startTime: "7:00 AM",
      description:
        "Morning fishing trip aboard our 34ft Crusader. Great for targeting a variety of species.",
      features: [
        "Professional captain and mate",
        "All fishing equipment provided",
        "Live and artificial bait",
        "Fish cleaning and bagging",
        "Fishing license for all guests",
        "FREE Cancellation (7 days notice)",
      ],
    },
    {
      id: 3,
      title: "Half Day Trip (PM)",
      duration: "4 hours",
      price: "$900",
      maxGuests: 6,
      startTime: "1:00 PM",
      description:
        "Afternoon fishing trip aboard our 34ft Crusader. Perfect for those who aren't early risers.",
      features: [
        "Professional captain and mate",
        "All fishing equipment provided",
        "Live and artificial bait",
        "Fish cleaning and bagging",
        "Fishing license for all guests",
        "FREE Cancellation (7 days notice)",
      ],
    },
    {
      id: 4,
      title: "Half Day Fishing & Trapshooting",
      duration: "4 hours",
      price: "$1,000",
      maxGuests: 6,
      startTime: "7:00 AM",
      description:
        "Combine fishing with the excitement of trapshooting for a unique experience on the water.",
      features: [
        "Professional captain and mate",
        "All fishing equipment provided",
        "Trapshooting equipment",
        "Live and artificial bait",
        "Fish cleaning and bagging",
        "Fishing license for all guests",
        "FREE Cancellation (7 days notice)",
      ],
    },
    {
      id: 5,
      title: "3/4 Day Trip",
      duration: "6 hours",
      price: "$1,200",
      maxGuests: 6,
      startTime: "7:00 AM",
      description:
        "Extended fishing time to maximize your chances of landing trophy fish.",
      features: [
        "Professional captain and mate",
        "All fishing equipment provided",
        "Live and artificial bait",
        "Fish cleaning and bagging",
        "Fishing license for all guests",
        "FREE Cancellation (7 days notice)",
      ],
      featured: true,
    },
    {
      id: 6,
      title: "Full Day Offshore Mahi Trip",
      duration: "8 hours",
      price: "$1,400",
      maxGuests: 6,
      startTime: "7:00 AM",
      description:
        "Full day dedicated to targeting Mahi Mahi in offshore waters. For serious anglers.",
      features: [
        "Professional captain and mate",
        "All fishing equipment provided",
        "Live and artificial bait",
        "Fish cleaning and bagging",
        "Fishing license for all guests",
        "Extended range for offshore fishing",
        "FREE Cancellation (7 days notice)",
      ],
    },
    {
      id: 7,
      title: "Full Day Offshore & Trapshooting",
      duration: "8 hours",
      price: "$1,500",
      maxGuests: 6,
      startTime: "7:00 AM",
      description:
        "Full Day offshore Mahi fishing with the added bonus of Trapshooting off the back of the boat.",
      features: [
        "Professional captain and mate",
        "All fishing equipment provided",
        "Trapshooting equipment",
        "Live and artificial bait",
        "Fish cleaning and bagging",
        "Fishing license for all guests",
        "Extended range for offshore fishing",
        "FREE Cancellation (7 days notice)",
      ],
    },
  ];

  // Grady-White charter rates
  const gradyWhiteRates = [
    {
      id: 1,
      title: "3 Hour Trip - Reef Fishing",
      duration: "3 hours",
      price: "$600",
      maxGuests: 3,
      startTime: "8:00 AM",
      description:
        "Perfect for reef fishing in Key Largo's waters. Great for families and beginners.",
      features: [
        "Professional captain",
        "Fishing rods and reels",
        "Lures and tackle",
        "Fish cleaning",
        "Fishing license for all guests",
        "FREE Cancellation (1 day notice)",
      ],
    },
    {
      id: 2,
      title: "5 Hour Trip - Offshore Mahi&Tuna",
      duration: "5 hours",
      price: "$800",
      maxGuests: 3,
      startTime: "7:00 AM",
      description:
        "Offshore fishing trip targeting Mahi Mahi and Tuna. Perfect for more adventurous anglers.",
      features: [
        "Professional captain",
        "Fishing rods and reels",
        "Lures and tackle",
        "Fish cleaning",
        "Fishing license for all guests",
        "Refreshments included",
        "FREE Cancellation (1 day notice)",
      ],
      featured: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Rates & Packages - Lethal Weapon Fishing Charters</title>
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
                Charter Rates & Packages
              </h1>
              <p className="text-xl">
                Choose the perfect fishing package for your adventure. We offer
                competitive rates with no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Charter Packages</h2>
            <p className="max-w-3xl mx-auto text-lg">
              We offer a variety of charter options to suit your needs and
              budget. All packages include professional guidance, quality
              equipment, and unforgettable experiences.
            </p>
          </div>

          {/* Crusader Rates */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-ocean-blue shadow-sm">
              <div className="mb-4 md:mb-0">
                <h3 className="text-3xl font-bold text-ocean-blue relative inline-block">
                  34ft Crusader Rates
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-sunset-orange"></span>
                </h3>
                <p className="text-lg text-gray-600 mt-2">
                  Our flagship vessel for serious offshore adventures
                </p>
              </div>
              <Link
                href="/crusader"
                className="text-ocean-blue hover:text-sunset-orange font-medium transition-colors duration-300"
              >
                Learn more about the Crusader →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {crusaderRates.map((rate) => (
                <div
                  key={rate.id}
                  className={`bg-white rounded-lg overflow-hidden shadow-lg border ${
                    rate.featured ? "border-sunset-orange" : "border-gray-200"
                  }`}
                >
                  {rate.featured && (
                    <div className="bg-sunset-orange text-white text-center py-2">
                      <p className="font-medium">Most Popular</p>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{rate.title}</h3>
                    <p className="text-gray-600 mb-4">
                      Duration: {rate.duration}
                    </p>
                    <p className="text-gray-600 mb-4">
                      Starts at: {rate.startTime}
                    </p>
                    <p className="text-3xl font-bold text-ocean-blue mb-4">
                      {rate.price}
                    </p>
                    <p className="text-gray-600 mb-6">{rate.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {rate.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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

                    <div className="text-center">
                      <p className="text-gray-600 mb-4">
                        Up to {rate.maxGuests} guests
                      </p>
                      <Link href="/contact" className="btn btn-primary w-full">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grady-White Rates */}
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-ocean-blue shadow-sm">
              <div className="mb-4 md:mb-0">
                <h3 className="text-3xl font-bold text-ocean-blue relative inline-block">
                  23' Grady-White Rates
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-sunset-orange"></span>
                </h3>
                <p className="text-lg text-gray-600 mt-2">
                  Perfect for small groups and nearshore fishing
                </p>
              </div>
              <Link
                href="/grady-white"
                className="text-ocean-blue hover:text-sunset-orange font-medium transition-colors duration-300"
              >
                Learn more about the Grady-White →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {gradyWhiteRates.map((rate) => (
                <div
                  key={rate.id}
                  className={`bg-white rounded-lg overflow-hidden shadow-lg border ${
                    rate.featured ? "border-sunset-orange" : "border-gray-200"
                  }`}
                >
                  {rate.featured && (
                    <div className="bg-sunset-orange text-white text-center py-2">
                      <p className="font-medium">Most Popular</p>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{rate.title}</h3>
                    <p className="text-gray-600 mb-4">
                      Duration: {rate.duration}
                    </p>
                    <p className="text-gray-600 mb-4">
                      Starts at: {rate.startTime}
                    </p>
                    <p className="text-3xl font-bold text-ocean-blue mb-4">
                      {rate.price}
                    </p>
                    <p className="text-gray-600 mb-6">{rate.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {rate.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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

                    <div className="text-center">
                      <p className="text-gray-600 mb-4">
                        Up to {rate.maxGuests} guests
                      </p>
                      <Link href="/contact" className="btn btn-primary w-full">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Additional Information
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">
                  Deposit & Payment
                </h3>
                <p className="mb-2">
                  A 30% deposit is required to secure your booking. The
                  remaining balance is due on the day of your charter.
                </p>
                <p>We accept cash, credit cards, and digital payments.</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">
                  Cancellation Policy
                </h3>
                <p className="mb-2">
                  Cancellations made more than 7 days before the charter date
                  will receive a full refund of the deposit.
                </p>
                <p className="mb-2">
                  Cancellations made 3-7 days before will receive a 50% refund
                  of the deposit.
                </p>
                <p>
                  Cancellations made less than 3 days before will not be
                  refunded.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Weather Policy</h3>
                <p>
                  If we need to cancel due to unsafe weather conditions, you
                  will have the option to reschedule or receive a full refund.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Custom Charters</h2>
              <p className="mb-4">
                Looking for something specific? We offer custom charter packages
                tailored to your needs.
              </p>
              <p className="mb-4">
                Whether you're planning a corporate event, bachelor party, or
                family reunion, we can create a custom fishing experience that
                meets your requirements.
              </p>
              <p className="mb-8">
                Contact us to discuss your custom charter needs and get a
                personalized quote.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-ocean-blue">
                      What should I bring?
                    </h4>
                    <p>
                      Sunscreen, hat, sunglasses, camera, and appropriate
                      clothing. We provide all fishing equipment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-ocean-blue">
                      Do I need a fishing license?
                    </h4>
                    <p>No, our charter license covers all guests on board.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-ocean-blue">
                      Can I bring my own food and drinks?
                    </h4>
                    <p>
                      Yes, you're welcome to bring your own food and beverages.
                      We provide coolers with ice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ocean-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Book Your Fishing Adventure?
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Contact us today to check availability and secure your spot. Our
            charters fill up quickly, especially during peak season.
          </p>
          <Link
            href="/contact"
            className="btn bg-white text-ocean-blue hover:bg-gray-100"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Rates;
