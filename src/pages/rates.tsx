import React from "react";
import Head from "next/head";
import Link from "next/link";

const Rates = () => {
  // Placeholder data for charter rates
  const charterRates = [
    {
      id: 1,
      title: "Half-Day Charter",
      duration: "4 hours",
      price: "$599",
      maxGuests: 6,
      description:
        "Perfect for beginners or those with limited time. Includes all fishing equipment, bait, and ice.",
      features: [
        "Professional captain and mate",
        "All fishing equipment provided",
        "Fish cleaning and bagging",
        "Bottled water included",
        "Fishing license for all guests",
      ],
    },
    {
      id: 2,
      title: "Full-Day Charter",
      duration: "8 hours",
      price: "$999",
      maxGuests: 6,
      description:
        "Our most popular option. Maximize your chances of landing trophy fish with a full day on the water.",
      features: [
        "Professional captain and mate",
        "All fishing equipment provided",
        "Fish cleaning and bagging",
        "Lunch and refreshments included",
        "Fishing license for all guests",
        "Extended range for offshore fishing",
      ],
      featured: true,
    },
    {
      id: 3,
      title: "Specialty Charter",
      duration: "10 hours",
      price: "$1,299",
      maxGuests: 4,
      description:
        "Targeted fishing for specific species like Marlin, Tuna, or Sailfish. For serious anglers.",
      features: [
        "Professional captain and mate",
        "Premium fishing equipment",
        "Fish cleaning and bagging",
        "Gourmet lunch and refreshments",
        "Fishing license for all guests",
        "Extended range for offshore fishing",
        "Photography service included",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Rates & Packages - Lethal Weapon Fishing Charters</title>
      </Head>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gray-900/70 z-10" />
        <div className="relative h-full w-full bg-[url('/images/rates-hero.jpg')] bg-cover bg-center">
          <div className="container-custom relative z-20">
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

          <div className="grid md:grid-cols-3 gap-8">
            {charterRates.map((rate) => (
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
