"use client";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="font-bold text-lg">LUKAZ</div>
          <div className="text-sm text-gray-400 mt-2">
             Find your items.
          </div>
        </div>

        <div>
          <div className="font-medium mb-2">Quick Links</div>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="font-medium mb-2">Contact</div>
          <div className="text-sm text-gray-400">support@tlukaz.com</div>
          <div className="text-sm text-gray-400 mt-1">+8801XXXXXXXXX</div>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Lukaz. All rights reserved.
      </div>
    </footer>
  );
}
