import { sessions } from "../../data";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 text-gray-900">
      <h1 className="text-4xl text-center text-primary font-bold mb-6">
        Tentang TemuDataKu
      </h1>
      <section className="w-full h-full">
        <div className="flex justify-center items-center gap-2">
          <div className="grid grid-cols-2 gap-4 mt-6 max-w-md mx-auto flex-1">
            {sessions.map(({ id, imageUrl, text, className }) => (
              <div
                key={id}
                className={`relative rounded-xl overflow-hidden shadow-md h-56 ${
                  className || ""
                }`}
              >
                <img
                  src={imageUrl}
                  alt={text}
                  className="object-cover w-full h-full"
                />
                {/* Overlay gelap */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-300/50 via-gray-800/40 to-gray-700/60 hover:bg-gradient-to-b hover:from-black/20 hover:via-black/40 flex items-end justify-center p-4 transition">
                  <p className="text-white text-center font-semibold text-lg">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 flex-1 max-w-xl mx-auto p-6">
            <h2 className="text-2xl font-semibold text-secondary mb-6">
              Belajar lebih efektif & latihan langsung dari ahlinya
            </h2>

            <div className="relative flex items-start gap-6">
              <div className="absolute -top-5 -left-10 text-[80px] font-bold text-aksen select-none leading-none">
                1
              </div>
              <div className="text-[40px] font-bold text-aksen select-none leading-none">
                #
              </div>
              <div className="flex-1">
                <div className="text-gray-600 font-semibold tracking-widest mb-2">
                  TemuDataKu
                </div>
                <h3 className="text-secondary text-lg font-semibold mb-2">
                  Terbaik dalam Mentoring Data Science
                </h3>
                <p className="text-gray-500 mb-4 leading-relaxed">
                  Dapatkan bimbingan dari mentor untuk menjawab keraguan mu
                  dalam belajar data science. khusus untuk kamu yang belajar
                  otodidak, kami memberikan akses 1 on 1 maupun kelompok untuk
                  mentoring dan tentu dengan harga yang lebih terjangkau dari
                  mengikuti bootcamp.
                </p>
                <button
                  className="border border-green-600 text-green-600 px-5 py-2 rounded hover:bg-green-600 hover:text-white transition-colors duration-300"
                  type="button"
                >
                  view more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
