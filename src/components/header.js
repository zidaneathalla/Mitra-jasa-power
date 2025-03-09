"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Dapatkan path halaman saat ini
  console.log("Current Path:", pathname);

  return (
    <header className="header flex items-center justify-between p-4">
      {/* Logo */}
      <div className="logo">
          <img src="/logo.jpg" alt="logo mitra" />

      </div>

      {/* Navigation Menu */}
      <nav className=" gap-8 flex space-x-6">
        <Link
          href="/"
          className={`cursor-pointer font-extrabold transition-colors duration-300 ${
            pathname === "/home " ? "text-[#f59e0b]" : "text-black hover:text-[#f59e0b]"
          }`}
        >
          Home
        </Link>
        <Link
          href="/tentang-kami"
          className={`cursor-pointer font-extrabold transition-colors duration-300 ${
            pathname === "/tentang-kami" ? "text-[#f59e0b]" : "text-black hover:text-[#f59e0b]"
          }`}
        >
          Tentang Kami
        </Link>
        <Link
          href="/layanan"
          className={`cursor-pointer font-extrabold transition-colors duration-300 ${
            pathname === "/layanan" ? "text-[#f59e0b]" : "text-black hover:text-[#f59e0b]"
          }`}
        >
          Layanan
        </Link>
        <Link
          href="/bantuan"
          className={`cursor-pointer font-extrabold transition-colors duration-300 ${
            pathname === "/bantuan" ? "text-[#f59e0b]" : "text-black hover:text-[#f59e0b]"
          }`}
        >
          Pusat Bantuan
        </Link>
      </nav>

    {/* Button Pesan Sekarang */}
<div>
  <Link href="https://wa.me/6282114352721" target="_blank">
    <span className="btn-pesan bg-black text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[f59e0b]]">
      Pesan Sekarang
    </span>
  </Link>
</div>

    </header>
  );
}
