// src/hooks/useGalleryItems.ts
import { useState, useEffect } from "react";
import path from "path";
import fs from "fs";

// Define the type for our gallery items
export interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  imagePath: string;
}

// Function to get a random item from an array
const getRandomItem = <T>(items: T[]): T => {
  return items[Math.floor(Math.random() * items.length)];
};

// Function to process images and generate gallery items
export const processGalleryItems = (
  images: string[],
  basePath: string
): GalleryItem[] => {
  return images.map((image, index) => {
    // Determine category based on image name or other criteria
    let category = "charters"; // Default category
    const imageLower = image.toLowerCase();

    // Set default description
    let description =
      "Experience the thrill of fishing in Key Largo with Captain Pete.";

    console.log("Processing image: --->", image);

    // Randomized descriptions for each fish type
    if (
      imageLower.includes("mahi") ||
      imageLower.includes("dolphin") ||
      imageLower.includes("dorado")
    ) {
      const mahiDescriptions = [
        "Look at those colors! This Mahi-Mahi (Dorado) is sporting a neon jacket that would make the 80s jealous!",
        "This Mahi-Mahi is so fresh it was still telling fish jokes when we reeled it in!",
        "Mahi-Mahi: Nature's way of saying 'fish can be prettier than you.' This beauty put up an acrobatic fight!",
        "Dorado dreams do come true! This golden beauty came to the boat after an epic battle of wits and strength.",
        "This Mahi-Mahi is showing off its runway-ready colors. Fish fashion week champion right here!",
      ];
      description = getRandomItem(mahiDescriptions);
    } else if (imageLower.includes("wahoo")) {
      const wahooDescriptions = [
        "Wahoo! No, that's not just excitement - that's what we caught! This speedster nearly spooled the reel!",
        "This Wahoo was doing 60mph when we met. Now it's doing 0mph in our cooler. Speed limit enforced!",
        "If this Wahoo were any faster, it would have gotten a speeding ticket. The Ferrari of the ocean!",
        "Wahoo: the fish so fast it makes Olympic swimmers look like they're doing the doggy paddle.",
        "This Wahoo was caught while it was taking a rare break from breaking the sound barrier.",
      ];
      description = getRandomItem(wahooDescriptions);
    } else if (imageLower.includes("tuna") || imageLower.includes("blackfin")) {
      const tunaDescriptions = [
        "This Blackfin Tuna fought so hard, it's now on our list of personal trainers. What a workout!",
        "Blackfin Tuna: the fish equivalent of that friend who never skips leg day. Pure muscle!",
        "This tuna had abs. Seriously. Six-pack and everything. Strongest fish in the sea!",
        "Caught this Blackfin Tuna after it challenged us to an arm-wrestling contest. Spoiler: we won... eventually.",
        "This tuna was training for the Fish Olympics. Gold medal performance on the end of our line!",
      ];
      description = getRandomItem(tunaDescriptions);
    } else if (
      imageLower.includes("kingfish") ||
      imageLower.includes("king mackerel")
    ) {
      const kingfishDescriptions = [
        "This King Mackerel has teeth sharper than my ex's comebacks. Handle with care!",
        "Kingfish: the torpedo with an attitude. This one left a smoking trail in the water!",
        "Royal treatment for this King Mackerel! It fought like it was defending its throne.",
        "This King Mackerel was caught while plotting world domination. We may have saved humanity.",
        "The King has entered the boat! This mackerel put up a fight worthy of its royal title.",
      ];
      description = getRandomItem(kingfishDescriptions);
    } else if (imageLower.includes("sailfish")) {
      const sailfishDescriptions = [
        "This Sailfish jumped so much we thought it was auditioning for the circus. 10/10 for style!",
        "Sailfish: Nature's way of combining a fish with a Swiss Army knife. What a magnificent creature!",
        "This Sailfish could have won Olympic gold in the high jump. Released to fight another day!",
        "When this Sailfish started jumping, even the seagulls were impressed. A true acrobat of the sea!",
        "This Sailfish thought it was a dolphin with all those aerial maneuvers. Spectacular fight!",
      ];
      description = getRandomItem(sailfishDescriptions);
    } else if (
      imageLower.includes("snapper") ||
      imageLower.includes("mutton")
    ) {
      const snapperDescriptions = [
        "This Mutton Snapper is so pretty, it could be on a Florida Keys postcard. Frame-worthy catch!",
        "Mutton Snapper: the fish that makes you say 'I'm not sharing this one!' Delicious doesn't begin to describe it.",
        "This snapper tried hiding in the reef, but couldn't resist our bait. Sneaky but not sneaky enough!",
        "The perfect dinner guest has arrived! This Mutton Snapper is ready for its butter bath.",
        "This Mutton Snapper fought like it knew how good it was going to taste. Spoiler alert: amazing!",
      ];
      description = getRandomItem(snapperDescriptions);
    } else if (imageLower.includes("grouper")) {
      const grouperDescriptions = [
        "This Grouper is so big, we initially thought we'd hooked the bottom of the ocean!",
        "Grouper: the fish that makes your arms question your life choices while reeling it in.",
        "This Grouper came up from the depths with a grumpy face. Wouldn't you be grumpy if someone interrupted your lunch?",
        "When we hooked this Grouper, the rod bent so much we thought it would snap! Beast from the deep!",
        "This Grouper is built like a linebacker. Solid muscle with an attitude to match!",
      ];
      description = getRandomItem(grouperDescriptions);
    } else if (imageLower.includes("cobia")) {
      const cobiaDescriptions = [
        "This Cobia followed our boat like a curious puppy before taking the bait. Too inquisitive for its own good!",
        "Cobia: the fish that thinks it's a shark until it meets an actual hook. Identity crisis resolved!",
        "This Cobia put up such a fight, we're considering nominating it for a boxing championship.",
        "When this Cobia hit, the rod nearly jumped out of the holder! Aggressive strike from an aggressive fish!",
        "This Cobia was so curious about our boat that it decided to come aboard for a closer look. Hospitality at its finest!",
      ];
      description = getRandomItem(cobiaDescriptions);
    } else if (imageLower.includes("permit")) {
      const permitDescriptions = [
        "This Permit made us work for every inch of line. The diva of the flats finally surrendered!",
        "Catching this Permit was like solving a complex puzzle while balancing on one foot. Challenge accepted and conquered!",
        "This Permit inspected our fly so carefully, we think it might have been a fish food critic in a previous life.",
        "The holy grail of flats fishing! This Permit finally fell for our crab pattern after multiple rejections.",
        "This Permit has a PhD in 'Avoiding Hooks 101', but today it failed the final exam!",
      ];
      description = getRandomItem(permitDescriptions);
    } else if (imageLower.includes("tarpon")) {
      const tarponDescriptions = [
        "This Silver King jumped so high, it got frequent flyer miles. What an aerial display!",
        "Tarpon: the fish that makes you question if you're strong enough to be a fisherman. Arm-breaking power!",
        "When this Tarpon jumped, we could see its gill plates rattling in disapproval. Still came to the boat though!",
        "This Tarpon put on a show that would make Broadway jealous. Standing ovation for this silver performer!",
        "The prehistoric Silver King! This Tarpon fought like it was defending 100 million years of evolutionary pride.",
      ];
      description = getRandomItem(tarponDescriptions);
    } else if (imageLower.includes("barracuda")) {
      const barracudaDescriptions = [
        "This Barracuda has a smile that would make a dentist both proud and terrified!",
        "Barracuda: the fish that's all business in the front, party in the back, and teeth everywhere else.",
        "This 'cuda hit the lure so fast, we didn't even see it coming. Lightning strike of the sea!",
        "When this Barracuda opened its mouth, we counted more sharp points than a geometry test.",
        "This Barracuda was auditioning for the next Jaws movie. We think it got the part!",
      ];
      description = getRandomItem(barracudaDescriptions);
    } else if (imageLower.includes("shark")) {
      const sharkDescriptions = [
        "This shark didn't get the memo that it was supposed to be scary. More like a big puppy with extra teeth!",
        "Shark on! The moment when fishing becomes an extreme sport and your life flashes before your eyes!",
        "This shark came to check if we had proper fishing licenses. Ocean patrol is strict these days!",
        "When this shark showed up, even the other fish started cheering for us. Enemy of their enemy and all that!",
        "This shark thought it was the apex predator until it met Captain Pete. Temporary demotion to second place!",
      ];
      description = getRandomItem(sharkDescriptions);
    } else if (
      imageLower.includes("yellowtail") ||
      imageLower.includes("yellow tail")
    ) {
      const yellowtailDescriptions = [
        "This Yellowtail Snapper is sporting a racing stripe that would make a sports car jealous!",
        "Yellowtail: the fish that dresses better than most people. That yellow streak is pure fashion!",
        "This Yellowtail Snapper was playing hard to get, but our bait game was stronger!",
        "The perfect blend of beauty and flavor! This Yellowtail Snapper is ready for its close-up.",
        "This Yellowtail was the life of the party on the reef until we crashed with our hooks. Sorry not sorry!",
      ];
      description = getRandomItem(yellowtailDescriptions);
    } else if (imageLower.includes("amberjack") || imageLower.includes("aj")) {
      const amberjackDescriptions = [
        "This Amberjack fought so hard, we're considering hiring it as a personal trainer. Arm day champion!",
        "AJ: the 'reef donkey' that kicks harder than actual donkeys. Our backs may never recover!",
        "This Amberjack apparently didn't skip any gym days. Pure muscle with an attitude!",
        "When we hooked this AJ, it decided to test if our drag system was working properly. It was!",
        "This Amberjack thought it could outmuscle us. After 30 minutes of battle, it learned otherwise!",
      ];
      description = getRandomItem(amberjackDescriptions);
    } else if (
      imageLower.includes("multiple") ||
      imageLower.includes("variety") ||
      imageLower.includes("mixed bag")
    ) {
      const mixedBagDescriptions = [
        "We couldn't decide what to catch today, so we caught everything! The seafood buffet is now open!",
        "This mixed bag of fish is like the greatest hits album of the Florida Keys. All the classics in one trip!",
        "Ocean's greatest ensemble cast, now appearing on our boat! Standing ovation for this mixed bag!",
        "When you can't pick a favorite child, you bring them all home! What a variety of beautiful fish!",
        "The fish were having a convention today, and we crashed it with hooks. Sorry for the interruption!",
      ];
      description = getRandomItem(mixedBagDescriptions);
    } else if (
      imageLower.includes("family") ||
      imageLower.includes("kid") ||
      imageLower.includes("child")
    ) {
      const familyDescriptions = [
        "Making fishing memories that will last longer than the 'are we there yet?' car ride to the marina!",
        "Future anglers in training! These kids are already better fishermen than most adults!",
        "Family fishing: where 'quality time' meets 'did you just put that worm in your pocket?!'",
        "The family that fishes together, dishes together! Fresh catch and fresh memories made today!",
        "Teaching the next generation that the best social network is a fishing net. No Wi-Fi needed on the water!",
      ];
      description = getRandomItem(familyDescriptions);
    }

    // For images showing multiple fish or a big catch
    if (
      imageLower.includes("haul") ||
      imageLower.includes("limit") ||
      imageLower.includes("full") ||
      imageLower.includes("many")
    ) {
      const bigCatchDescriptions = [
        "We're going to need a bigger cooler! Epic haul with Captain Pete today!",
        "The fish were practically jumping in the boat! Limit reached in record time!",
        "This isn't a fishing trip, it's a fish harvest festival! What an incredible day!",
        "We came, we saw, we filled the fish box to the brim. Mission accomplished!",
        "The fish were having a meeting today, and we invited ourselves. Full cooler committee formed!",
      ];
      description = getRandomItem(bigCatchDescriptions);
    }

    // Assign category based on image name
    if (
      imageLower.includes("boat") ||
      imageLower.includes("crusader") ||
      imageLower.includes("grady")
    ) {
      category = "boat";
    } else if (
      imageLower.includes("catch") ||
      imageLower.includes("fish") ||
      imageLower.includes("mahi") ||
      imageLower.includes("tuna") ||
      imageLower.includes("snapper") ||
      imageLower.includes("grouper")
    ) {
      category = "catches";
    } else if (
      imageLower.includes("captain") ||
      imageLower.includes("pete") ||
      imageLower.includes("team") ||
      imageLower.includes("crew")
    ) {
      category = "team";
    }

    // Generate a title from the image name
    const fileName = path.basename(image, path.extname(image));
    const title = fileName
      .replace(/[_-]/g, " ")
      .replace(/([A-Z])/g, " $1")
      .replace(/\s+/g, " ")
      .trim();

    return {
      id: index + 1,
      category,
      title: title || "Fishing Charter Photo",
      description,
      imagePath: `${basePath}/images/${image}`,
    };
  });
};

// Hook to use gallery items - can accept pre-loaded images or fetch them
export const useGalleryItems = (
  preloadedImages?: string[],
  preloadedBasePath?: string
) => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    // If we have preloaded images, use them directly
    if (preloadedImages && preloadedBasePath) {
      setGalleryItems(processGalleryItems(preloadedImages, preloadedBasePath));
      return;
    }

    // Otherwise, fetch from the API
    const fetchGalleryItems = async () => {
      try {
        const response = await fetch("/api/gallery-images");
        const data = await response.json();

        if (!data.images || !Array.isArray(data.images)) {
          console.error("Invalid images data received");
          return;
        }

        setGalleryItems(processGalleryItems(data.images, data.basePath));
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };

    fetchGalleryItems();
  }, [preloadedImages, preloadedBasePath]);

  return galleryItems;
};
