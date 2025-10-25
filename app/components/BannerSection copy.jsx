"use client";

export default function BannerSection({ product }) {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{product.subtitle}</p>

          <div className="flex gap-4 items-center">
            <div className="text-3xl font-bold">৳{product.price}</div>
            <div className="text-sm text-gray-500 line-through">৳{product.originalPrice}</div>
            <div className="ml-4 text-sm text-green-600 font-medium">{product.rating} ★</div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
              className="px-6 py-3 bg-black text-white rounded-2xl shadow hover:opacity-95"
            >
              Buy Now
            </button>
            
          </div>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.specialties.map((s, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-center gap-2">✓ {s}</li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div
            className="w-[360px] h-[420px] lg:w-[480px] lg:h-[520px] bg-gradient-to-tr from-indigo-400 via-pink-400 to-yellow-300 rounded-3xl overflow-hidden shadow-2xl transform rotate-3"
            style={{ clipPath: "polygon(0 12%, 100% 0, 100% 85%, 0 100%)" }}
          >
            <img src={product.images[0]} alt="product" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-8 right-8 bg-white p-3 rounded-lg shadow-md text-sm">
            <div className="font-medium">Limited Edition</div>
            <div className="text-xs text-gray-500">Free exchange within 7 days</div>
          </div>
        </div>
      </div>
    </section>
  );
}
