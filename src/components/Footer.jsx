import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} TemuDataKu. All rights reserved.</p>
        <p className="mt-2">
          Ikuti kami di{" "}
          <a href="#" className="hover:underline text-blue-500">
            Twitter
          </a>
          ,{" "}
          <a href="#" className="hover:underline text-blue-500">
            Facebook
          </a>
          , dan{" "}
          <a href="#" className="hover:underline text-blue-500">
            Instagram
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
