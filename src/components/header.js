"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // Mendapatkan path halaman saat ini

  return (
    <header className="header flex items-center justify-between p-4">
      {/* Logo */}
      <div className="logo">
        <Link href="/">
          <img src="/logo.jpg" alt="logo mitra" />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu flex space-x-6">
  <Link href="/" className="cursor-pointer text-black font-extrabold hover:text-[#f59e0b] transition-colors duration-300">
    Home
  </Link>
  <Link href="/tentang-kami" className="cursor-pointer text-black font-extrabold hover:text-[#f59e0b] transition-colors duration-300">
    Tentang Kami
  </Link>
  <Link href="/layanan" className="cursor-pointer text-black font-extrabold hover:text-[#f59e0b] transition-colors duration-300">
    Layanan
  </Link>
  <Link href="/bantuan" className="cursor-pointer text-black font-extrabold hover:text-[#f59e0b] transition-colors duration-300">
    Pusat Bantuan
  </Link>
      </nav>

      {/* Button Pesan Sekarang */}
      <div className="">
  <Link href="/pesan">
    <span className="btn-pesan bg-black text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#f59e0b] hover:text-white">
      Pesan Sekarang
    </span>
  </Link>
</div>

    </header>
  );
}
