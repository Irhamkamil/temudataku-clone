import React from "react";

const services = [
  {
    title: "Dataset Lengkap",
    description:
      "Ribuan dataset lengkap dari berbagai kategori yang terus diperbarui."
  },
  {
    title: "Mudah Diakses",
    description:
      "Antarmuka yang user-friendly untuk mempermudah pencarian data Anda."
  },
  {
    title: "Analisis Insight",
    description: "Dapatkan insight berharga dari data yang akurat."
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-900">
        Kenapa Memilih TemuDataKu?
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {services.map(({ title, description }, id) => (
          <div
            key={id}
            className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
