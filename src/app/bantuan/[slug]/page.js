"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BantuanDetailPage({ params }) {
  const { slug } = use(params); // ✅ fix: unwrapping params
  const router = useRouter();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const sidebarItems = [
    { title: "FAQ", slug: "faq" },
    { title: "Panduan", slug: "panduan" },
    { title: "Layanan & Kebijakan", slug: "layanan-kebijakan" },
  ];

  const kategoriMap = {
    faq: "FAQ",
    panduan: "Panduan",
    "layanan-kebijakan": "Layanan & Kebijakan"
  };

  useEffect(() => {
    const kategori = kategoriMap[slug]; // Ambil nama kategori asli dari slug
  
    setLoading(true);
    fetch("http://localhost:8000/api/pusatbantuan")
      .then((res) => res.json())
      .then((allData) => {
        const filtered = allData.filter(item => item.kategori === kategori);
        setData(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error("Gagal memuat data:", err);
        setLoading(false);
      });
  }, [slug]);
  

  const handleChangeTopic = (topicSlug) => {
    if (topicSlug !== slug) {
      router.push(`/bantuan/${topicSlug}`);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-6 border-r text-gray-800">
        <h2 className="text-xl font-bold mb-4 text-black">Pusat Bantuan</h2>
        <ul>
          {sidebarItems.map((item) => (
            <li key={item.slug} className="mb-2">
              <button
                onClick={() => handleChangeTopic(item.slug)}
                className={`block w-full text-left p-3 rounded-md ${
                  slug === item.slug
                    ? "bg-gray-300 text-black font-bold"
                    : "hover:bg-gray-200"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Konten */}
      <main className="flex-1 p-6 bg-white text-black">
        <h1 className="text-2xl font-bold text-black mb-4">
          {sidebarItems.find((item) => item.slug === slug)?.title}
        </h1>

        {loading ? (
          <p>Memuat data...</p>
        ) : data.length > 0 ? (
          <div className="space-y-6">
            {data.map((item) => (
              <div key={item.id} className="bg-yellow-100 p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold">{item.pertanyaan}</h3>
                <p className="text-gray-800 mt-2">{item.jawaban}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 italic">Belum ada konten untuk kategori ini.</p>
        )}
      </main>
    </div>
  );
}
