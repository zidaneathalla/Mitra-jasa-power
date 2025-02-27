import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <img src="/logo.jpg" alt="logo mitra"/>
        </Link>
      </div>
      <nav className="nav-menu">
        <Link href="/">Home</Link>
        <Link href="/tentang">Tentang Kami</Link>
        <Link href="/layanan">Layanan</Link>
        <Link href="/bantuan">Pusat Bantuan</Link>
      </nav>
      <div className="btn-container">
        <Link href="/pesan" className="btn-pesan">
          Pesan Sekarang
        </Link>
      </div>
    </header>
  );
};

export default Header;
