"use client";

import { useState } from "react";

export default function CustomerReviews({ reviews }) {
  const [reviewStart, setReviewStart] = useState(0);
  const reviewsPerView = 1;

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Customer Reviews</h3>
        <div className="flex gap-2">
          <button onClick={() => setReviewStart((r) => Math.max(0, r - 1))} className="p-2 border rounded">◀</button>
          <button onClick={() => setReviewStart((r) => Math.min(reviews.length - 1, r + 1))} className="p-2 border rounded">▶</button>
        </div>
      </div>

      {reviews.slice(reviewStart, reviewStart + reviewsPerView).map((r) => (
        <div key={r.id} className="border rounded-lg p-4">
          <div className="flex justify-between">
            <div className="font-medium">{r.name}</div>
            <div className="text-sm text-yellow-600">
              {Array.from({ length: r.rating }).map((_, i) => "★").join("")}
            </div>
          </div>
          <div className="text-sm text-gray-700 mt-2">{r.text}</div>
        </div>
      ))}
    </div>
  );
}
