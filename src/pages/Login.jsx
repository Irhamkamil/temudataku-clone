import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!email || !password) {
      setErrorMsg("Mohon isi email dan password.");
      return;
    }

    // Simpan email ke localStorage sebagai contoh simpan data user
    localStorage.setItem("userEmail", email);

    // Reset pesan error dan form (opsional)
    setErrorMsg("");
    setEmail("");
    setPassword("");

    alert("Login berhasil! (simulasi, data tersimpan di localStorage)");
    // Di sini Anda bisa arahkan ke halaman lain, pakai navigate, dll.
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1
          className="text-3xl font-bold text-green-700 mb-6 text-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Temu Dataku
        </h1>

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
              placeholder="you@example.com"
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
