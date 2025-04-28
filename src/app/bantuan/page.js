"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';

export default function Bantuan() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allData, setAllData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const kategoriMap = {
    FAQ: "faq",
    Panduan: "panduan",
    "Layanan dan Kebijakan": "layanan-kebijakan",
  };

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
  useEffect(() => {
    fetch("http://localhost:8000/api/pusatbantuan")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      })
      .catch((err) => console.error("Gagal memuat pusat bantuan:", err));
  }, []);

  // Reset hasil pencarian jika searchTerm dikosongkan
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim() === "") return;

    const matches = allData.filter((item) =>
      item.pertanyaan.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matches.length === 1) {
      const slug = kategoriMap[matches[0].kategori];
      if (slug) {
        router.push(
          `/bantuan/${slug}?keyword=${encodeURIComponent(searchTerm)}`
        );
      }
    } else if (matches.length > 1) {
      setSearchResults(matches);
    } else {
      setSearchResults([]);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Pertanyaan tidak ditemukan 😥',
        });
    }
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-6">
        Butuh bantuan? Cari Jawaban Disini!
      </h2>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="relative w-full max-w-3xl text-black"
      >
        <input
          type="text"
          placeholder="Tulis pertanyaan anda"
          className="w-full p-4 pl-6 pr-14 bg-[#FFE0AB] text-black rounded-full focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
        >
          <Search className="text-black text-bold" />
        </button>
      </form>

      {/* Hasil Pencarian */}
      {searchResults.length > 1 && (
        <div className="mt-4 w-full max-w-3xl bg-white rounded shadow p-4">
          <h4 className="font-bold mb-4 text-lg text-black">
            Hasil pencarian:
          </h4>
          <ul>
            {searchResults.map((item, idx) => (
              <li key={idx} className="mb-2 flex items-start">
                <span className="font-bold min-w-[120px] text-black">
                  {item.kategori}:
                </span>{" "}
                <button
                  className="text-blue-700 font-semibold underline hover:underline hover:decoration-2 hover:text-blue-900 transition ml-1 text-left"
                  onClick={() => {
                    const slug = kategoriMap[item.kategori];
                    if (slug) {
                      router.push(
                        `/bantuan/${slug}?keyword=${encodeURIComponent(
                          searchTerm
                        )}`
                      );
                    }
                  }}
                >
                  {item.pertanyaan}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Link Hubungi Kami */}
      <p className="mt-4 text-lg">
        <span className="font-semibold text-black">
          Belum menemukan jawaban?
        </span>{" "}
        <a href="#" className="text-yellow-500 font-semibold">
          Hubungi Kami
        </a>
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {cards.map((card, index) => (
          <Link href={`/bantuan/${card.slug}`} key={index} className="h-full">
            <div className="bg-[#F4B43A] p-6 rounded-lg flex flex-col items-center text-center shadow-lg cursor-pointer hover:bg-yellow-500 transition h-full">
              <img
                src={card.image}
                alt={card.title}
                className="h-20 w-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-bold text-black">{card.title}</h3>
              <p className="text-black">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
