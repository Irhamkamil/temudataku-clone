import React from "react";

const plans = [
  {
    name: "Basic",
    price: "Gratis",
    features: ["Akses dataset dasar", "Export csv", "Support komunitas"]
  },
  {
    name: "Pro",
    price: "Rp 99.000 / bulan",
    features: [
      "Akses dataset lengkap",
      "Export csv & excel",
      "Dukungan prioritas"
    ]
  },
  {
    name: "Enterprise",
    price: "Hubungi Kami",
    features: ["Akses tanpa batas", "Data custom & API", "Support dedicated"]
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-blue-50 text-center px-4">
      <h2 className="text-3xl font-bold mb-12 text-primary">Paket Langganan</h2>
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {plans.map(({ name, price, features }, id) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-4">{name}</h3>
            <p className="text-xl font-bold text-primary mb-6">{price}</p>
            <ul className="mb-6 flex-grow text-left">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="mb-2 before:content-['✓'] before:text-green-500 before:mr-2"
                >
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-auto bg-primary text-white py-3 rounded-md hover:bg-primaryDark transition">
              Pilih Paket
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
