import { Search } from "lucide-react";
import Link from "next/link";

export default function Bantuan() {
  const cards = [
    {
      title: "FAQ",
      description: "Jawaban cepat untuk pertanyaan yang sering diajukan.",
      image: "/FAQ.png",
      slug: "faq",
    },
    {
      title: "Panduan",
      description: "Dapatkan instruksi lengkap dan solusi cepat di sini!",
      image: "/Panduan.png",
      slug: "panduan",
    },
    {
      title: "Layanan dan Kebijakan",
      description: "Informasi tentang layanan kami dan ketentuan yang berlaku.",
      image: "/Layanan.png",
      slug: "layanan-kebijakan",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 md:p-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-6">
        Butuh bantuan? Cari Jawaban Disini!
      </h2>

      {/* Search Bar */}
      <div className="relative w-full max-w-3xl text-black">
  <input
    type="text"
    placeholder="Tulis pertanyaan anda"
    className="w-full p-4 pl-6 pr-14 bg-[#FFE0AB] text-black rounded-full focus:outline-none"
  />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Search className="text-black text-bold"/>
        </button>
      </div>

      {/* Link Hubungi Kami */}
      <p className="mt-4 text-lg">
        <span className="font-semibold text-black">Belum menemukan jawaban?</span>{" "}
        <a href="#" className="text-yellow-500 font-semibold">
          Hubungi Kami
        </a>
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
  {cards.map((card, index) => (
    <Link href={`/bantuan/${card.slug}`} key={index} className="h-full">
      <div className="bg-[#F4B43A] p-6 rounded-lg flex flex-col items-center text-center shadow-lg cursor-pointer hover:bg-yellow-500 transition h-full">
        <img src={card.image} alt={card.title} className="h-20 w-auto mb-4 object-contain" />
        <h3 className="text-xl font-bold text-black">{card.title}</h3>
        <p className="text-black">{card.description}</p>
      </div>
    </Link>
  ))}
</div>
    </div>
  );
}
