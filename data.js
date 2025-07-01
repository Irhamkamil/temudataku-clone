export const sessions = [
  {
    id: 1,
    imageUrl: "/about-img1.jpg",
    text: "1 on 1 Session dengan mentor"
  },
  {
    id: 2,
    imageUrl: "/about-img4.jpg", // contoh gambar, ganti dengan sumber gambar Anda
    text: "Akselerasi Impian Data Science",
    className: "mt-20"
  },
  {
    id: 3,
    imageUrl: "/about-img2.jpg", // contoh gambar, ganti dengan sumber gambar Anda
    text: "Perdalam latihan dengan ulasan dari mentor",
    className: "-mt-20"
  },
  {
    id: 4,
    imageUrl: "/about-img3.jpg", // contoh gambar, ganti dengan sumber gambar Anda
    text: "Harga Terjangkau"
  }
];

export const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/produk", label: "Produk" }
];

export const services = [
  {
    title: "1-on-1 & Group Mentoring",
    description:
      "Dapatkan bimbingan langsung dari profesional berpengalaman di bidang data science.",
    imageUrl: "/services-img1.jpg"
  },
  {
    title: "Bootcamp Data Analyst",
    description:
      "Belajar secara intensif dengan materi lengkap dan praktek proyek nyata.",
    imageUrl: "/services-img3.jpg"
  },
  {
    title: "Latihan Praktik",
    description:
      "Sesi latihan untuk meningkatkan kemampuan di bidang data science dan machine learning.",
    imageUrl: "/services-img2.jpg"
  }
];

export const users = [
  { email: "user1@example.com", password: "examplePassword1" },
  { email: "user2@example.com", password: "examplePassword2" }
  // Anda bisa tambah user lain di sini
];

export const practiceItems = [
  {
    title: "Data Analysis - Customer Analysis",
    description:
      "Kamu akan belajar cara menganalisis pelanggan, mencari trend yang tersembunyi, dan bagaimana prospek pelanggan kedepannya.",
    onClick: () => alert("Memulai latihan Data Analysis - Customer Analysis")
  },
  {
    title: "Machine Learning - NLP",
    description:
      "Kamu akan belajar bagaimana cara mengolah teks, menganalisis sentiment, dan juga klasifikasi teks seperti spam detection dan sejenisnya.",
    onClick: () => alert("Memulai latihan Machine Learning - NLP")
  },
  {
    title: "Data Scientist - Churn Prediction",
    description:
      "Kamu akan belajar mulai dari membersihkan data dan membuat model untuk memprediksi kemungkinan pelanggan melakukan churn.",
    onClick: () => alert("Memulai latihan Data Scientist - Churn Prediction")
  },
  {
    title: "Machine Learning - Classification",
    description:
      "Kamu akan belajar mulai dari pemrosesan data seperti feature enginering, encoding, dan labelling. Kamu juga akan menggunakan package untuk melakukan pemodelan klasifikasi.",
    onClick: () => alert("Memulai latihan Machine Learning - Classification")
  }
];
