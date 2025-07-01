import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: "url('/hero-image.jpg')" }}
      className=" relative w-full h-[500px] bg-cover bg-center bg-no-repeat mt-30 md:mt-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300/50 via-gray-800/40 to-gray-400/60"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center h-full">
        <div className=" mb-10 md:mb-0 text-center">
          <h1 className="text-md md:text-2xl font-semibold text-white leading-tight">
            Bosan Belajar Data Science Sendirian?
          </h1>
          <p className="mt-6 font-bold text-white text-4xl md:text-6xl">
            Yuk, Temu Mentor di TemuDataku!
          </p>
          <button
            onClick={() => navigate("/login")}
            className="mt-8 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
