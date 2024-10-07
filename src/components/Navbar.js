import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-start h-16 items-center">
          <div className="text-white text-3xl font-extrabold italic tracking-wide transform transition-transform duration-500 hover:scale-105 hover:text-yellow-300">
            Scratch
          </div>
        </div>
      </div>
    </nav>
  );
}
