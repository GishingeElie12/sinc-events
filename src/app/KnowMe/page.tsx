"use client";

import React from "react";
import Image from "next/image";

const KnowMePage: React.FC = () => {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 flex flex-col gap-10">
      <section className="text-center flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          👋 Hey, I’m <span className="text-primary">[Gishinge Elie]</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          I make engaging video content—everything from quick-fire reels to full
          production tutorials—using and i`m also a <strong>UI/UX designer</strong> <strong>Cap cut</strong>, Figma, Adobe photoshopt and more.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Featured Work</h2>
          <p>
            I’ve worked on content for&nbsp;
            <a
              href="https://www.instagram.com/chroste.labs"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              @chroste.labs
            </a>, including:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>🎬 Reels with 1.5k+ average views</li>
            <li>📊 Strategy that increased engagement</li>
            <li>🎤 On-camera interviews + fast edits</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/image.jpg" // ✅ your static image
            alt="My profile"
            width={192}
            height={192}
            className="rounded-full object-cover shadow-md"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Sinc Events?</h2>
        <p>
          I’d love to join the Sinc Events team and bring creative, authentic
          content energy to your campaigns and live experiences.
        </p>
      </section>

      <Image
            src="/images/image2.jpg" // ✅ your static image
            alt="My profile"
            width={200}
            height={200}
            className="full object-cover shadow-md"
          />
    </main>
  );
};

export default KnowMePage;
