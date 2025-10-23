"use client";

export default function ProductSpecialties({ specialties }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="font-semibold mb-3">Product Specialties</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {specialties.map((s, i) => (
          <div key={i} className="p-3 border rounded-lg">
            <div className="font-medium">{s}</div>
            <div className="text-xs text-gray-500 mt-1">
              High-quality detail about the feature goes here.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
