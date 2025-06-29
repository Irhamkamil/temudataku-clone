import React from "react";

const programs = [
  {
    title: "Mentoring 1-on-1",
    description:
      "Dapatkan bimbingan langsung dari profesional berpengalaman di bidang data science.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14v7m-6-7h12"
        />
      </svg>
    )
  },
  {
    title: "Bootcamp Data Analyst",
    description:
      "Belajar secara intensif dengan materi lengkap dan praktek proyek nyata.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20h9M12 4h9M4 12h16M4 12l4-4M4 12l4 4"
        />
      </svg>
    )
  },
  {
    title: "Latihan Praktik",
    description:
      "Sesi latihan untuk meningkatkan kemampuan di bidang data science dan machine learning.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-6a4 4 0 118 0v6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-4m-6-4h12"
        />
      </svg>
    )
  }
];

export default function Programs() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-12 text-center">
        Layanan Kami
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {programs.map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div>{icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-blue-900">
              {title}
            </h3>
            <p className="mt-2 text-blue-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
