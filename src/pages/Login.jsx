import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { users } from "../../data"; // pastikan path sesuai lokasi file data.js

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek input kosong
    if (!email || !password) {
      setErrorMsg("Mohon isi email dan password.");
      return;
    }

    // Cari user yang cocok
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Login berhasil
      setErrorMsg("");

      // Simpan info login ke localStorage (bisa sesuaikan)
      localStorage.setItem("userEmail", email);

      alert("Login berhasil!");

      // Contoh redirect ke halaman home setelah login
      navigate("/");

      // Reset form
      setEmail("");
      setPassword("");
    } else {
      // Login gagal
      setErrorMsg("Email atau password salah.");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <Link
          to="/"
          className="flex items-center justify-center space-x-2 mb-4"
        >
          <img src="/logo.webp" alt="Temudataku Logo" className="w-25" />
        </Link>
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMsg && (
            <div className="text-red-600 font-semibold">{errorMsg}</div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-green-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 font-semibold text-green-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white font-semibold py-3 rounded-md hover:bg-green-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
