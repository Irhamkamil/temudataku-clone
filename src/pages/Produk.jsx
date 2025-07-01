import React from "react";
import { practiceItems } from "../../data";
import CardProduct from "../components/CardProduct";

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16 mt-30">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-2">
            Produk TemuDataku
          </h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Latihan interaktif untuk meningkatkan kemampuan data science Anda
            dengan dataset dan masalah nyata.
          </p>
        </header>
        <div className="grid gap-10 md:grid-cols-2">
          {practiceItems.map(({ title, description, onClick }, index) => (
            <CardProduct
              key={index}
              title={title}
              description={description}
              onClick={onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
