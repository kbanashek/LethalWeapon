import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getRandomBackgroundImage } from "@/utils/imageUtils";

interface SpeciesInfo {
  name: string;
  image: string;
  scientificName: string;
  description: string;
  habitat: string;
  fishingTips: string;
  seasonality: string;
}

const Species = () => {
  // State for the random background image
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  // Set a random background image on component mount
  useEffect(() => {
    setBackgroundImage(getRandomBackgroundImage());
  }, []);

  const speciesData: SpeciesInfo[] = [
    {
      name: "Mahi Mahi",
      image: "/LethalWeapon/images/species/mahi-mahi.jpg",
      scientificName: "Coryphaena hippurus",
      description:
        "Also known as Dorado or Dolphin fish, Mahi Mahi are known for their vibrant colors and acrobatic fights. They're one of the fastest-growing fish in the ocean and can reach up to 30-40 pounds in their first year. Their meat is firm with a sweet, mild flavor making them a favorite among anglers.",
      habitat:
        "Mahi Mahi are typically found in open ocean waters, often congregating around floating debris, weed lines, or other structure. They prefer warm waters above 70°F.",
      fishingTips:
        "We target Mahi using a variety of methods including trolling with ballyhoo, artificial lures, or live bait. They're known for their aggressive strikes and spectacular aerial displays when hooked.",
      seasonality:
        "Peak season in the Florida Keys is April through September, but they can be caught year-round with the right conditions.",
    },
    {
      name: "Sailfish",
      image: "/LethalWeapon/images/species/sailfish.jpg",
      scientificName: "Istiophorus platypterus",
      description:
        "The Sailfish is one of the most sought-after game fish in the world, known for its incredible speed (up to 68 mph) and spectacular fighting ability. Their most distinctive feature is the large dorsal fin that resembles a sail, which they often display when excited or hunting.",
      habitat:
        "Sailfish prefer the warmer waters of the Gulf Stream that flow near the Florida Keys. They can be found in both deep offshore waters and occasionally in shallower areas when pursuing bait.",
      fishingTips:
        "We typically target Sailfish by kite fishing, slow trolling with live baits, or sight casting when conditions allow. Conservation is important to us, so we practice catch and release with these magnificent fish.",
      seasonality:
        "The best time to target Sailfish in the Keys is from November through May, with peak activity usually in January and February.",
    },
    {
      name: "Wahoo",
      image: "/LethalWeapon/images/species/wahoo.jpg",
      scientificName: "Acanthocybium solandri",
      description:
        "Wahoo are among the fastest fish in the sea, capable of short bursts up to 60 mph. They have a sleek, torpedo-shaped body with a beautiful blue-green coloration on top and silvery sides marked with vertical blue bars or stripes. Their meat is considered some of the finest eating of all ocean fish.",
      habitat:
        "Wahoo are typically found in deep, offshore waters around structure like reefs, drop-offs, and wrecks. They prefer clear, blue water with temperatures between 70-86°F.",
      fishingTips:
        "We target Wahoo by high-speed trolling with specialized lures or by using live bait around structure. Their initial strike and run can be explosive, often stripping hundreds of feet of line in seconds.",
      seasonality:
        "While they can be caught year-round in the Keys, the best Wahoo fishing is typically from October through March.",
    },
    {
      name: "Tuna",
      image: "/LethalWeapon/images/species/tuna.jpg",
      scientificName:
        "Thunnus atlanticus (Blackfin), Thunnus albacares (Yellowfin)",
      description:
        "Tuna are powerful, streamlined predators built for speed and endurance. In the Florida Keys, we primarily target Blackfin and occasionally Yellowfin Tuna. They're known for their deep, powerful runs and exceptional fighting ability. Their meat is prized for its rich flavor and is excellent for sashimi.",
      habitat:
        "Tuna are typically found in open water, often around temperature breaks, current edges, and areas with concentrated bait. They can be found from the surface down to considerable depths.",
      fishingTips:
        "We target Tuna using a variety of methods including chunking, live baiting, and trolling. Early morning and late afternoon are often the most productive times.",
      seasonality:
        "Blackfin Tuna can be caught year-round in the Keys, with peak seasons in spring (March-May) and fall (October-December).",
    },
    {
      name: "Yellowtail Snapper",
      image: "/LethalWeapon/images/species/yellow-tail.jpg",
      scientificName: "Ocyurus chrysurus",
      description:
        "Yellowtail Snapper are easily identified by their bright yellow stripe running from their snout to their tail, which is also yellow. They're known for their delicate, flaky white meat with a mild, sweet flavor that makes them one of the most popular food fish in the Keys.",
      habitat:
        "Yellowtails are typically found around coral reefs, rocky bottoms, and occasionally over grass flats. They can be found in waters ranging from 20 to 200 feet deep.",
      fishingTips:
        "We target Yellowtail using light tackle with small hooks and pieces of bait. Chumming is often effective to bring them into a feeding frenzy. They're known for their cautious feeding habits and can be challenging to hook.",
      seasonality:
        "Yellowtail Snapper can be caught year-round in the Florida Keys, with some of the best action during the summer months.",
    },
    {
      name: "Mutton Snapper",
      image: "/LethalWeapon/images/species/mutton-snapper.jpg",
      scientificName: "Lutjanus analis",
      description:
        "Mutton Snapper are distinguished by their olive-green to reddish back, white belly, and distinctive black spot on their side near the tail. They're prized for their firm, white flesh that has an excellent flavor, making them one of the most sought-after food fish in the Keys.",
      habitat:
        "Muttons are found around coral reefs, rocky bottoms, and occasionally over sandy areas. They typically inhabit waters from 25 to 150 feet deep.",
      fishingTips:
        "We target Mutton Snapper using a variety of baits including live pilchards, pinfish, or cut bait. They're known for being wary and can be challenging to catch, requiring stealth and patience.",
      seasonality:
        "Mutton Snapper can be caught year-round, but the spring months (April-June) during their spawning season often produce the best results.",
    },
    {
      name: "Red Grouper",
      image: "/LethalWeapon/images/species/red-grouper.jpg",
      scientificName: "Epinephelus morio",
      description:
        "Red Grouper have a reddish-brown color with irregular white spots and blotches. They're known for their firm, white flesh with a mild, sweet flavor. While not as large as some other grouper species, they're abundant in the Keys and make excellent table fare.",
      habitat:
        "Red Grouper are typically found around rocky bottoms, ledges, and reefs in waters from 20 to 300 feet deep. They're often solitary and territorial, holding tight to structure.",
      fishingTips:
        "We target Red Grouper using heavy tackle with large live baits or cut bait fished near the bottom. Once hooked, they make powerful runs toward their rocky homes, so quick reaction is essential.",
      seasonality:
        "Red Grouper can be caught year-round, subject to seasonal regulations and closures for conservation purposes.",
    },
    {
      name: "Black Grouper",
      image: "/LethalWeapon/images/species/black-grouper.jpg",
      scientificName: "Mycteroperca bonaci",
      description:
        "Black Grouper are dark gray to black with rectangular or irregular dark blotches. They can grow quite large, with specimens over 50 pounds not uncommon. Their meat is firm with a mild flavor, making them highly prized by anglers.",
      habitat:
        "Black Grouper are typically found around reefs, wrecks, and rocky bottoms in waters from 30 to 300 feet deep. Larger specimens tend to be found in deeper waters.",
      fishingTips:
        "We target Black Grouper using heavy tackle with large live baits like blue runners or pinfish. They're known for their powerful first run toward structure, requiring strong gear and quick reflexes.",
      seasonality:
        "Black Grouper can be caught year-round, subject to seasonal regulations and closures for conservation purposes.",
    },
    {
      name: "Red Snapper",
      image: "/LethalWeapon/images/species/red-snapper.jpg",
      scientificName: "Lutjanus campechanus",
      description:
        "Red Snapper are easily identified by their bright red coloration, pointed snout, and triangular-shaped head. They're highly prized for their firm, white flesh that has a sweet, nutty flavor, making them one of the most sought-after food fish in the Gulf.",
      habitat:
        "Red Snapper are typically found around reefs, wrecks, and other structure in waters from 60 to 300 feet deep. They tend to be found in large schools, especially the younger fish.",
      fishingTips:
        "We target Red Snapper using medium to heavy tackle with cut bait, squid, or live bait fished near the bottom. They're known for their aggressive strikes and strong initial runs.",
      seasonality:
        "Red Snapper season in the Gulf is strictly regulated, with specific open seasons announced each year by fishery management agencies.",
    },
  ];

  return (
    <>
      <Head>
        <title>Target Species | Lethal Weapon Fishing Charters</title>
        <meta
          name="description"
          content="Learn about the diverse game fish species we target in the Florida Keys, including Mahi Mahi, Sailfish, Wahoo, Tuna, and various Snapper and Grouper species."
        />
      </Head>

      <div>
        {/* Hero Section */}
        <section className="relative h-[40vh]">
          <div className="absolute inset-0 bg-gray-900/70 z-10" />
          <div
            className="relative h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          >
            <div className="container mx-auto px-4 h-full flex flex-col justify-start pt-8 md:pt-12 relative z-20">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Target Species
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl">
                  The Florida Keys offers some of the most diverse fishing
                  opportunities in the world
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Species Information Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Game Fish of the Florida Keys
              </h2>
              <div className="h-1 w-24 bg-sunset-orange mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                Learn about the various species we target on our charters and
                what makes each one special
              </p>
            </div>

            <div className="space-y-16">
              {speciesData.map((species, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center`}
                  id={species.name.toLowerCase().replace(/\s+/g, "-")}
                >
                  <div className="lg:w-1/2">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={species.image}
                        alt={`${species.name} - Florida Keys fishing`}
                        className="w-full h-[300px] object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "/LethalWeapon/images/fish-placeholder.jpg";
                        }}
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold text-ocean-blue mb-2">
                      {species.name}
                    </h3>
                    <p className="text-gray-500 italic mb-4">
                      {species.scientificName}
                    </p>
                    <p className="text-gray-700 mb-4">{species.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-sunset-orange">
                          Habitat
                        </h4>
                        <p className="text-gray-700">{species.habitat}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-sunset-orange">
                          Fishing Tips
                        </h4>
                        <p className="text-gray-700">{species.fishingTips}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-sunset-orange">
                          Best Time to Catch
                        </h4>
                        <p className="text-gray-700">{species.seasonality}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-ocean-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Catch These Fish?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book your charter today and let our experienced crew help you land
              the fish of a lifetime in the beautiful waters of the Florida
              Keys.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-sunset-orange text-white rounded-lg hover:bg-sunset-orange/90 transform hover:scale-105 transition-all duration-300"
              >
                Book Now
              </Link>
              <Link
                href="/rates"
                className="px-8 py-3 bg-white text-ocean-blue rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                View Rates
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Species;
