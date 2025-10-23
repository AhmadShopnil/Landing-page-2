"use client";

import { useState, useMemo } from "react";
import BannerSection from "../components/BannerSection";
import ProductImages from "../components/ProductImages";
import ProductSpecialties from "../components/ProductSpecialties";
import ProductCheckout from "../components/ProductCheckout";
import CustomerReviews from "../components/CustomerReviews";
import FooterSection from "../components/FooterSection";
import ProductHeader from "../components/Demo1/ProductHeader";


export default function ProductLanding() {
  const product = useMemo(() => ({
    id: "ts-001",
    title: "AeroFlex Classic Tee",
    subtitle: "Comfort meet style — breathable everyday tee",
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.6,
    sold: 1248,
    images: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
    ],
    specialties: [
      "Breathable Aero fabric",
      "Anti-odor treatment",
      "4-way stretch",
      "Pre-shrunk & colorfast",
    ],
    colors: ["Black", "White", "Olive", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  }), []);

  const reviews = useMemo(() => [
    { id: 1, name: "Rafi", text: "Super comfy and fits perfectly. Good value!", rating: 5 },
    { id: 2, name: "Maya", text: "Lovely fabric — breathable on hot days.", rating: 4 },
    { id: 3, name: "Arif", text: "Color stayed after many washes.", rating: 5 },
    { id: 4, name: "Sima", text: "Nice stitching but a bit long for me.", rating: 4 },
    { id: 5, name: "Tanvir", text: "Fast delivery and good packaging.", rating: 5 },
  ], []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <BannerSection product={product} />
      {/* <ProductHeader/> */}
      <main className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <ProductImages product={product} />
          <ProductSpecialties specialties={product.specialties} />
          <ProductCheckout product={product} />
          <CustomerReviews reviews={reviews} />
        </div>
        
      </main>
      <FooterSection />
    </div>
  );
}
