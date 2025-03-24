import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const Gallery = () => {
  // Gallery categories
  const categories = [
    { id: "all", name: "All Photos" },
    { id: "boat", name: "Our Boat" },
    { id: "catches", name: "Trophy Catches" },
    { id: "charters", name: "Charter Trips" },
    { id: "team", name: "Our Team" },
  ];

  // Placeholder gallery items
  const galleryItems = [
    {
      id: 1,
      category: "boat",
      title: "Our Charter Boat",
      description:
        "Our 36-foot charter boat equipped with the latest technology.",
      imagePath: "/images/boat1.jpg",
    },
    {
      id: 2,
      category: "boat",
      title: "Boat Interior",
      description: "Comfortable seating and modern amenities on board.",
      imagePath: "/images/boat2.jpg",
    },
    {
      id: 3,
      category: "catches",
      title: "Marlin Catch",
      description: "A beautiful Blue Marlin caught during a full-day charter.",
      imagePath: "/images/catch1.jpg",
    },
    {
      id: 4,
      category: "catches",
      title: "Mahi-Mahi",
      description: "Colorful Mahi-Mahi caught offshore.",
      imagePath: "/images/catch2.jpg",
    },
    {
      id: 5,
      category: "catches",
      title: "Yellowfin Tuna",
      description: "A nice Yellowfin Tuna caught during a specialty charter.",
      imagePath: "/images/catch3.jpg",
    },
    {
      id: 6,
      category: "charters",
      title: "Family Charter",
      description: "A family enjoying their day on the water.",
      imagePath: "/images/charter1.jpg",
    },
    {
      id: 7,
      category: "charters",
      title: "Corporate Event",
      description: "A corporate team building fishing trip.",
      imagePath: "/images/charter2.jpg",
    },
    {
      id: 8,
      category: "team",
      title: "Captain Mike",
      description:
        "Our experienced captain with over 20 years of fishing experience.",
      imagePath: "/images/team1.jpg",
    },
    {
      id: 9,
      category: "team",
      title: "First Mate Jack",
      description:
        "Our skilled first mate who ensures you have a great fishing experience.",
      imagePath: "/images/team2.jpg",
    },
    {
      id: 10,
      category: "catches",
      title: "Sailfish",
      description: "A beautiful Sailfish caught and released during a charter.",
      imagePath: "/images/catch4.jpg",
    },
    {
      id: 11,
      category: "catches",
      title: "Grouper",
      description: "A nice Grouper caught during a half-day charter.",
      imagePath: "/images/catch5.jpg",
    },
    {
      id: 12,
      category: "boat",
      title: "Fishing Equipment",
      description:
        "Top-quality fishing rods and reels available on our charters.",
      imagePath: "/images/boat3.jpg",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Filter gallery items based on active category
  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // Handle opening the lightbox
  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = "hidden";
  };

  // Handle closing the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // Get the selected image
  const selectedItem =
    selectedImage !== null
      ? galleryItems.find((item) => item.id === selectedImage)
      : null;

  // Navigate to the next or previous image in the lightbox
  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return;

    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }

    setSelectedImage(filteredItems[newIndex].id);
  };

  return (
    <>
      <Head>
        <title>Photo Gallery - Lethal Weapon Fishing Charters</title>
      </Head>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gray-900/70 z-10" />
        <div className="relative h-full w-full bg-[url('/images/gallery-hero.jpg')] bg-cover bg-center">
          <div className="container-custom relative z-20">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl font-bold mb-4 text-white">
                Photo Gallery
              </h1>
              <p className="text-xl">
                Browse through our collection of photos showcasing our boat,
                trophy catches, and charter experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? "bg-ocean-blue text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openLightbox(item.id)}
              >
                <div className="relative h-64 w-full bg-gray-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">Image placeholder</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No photos found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <button
              className="absolute top-0 right-0 -mt-12 -mr-12 text-white hover:text-gray-300 z-10"
              onClick={closeLightbox}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 text-white hover:text-gray-300"
              onClick={() => navigateImage("prev")}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 text-white hover:text-gray-300"
              onClick={() => navigateImage("next")}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image container */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-[60vh] w-full bg-gray-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">Image placeholder</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-600">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
