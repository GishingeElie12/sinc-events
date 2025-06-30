"use client";
import React from "react";
import { HeroParallax } from "@/components/blocks/hero-parallax";

export default function Hero() {
  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <HeroParallax products={products} />
      </div>
    </div>
  );
}

// Example video portfolio items (replace with actual .mp4 URLs)
export const products = [
  {
    title: "Moonbeam",
    link: "https://res.cloudinary.com/dqvfbew5l/video/upload/v1751291390/copy_6C9B9E1D-E11E-4F9A-8FF9-F3040391BC4B_gqkf7t.mov",
    thumbnail: "/video2.mp4",
  },
  {
    title: "Cursor",
    link: "https://res.cloudinary.com/dqvfbew5l/video/upload/v1751301802/c310aed76a5548049e3a4b4676e23ef4_lrzgba.mp4",
    thumbnail: "/video6.mp4",
  },
  {
    title: "Rogue",
    link: "https://res.cloudinary.com/dqvfbew5l/video/upload/v1751295181/F5468998-C8A2-4F5E-B342-A2D14CFE0C06_ywmvot.mov",
    thumbnail: "/video5.mp4",
  },
  
];
