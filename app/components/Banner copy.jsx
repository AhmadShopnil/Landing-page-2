"use client";

import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <section
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden"
      style={{
        backgroundColor: "#3198A0",
        clipPath:
          "polygon(0 0, 100% 0, 100% 100%, 85% 90%, 70% 88%, 50% 100%, 31% 87%, 19% 87%, 9% 92%, 0 100%)",
      }}
    >
      {/* Background Image Wrapper */}
      <div className="absolute inset-0">
        <Image
          src="/images/1.jpg" // replace with your image
          alt="Product Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Discover the Future of Comfort
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
          Experience quality and innovation with our latest product.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
