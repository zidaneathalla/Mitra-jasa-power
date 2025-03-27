"use client"; // Pakai use client karena kita gunakan state

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BantuanDetailPage({ params }) {
  const { slug } = params;
  const router = useRouter();
  
  // State untuk konten aktif
  const [selectedTopic, setSelectedTopic] = useState(slug);

  // Data menu sidebar
  const sidebarItems = [
    { title: "FAQ", slug: "faq" },
    { title: "Panduan", slug: "panduan" },
    { title: "Layanan & Kebijakan", slug: "layanan-kebijakan" },
  ];

  // Data konten berdasarkan slug
  const contentData = {
    faq: "Ini adalah halaman FAQ yang berisi pertanyaan yang sering diajukan.",
    panduan: "Ini adalah halaman Panduan untuk membantu pengguna.",
    "layanan-kebijakan": "Halaman ini berisi informasi tentang layanan dan kebijakan kami.",
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-6 border-r text-gray-800">
        <h2 className="text-xl font-bold mb-4 text-black">Pusat Bantuan</h2>
        <ul>
          {sidebarItems.map((item) => (
            <li key={item.slug} className="mb-2">
              <button
                onClick={() => setSelectedTopic(item.slug)}
                className={`block w-full text-left p-3 rounded-md ${
                  selectedTopic === item.slug
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

      {/* Konten Detail */}
      <main className="flex-1 p-6 bg-white text-black">
        <h1 className="text-2xl font-bold text-black">
          {`Detail ${sidebarItems.find((item) => item.slug === selectedTopic)?.title}`}
        </h1>
        <p className="mt-4 text-lg text-gray-800">
          {contentData[selectedTopic] || "Maaf, halaman yang Anda cari tidak ditemukan."}
        </p>
      </main>
    </div>
  );
}
