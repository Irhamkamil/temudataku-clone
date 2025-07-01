import { services } from "../../data";

export default function Programs() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">
        Layanan TemuDataku
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {services.map(({ title, description, imageUrl }) => (
          <div
            key={title}
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
          >
            {/* Image with slide-up on hover */}
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:-translate-y-4"
            />

            {/* Title bar always visible */}
            <div className="absolute bottom-0 left-0 right-0 bg-green-700/70 text-white text-center py-2 font-semibold text-md select-none">
              {title}
            </div>

            {/* Description overlay on hover */}
            <div className="absolute inset-0 bg-green-900/70 text-white p-6 flex flex-col justify-center items-center opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-center">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
