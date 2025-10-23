"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductHeader() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-16 text-center">
        {/* Logo + Button */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-md" />
            <span className="font-semibold text-lg tracking-wide text-gray-800">
              HOUCE
            </span>
          </div>

          <Link
            href="#"
            className="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            Buy Now
          </Link>
        </div>

        {/* Hero content */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Unlock Your World
          </h1>
          <p className="text-gray-500 mb-8 max-w-md">
            Experience seamless connectivity and powerful performance
          </p>

          {/* Image */}
          <Image
  src="/images/1.jpg"
  alt="Product showcase"
  width={344}
  height={443}
  className="object-cover rounded-lg mx-auto"
  priority
/>

        </div>
      </div>

      {/* Wave bottom divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-16 text-white"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,160L80,165.3C160,171,320,181,480,170.7C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
          />
        </svg>
      </div>
    </section>
  );
}
