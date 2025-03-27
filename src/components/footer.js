import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="footer-top flex flex-wrap justify-between items-start gap-8">
          <div className="footer-logo space-y-4">
            <Image src="/logo.jpg" alt="PT Mitra Jasa Power" width={100} height={80} />
            <p className="text-gray-300 max-w-sm">
              Our vision is to provide convenience and help increase your sales business.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="border-2 border-white p-3 rounded-full flex items-center justify-center w-10 h-10">
                <Facebook className="w-10 h-10 text-white stroke-white" />
              </Link>
              <Link href="#" aria-label="Twitter" className="border-2 border-white p-3 rounded-full flex items-center justify-center w-10 h-10">
                <Twitter className="w-10 h-10 text-white stroke-white" />
              </Link>
              <Link href="#" aria-label="Instagram" className="border-2 border-white p-3 rounded-full flex items-center justify-center w-10 h-10">
                <Instagram className="w-10 h-10 text-white stroke-white" />
              </Link>
            </div>
          </div>

          <div className="footer-links flex flex-wrap gap-x-10">
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Home</h4>
              <Link href="#" className="text-sm block text-gray-400 hover:text-white">Introducing</Link>
              <Link href="#" className="text-sm block text-gray-400 hover:text-white">Layanan</Link>
              <Link href="#" className="text-sm block text-gray-400 hover:text-white">Alasan Memilih Kami</Link>
              <Link href="#" className="text-sm block text-gray-400 hover:text-white">Testimonials</Link>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold">Tentang Kami</h4>
              <Link href="#" className="text-sm block text-gray-400 hover:text-white">Tentang Kami</Link>
              <Link href="#" className="text-sm block text-gray-400 hover:text-white">Komitmen Kami</Link>
              <Link href="#" className="text-sm block text-gray-400 hover:text-white">Tujuan Kami</Link>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold">Layanan</h4>
              <div className="grid grid-cols-2 gap-4">
                <Link href="#" className="text-sm block text-gray-400 hover:text-white">Kendaraan</Link>
                <Link href="#" className="text-sm block text-gray-400 hover:text-white">Alat Berat</Link>
                <Link href="#" className="text-sm block text-gray-400 hover:text-white">Cargo Project</Link>
                <Link href="#" className="text-sm block text-gray-400 hover:text-white">Via Laut & Darat</Link>
                <Link href="#" className="text-sm block text-gray-400 hover:text-white">Via Truck</Link>
                <Link href="#" className="text-sm block text-gray-400 hover:text-white">Via Kapal Roro</Link>
                <Link href="#" className="text-sm block text-gray-400 hover:text-white">Via Kapal Cargo</Link>
                <Link href="#" className="text-sm block text-gray-400 hover:text-white">Via Container</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold">Pusat Bantuan</h4>
              <Link href="#" className="text-sm block text-gray-400 hover:text-white">FAQ</Link>
              <Link href="#" className="text-sm block text-gray-400 hover:text-white">Panduan</Link>
              <Link href="#" className="text-sm block text-gray-400 hover:text-white">Layanan & Kebijakan</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-10 border-t border-gray-700 pt-6 flex justify-between items-center text-sm text-gray-400">
          <p>©2025. PT. MITRA JASA POWER. All rights reserved</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white">Privacy & Policy</Link>
            <Link href="#" className="hover:text-white">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
