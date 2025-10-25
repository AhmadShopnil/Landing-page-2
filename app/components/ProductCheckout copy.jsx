"use client";

import { useState } from "react";

export default function ProductCheckout({ product }) {
  // Shipping data (district → charge)
  const districtCharges = {
    Dhaka: 60,
    Tangail: 50,
    Gazipur: 70,
    Chattogram: 120,
    Sylhet: 140,
    Rajshahi: 130,
    Other: 180,
  };

  // Form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    district: "Dhaka",
    thana: "",
    address: "",
  });

  const shippingCharge = districtCharges[form.district] ?? districtCharges["Other"];

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [quantity, setQuantity] = useState(1);

  const subtotal = +(product.price * quantity).toFixed(2);
  const total = +(subtotal + shippingCharge).toFixed(2);

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleBuyNow() {
    alert(
      `Order placed!\n\nProduct: ${product.title}\nColor: ${selectedColor}\nSize: ${selectedSize}\nQty: ${quantity}\nDistrict: ${form.district}\nShipping: ৳${shippingCharge}\nTotal: ৳${total}`
    );
  }

  return (
    <aside className="lg:col-span-1 ">
      {/* Main purchase card */}
      <div className="bg-white rounded-2xl shadow p-6 sticky top-6">
        <h2 className="font-semibold text-lg">{product.title}</h2>
        <div className="text-sm text-gray-500 mb-4">SKU: {product.id}</div>

        {/* Pricing */}
        <div className="flex items-baseline gap-3">
          <div className="text-2xl font-bold">৳{product.price}</div>
          <div className="text-sm text-gray-500 line-through">৳{product.originalPrice}</div>
        </div>

        {/* Color selector */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Color</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full border rounded p-2"
          >
            {product.colors.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Size selector */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Size</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full border rounded p-2"
          >
            {product.sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

   

        {/* Shipping Info Form */}
        <div className="mt-6">
          <h4 className="font-medium mb-2">Shipping Info</h4>
          <div className="space-y-3">
            <input
              name="name"
              value={form.name}
              onChange={handleFormChange}
              placeholder="Full name"
              className="w-full border rounded p-2"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleFormChange}
              placeholder="Phone number"
              className="w-full border rounded p-2"
            />

            <select
              name="district"
              value={form.district}
              onChange={handleFormChange}
              className="w-full border rounded p-2"
            >
              {Object.keys(districtCharges).map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <input
              name="thana"
              value={form.thana}
              onChange={handleFormChange}
              placeholder="Thana / Upazila"
              className="w-full border rounded p-2"
            />
            <textarea
              name="address"
              value={form.address}
              onChange={handleFormChange}
              placeholder="Address"
              className="w-full border rounded p-2"
              rows={3}
            />



            {/* Quantity */}
            <div className="  ">
              <label className="text-sm">Quantity</label>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 border rounded"
                >
                  -
                </button>
                <div className="w-10 text-center">{quantity}</div>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>৳{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>Shipping</span>
                <span>৳{shippingCharge}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-3">
                <span>Total</span>
                <span>৳{total}</span>
              </div>


            </div>


            <button
              onClick={handleBuyNow}
              className="w-full mt-4 bg-black text-white py-2.5 rounded-lg cursor-pointer transition"
            >
              Buy Now
            </button>
           
          </div>
        </div>
      </div>

      {/* Help Card */}
      <div className="mt-6 bg-white rounded-2xl shadow p-4 text-sm">
        <div className="font-medium">Need help?</div>
        <div className="text-gray-600 mt-1">
          Call +8801XXXXXXXX for quick assistance or chat with us.
        </div>
      </div>
    </aside>
  );
}
