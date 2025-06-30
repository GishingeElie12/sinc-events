// app/KnowMe/HeroParallax.tsx
"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string; // video URL
  }[];
}) => {
  // ────────────────────────────────────
  // ▸ Take exactly the first 9 videos
  // ────────────────────────────────────
  const visible = products.slice(0, 9);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const spring = { stiffness: 300, damping: 30, bounce: 100 };

  // A gentle X parallax for the whole grid
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 600]),
    spring
  );

  return (
    <div
      ref={ref}
      className="h-[250vh] py-40 overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      {/* 3 × 3 grid */}
      <motion.div
        style={{ x: translateX }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto"
      >
        {visible.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </motion.div>
    </div>
  );
};

/* ―― Header remains unchanged ――――――――――――――――――――――――――――――――― */
export const Header = () => (
  <div className="max-w-7xl mx-auto py-20 md:py-40 px-4 w-full">
    <h1 className="text-xl md:text-4xl font-bold dark:text-white">
      Gishinge Elie (Lee Elie) <br />
      Visual Storyteller & Creative Director
    </h1>
    <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
      Bringing ideas to life through cinematic visuals, bold edits, and
      captivating narratives. From concept to screen — I turn moments into
      lasting impressions.
    </p>
  </div>
);

/* ―― Individual video card ――――――――――――――――――――――――――――――――――― */
export const ProductCard = ({
  product,
}: {
  product: { title: string; link: string; thumbnail: string };
}) => (
  <motion.div
    whileHover={{ y: -15 }}
    className="group relative h-80 w-full rounded-lg overflow-hidden shadow-lg"
  >
    <Link href={product.link} className="block h-full w-full">
      <video
        src={product.thumbnail}
        className="object-cover object-center h-full w-full"
        autoPlay
        loop
        muted
        playsInline
      />
    </Link>

    {/* Darken + title on hover */}
    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity" />
    <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
      {product.title}
    </h2>
  </motion.div>
);
