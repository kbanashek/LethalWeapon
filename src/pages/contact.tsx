import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { getRandomBackgroundImage } from "@/utils/imageUtils";

// Import the map component with dynamic loading (no SSR)
const LocationMap = dynamic(() => import("@/components/LocationMap"), {
  ssr: false,
  loading: () => (
    <div className="h-80 w-full bg-gray-200 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: string;
  package: string;
  boat: string;
  message: string;
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");
  // State for the random background image
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  // Set a random background image on component mount
  useEffect(() => {
    setBackgroundImage(getRandomBackgroundImage());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setFormStatus("idle");
      // Send form data to our API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      // Reset form after successful submission
      reset();
      setFormStatus("success");
      setStatusMessage(
        result.message ||
          "Your inquiry has been sent successfully! We will get back to you soon."
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Failed to send your inquiry. Please try again later."
      );
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Lethal Weapon Fishing Charters</title>
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
              <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
              <p className="text-xl">
                Ready to book your fishing adventure? Contact us today to check
                availability and secure your spot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Book Your Charter</h2>
              <p className="mb-8">
                Fill out the form below to inquire about availability or ask any
                questions you may have. We'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-blue ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-blue ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-blue ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                      {...register("date")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                      {...register("guests")}
                    >
                      <option value="">Select number of guests</option>
                      <option value="1-2">1-2 guests</option>
                      <option value="3-4">3-4 guests</option>
                      <option value="5-6">5-6 guests</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="package"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Charter Package
                    </label>
                    <select
                      id="package"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                      {...register("package")}
                    >
                      <option value="">Select a package</option>
                      <option value="half-day">Half-Day Charter</option>
                      <option value="full-day">Full-Day Charter</option>
                      <option value="specialty">Specialty Charter</option>
                      <option value="custom">Custom Charter</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="boat"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Boat
                    </label>
                    <select
                      id="boat"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                      {...register("boat")}
                    >
                      <option value="">Select a boat (optional)</option>
                      <option value="crusader">34ft Crusader</option>
                      <option value="grady-white">23' Grady-White</option>
                      <option value="no-preference">No preference</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                      placeholder="Tell us about your fishing interests or any questions you have..."
                      {...register("message")}
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full md:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>

                  {formStatus === "success" && (
                    <p className="mt-4 text-green-600">{statusMessage}</p>
                  )}
                  {formStatus === "error" && (
                    <p className="mt-4 text-red-600">{statusMessage}</p>
                  )}
                </div>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                <address className="not-italic mb-4">
                  <p className="mb-2">123 Harbor Drive</p>
                  <p className="mb-2">Coastal City, FL 12345</p>
                  <p className="mb-2">United States</p>
                </address>

                <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                <p className="mb-2">
                  <span className="font-medium">Phone:</span> (555) 123-4567
                </p>
                <p className="mb-2">
                  <span className="font-medium">Email:</span>{" "}
                  info@deepseacharters.com
                </p>
                <p className="mb-2">
                  <span className="font-medium">Hours:</span> 7:00 AM - 7:00 PM,
                  7 days a week
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Dock Location</h3>
                <div className="relative h-80 w-full rounded-lg overflow-hidden">
                  <LocationMap
                    position={[25.0865, -80.4473]}
                    title="Key Largo Harbor Marina"
                    address="400 Ocean Dr, Key Largo, FL 33037"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                What's included in the charter price?
              </h3>
              <p>
                Our charter prices include the boat, captain, mate, all fishing
                equipment, bait, ice, and fishing licenses for all guests.
                Full-day charters also include lunch and refreshments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Do I need to bring my own fishing equipment?
              </h3>
              <p>
                No, we provide all necessary fishing equipment. However, if you
                prefer to use your own gear, you're welcome to bring it.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                What happens if the weather is bad?
              </h3>
              <p>
                Safety is our top priority. If weather conditions are unsafe for
                fishing, we'll contact you to reschedule or provide a full
                refund.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Can we keep the fish we catch?
              </h3>
              <p>
                Yes, you can keep your legal catch. We'll clean and bag your
                fish for you to take home. We also practice catch and release
                for certain species to promote conservation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
