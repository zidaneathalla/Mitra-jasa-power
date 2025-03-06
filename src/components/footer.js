import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <Image src="/logo.jpg" alt="PT Mitra Jasa Power" width={80} height={60} />
            <p className="footer-vision">
              Our vision is to provide convenience and help increase your sales business.
            </p>
            <div className="footer-social">
              <Link href="#"><img src="/facebook.svg" alt="Facebook" /></Link>
              <Link href="#"><img src="/twitter.svg" alt="Twitter" /></Link>
              <Link href="#"><img src="/instagram.svg" alt="Instagram" /></Link>
            </div>
          </div>
          <div className="footer-links flex flex-wrap gap-x-8">
  <div className="space-y-4">
    <h4 className="text-lg font-extrabold">Home</h4> 
    <Link href="#" className="text-sm block">Introducing</Link> 
    <Link href="#" className="text-sm block">Layanan</Link>
    <Link href="#" className="text-sm block">Alasan Memilih Kami</Link>
    <Link href="#" className="text-sm block">Testimonials</Link>
  </div>
  
  <div className="space-y-2">
    <h4 className="text-lg font-extrabold">Tentang Kami</h4>
    <Link href="#" className="text-sm block">Tentang Kami</Link>
    <Link href="#" className="text-sm block">Komitmen Kami</Link>
    <Link href="#" className="text-sm block">Tujuan Kami</Link>
  </div>
  
  <div className="space-y-2">
  <h4 className="text-lg font-extrabold">Layanan</h4>
  <div className="grid grid-cols-4 gap-4">
    <Link href="#" className="text-sm block">Kendaraan</Link>
    <Link href="#" className="text-sm block">Alat Berat</Link>
    <Link href="#" className="text-sm block">Cargo Project</Link>
    <Link href="#" className="text-sm block">Via Laut dan Darat</Link>
    <Link href="#" className="text-sm block">Via Truck</Link>
    <Link href="#" className="text-sm block">Via Kapal Roro</Link>
    <Link href="#" className="text-sm block">Via Kapal Cargo</Link>
    <Link href="#" className="text-sm block">Via Container</Link>
  </div>
</div>

  
  <div className="space-y-2">
    <h4 className="text-lg font-extrabold">Pusat Bantuan</h4>
    <Link href="#" className="text-sm block">FAQ</Link>
    <Link href="#" className="text-sm block">Panduan</Link>
    <Link href="#" className="text-sm block">Layanan & Kebijakan</Link>
  </div>
</div>

        </div>
        <div className="footer-bottom">
          <p>©2025. PT. MITRA JASA POWER. All rights reserved</p>
          <div className="footer-policy">
            <Link href="#">Privacy & Policy</Link>
            <Link href="#">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
