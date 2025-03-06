import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <Image src="/logo.jpg" alt="PT Mitra Jasa Power" width={81} height={50} />
            <p className="footer-vision">
              Our vision is to provide convenience and help increase your sales business.
            </p>
            <div className="footer-social">
              <Link href="#"><img src="/facebook.svg" alt="Facebook" /></Link>
              <Link href="#"><img src="/twitter.svg" alt="Twitter" /></Link>
              <Link href="#"><img src="/instagram.svg" alt="Instagram" /></Link>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h4>Home</h4>
              <Link href="#">Introducing</Link>
              <Link href="#">Layanan</Link>
              <Link href="#">Alasan Memilih Kami</Link>
              <Link href="#">Testimonials</Link>
            </div>
            <div>
              <h4>Tentang Kami</h4>
              <Link href="#">Tentang Kami</Link>
              <Link href="#">Komitmen Kami</Link>
              <Link href="#">Tujuan Kami</Link>
            </div>
            <div>
              <h4>Layanan</h4>
              <Link href="#">Kendaraan</Link>
              <Link href="#">Alat Berat</Link>
              <Link href="#">Cargo Project</Link>
              <Link href="#">Via Laut dan Darat</Link>
              <Link href="#">Via Truck</Link>
              <Link href="#">Via Kapal Roro</Link>
              <Link href="#">Via Kapal Cargo</Link>
              <Link href="#">Via Container</Link>
            </div>
            <div>
              <h4>Pusat Bantuan</h4>
              <Link href="#">FAQ</Link>
              <Link href="#">Panduan</Link>
              <Link href="#">Layanan & Kebijakan</Link>
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
