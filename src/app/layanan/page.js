import Image from "next/image";

export default function Layanan() {
  return (
    <section className="relative w-full h-[450px] flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/kota.png" // ✅ Path benar untuk gambar di folder public
          alt="Background Layanan"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f59e0b]">
          Lebih Mengenal Layanan Kami
        </h2>
        <p className="mt-4 text-lg max-w-2xl">
          Kami menyediakan berbagai layanan pengiriman kendaraan, alat berat, cargo, dan
          kontainer ke seluruh Indonesia dengan keamanan terbaik.
        </p>
      </div>
    </section>
  );
}
