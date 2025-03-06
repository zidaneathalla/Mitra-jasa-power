import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.jpg" alt="PT Mitra Jasa Power" width={81} height={50} />
        </div>

        {/* Navigasi */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-black hover:text-orange-500 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tentang-kami" className="text-black hover:text-orange-500 font-medium">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/layanan" className="text-black hover:text-orange-500 font-medium">
                Layanan
              </Link>
            </li>
            <li>
              <Link href="/pusat-bantuan" className="text-black hover:text-orange-500 font-medium">
                Pusat Bantuan
              </Link>
            </li>
          </ul>
        </nav>

        {/* Tombol Pesan Sekarang */}
        <div>
          <Link
            href="/pesan-sekarang"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
