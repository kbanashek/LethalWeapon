// Shared background images for hero sections across the site
export const backgroundImages = [
  // JPEG/jpeg images
  "/LethalWeapon/images/IMG_2528.JPEG",
  "/LethalWeapon/images/IMG_3663.jpeg",
  "/LethalWeapon/images/IMG_4011.jpeg",
  "/LethalWeapon/images/IMG_4104.jpeg",
  "/LethalWeapon/images/IMG_6068.JPEG",
  "/LethalWeapon/images/IMG_6324.JPEG",
  "/LethalWeapon/images/IMG_6936.jpeg",
  "/LethalWeapon/images/Resized_P1010592~2_1717452929313.jpeg",

  // JPG/jpg images
  "/LethalWeapon/images/40999E5C-5BD1-4F52-AA81-0445FE15A5A7.JPG",
  "/LethalWeapon/images/4C5AA957-5B20-4D44-85B3-E7889D637F47.JPG",
  "/LethalWeapon/images/F51B2A51-E8F6-4BB9-9FFE-F6D237F877B0.JPG",
  "/LethalWeapon/images/IMG_0644.jpg",
  "/LethalWeapon/images/IMG_0705.jpg",
  "/LethalWeapon/images/IMG_2585.jpg",
  "/LethalWeapon/images/IMG_2980.jpg",
  "/LethalWeapon/images/IMG_4176.JPG",
  "/LethalWeapon/images/IMG_5124.jpg",
  // Excluding screenshots and PNG files as they may not be suitable for backgrounds
];

// Function to get a random image from the background images array
export const getRandomBackgroundImage = (): string => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
};
