// Shared background images for hero sections across the site
export const backgroundImages = [
  "/LethalWeapon/images/IMG_3663.jpeg",
  "/LethalWeapon/images/IMG_4011.jpeg",
  "/LethalWeapon/images/IMG_4104.jpeg",
  "/LethalWeapon/images/IMG_6936.jpeg",
  "/LethalWeapon/images/Resized_P1010592~2_1717452929313.jpeg"
];

// Function to get a random image from the background images array
export const getRandomBackgroundImage = (): string => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
};
