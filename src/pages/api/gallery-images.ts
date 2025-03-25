// src/pages/api/gallery-images.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get all image files from the public/images directory
    const imagesDirectory = path.join(process.cwd(), "public/images");
    const imageFiles = fs.readdirSync(imagesDirectory);

    // Filter for image files only
    const imageExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".JPG",
      ".JPEG",
      ".PNG",
    ];
    const images = imageFiles.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return (
        imageExtensions.includes(ext) ||
        imageExtensions.includes(ext.toUpperCase())
      );
    });

    // Return the images and basePath
    res.status(200).json({
      images,
      basePath: "/LethalWeapon", // Get this from your next.config.js
    });
  } catch (error) {
    console.error("Error in gallery-images API:", error);
    res.status(500).json({ error: "Failed to fetch gallery images" });
  }
}
