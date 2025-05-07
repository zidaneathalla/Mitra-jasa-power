"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Truck, Wrench, Package, ChevronLeft, ChevronRight } from "lucide-react";
import { Star } from "lucide-react";
import dynamic from "next/dynamic";

// Import MapComponent secara dinamis agar hanya dirender di client
const MapComponent = dynamic(() => import("../components/MapComponent"), { 
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full rounded-xl shadow-lg bg-gray-100 flex items-center justify-center">
      Loading map...
    </div>
  )
});

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("pickup");
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [x, setX] = useState(0);
  const [pengiriman, setPengiriman] = useState([]);






  const scrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * 0.8;
      const newX = Math.min(x + scrollAmount, 0);
      setX(newX);
    }
  };
  
  const scrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * 0.8;
      const newX = Math.max(x - scrollAmount, -width);
      setX(newX);
    }
  };


  
  useEffect(() => {
    fetch("http://localhost:8000/api/services")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((item) => ({
          title: item.title,
          image: item.image
            ? `http://localhost:8000/storage/${item.image}`
            : "/fallback.jpg",
        }));
        setServices(mapped);
      })
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((item) => ({
          name: item.nama,
          location: item.asal,
          rating: item.rating,
          review: item.testimoni,
        }));
        setTestimonials(mapped);
      })
      .catch((err) => console.error("Error fetching testimonials:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const mapped = data.map((item) =>
            item.image
              ? `http://localhost:8000/storage/${item.image}`
              : "/fallback.jpg"
          );
          setGalleryImages(mapped);
        } else {
          console.error("Data tidak sesuai format:", data);
        }
      })
      .catch((err) => console.error("Error fetching gallery:", err));
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth =
        containerRef.current.scrollWidth - containerRef.current.offsetWidth;
      setWidth(totalWidth);
      setX(0); // Reset posisi scroll saat container berubah
    }
  }, [galleryImages]);

  useEffect(() => {
    fetch("http://localhost:8000/api/pengiriman")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setPengiriman(data.data); // Ambil semua data
        }
      })
      .catch((err) => console.error("Error fetching pengiriman:", err));
  }, []);
  


  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 items-center px-8 md:px-16 py-12 gap-8">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Solusi Pengiriman Skala Besar Terpercaya
          </h1>
          <h2
            className="text-2xl md:text-4xl font-bold italic text-gray-800 mt-2"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            PT. MITRA JASA POWER
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Kami adalah perusahaan yang bergerak di bidang jasa pengiriman
            logistik alat berat ke seluruh wilayah Indonesia.
          </p>
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-md">
            Layanan Kami
          </button>
        </div>
        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/gudang.jpg"
            alt="Warehouse"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

     

      {/* Services Section */}
      <div className="px-8 md:px-16 py-12">
        <h2 className="text-center text-3xl md:text-4xl font-bold italic mb-8">
          Jasa Ekspedisi Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} href="/layanan">
              <div className="relative rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-3">
                  <p className="text-sm italic">Pengiriman</p>
                  <p className="text-lg font-semibold">
                    {service.title.replace("Pengiriman ", "")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white px-16 py-12">
        <h2 className="text-center text-3xl md:text-4xl font-bold italic mb-8">
          Kenapa Harus Memilih Kami?
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Kami adalah solusi logistik terpercaya untuk kebutuhan skala besar. Dengan armada
          lengkap, tim berpengalaman, dan layanan profesional, kami memastikan setiap
          pengiriman aman, tepat waktu, dan efisien.
        </p>
        <div className="flex justify-center items-center gap-16">
          <div className="w-1/2 h-[400px] flex items-center justify-center rounded-xl overflow-hidden">
            <img
              src="/tangan.jpg"
              alt="Kenapa Memilih Kami"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-6">
            {[
              {
                icon: <Truck size={32} className="text-black" />,
                title: "Pengiriman Cepat & Terjamin",
                desc: "Kami memastikan setiap pengiriman dilakukan sesuai jadwal, aman, dan tanpa hambatan.",
              },
              {
                icon: <Wrench size={32} className="text-black" />,
                title: "Armada Lengkap & Terawat",
                desc: "Kami memiliki berbagai jenis armada, termasuk truk, kapal Roro, dan kontainer, yang selalu siap untuk pengiriman.",
              },
              {
                icon: <Package size={32} className="text-black" />,
                title: "Layanan Profesional",
                desc: "Siap memberikan solusi terbaik dan menangani setiap pengiriman dengan penuh tanggung jawab.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-[#F4D8A8] min-h-[50vh] flex justify-center items-center p-10 relative overflow-hidden">
  {/* Left Arrow */}
  <button
    onClick={() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: -containerRef.current.offsetWidth * 0.8, behavior: "smooth" });
      }
    }}
    className="absolute left-4 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow"
  >
    <ChevronLeft />
  </button>

  {/* Right Arrow */}
  <button
    onClick={() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: containerRef.current.offsetWidth * 0.8, behavior: "smooth" });
      }
    }}
    className="absolute right-4 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow"
  >
    <ChevronRight />
  </button>

  {/* Scrollable Gallery */}
  <div
    ref={containerRef}
    className="w-full flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 scrollbar-hide"
  >
    {galleryImages.map((src, index) => (
      <div
        key={index}
        className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] snap-start rounded-xl overflow-hidden shadow-lg flex-shrink-0"
      >
        <img
          src={src}
          alt={`Gallery ${index}`}
          className="w-full h-[300px] object-cover"
        />
      </div>
    ))}
  </div>
</div>


{/* Testimonials */}
<div className="py-12 bg-white text-center">
  <h2 className="text-4xl font-bold mb-2">
    Dipercaya oleh Ribuan Pelanggan yang Bahagia
  </h2>
  <p className="text-gray-600 mb-10">
    Kepercayaan pelanggan adalah bukti kualitas layanan kami.
  </p>

    {/* Latest Shipments */}

{/* Leaflet Map */}  
<div className="w-[80%] mx-auto mt-8 mb-12">
      {pengiriman.length > 0 && <MapComponent pengiriman={pengiriman} />}
    </div>



    <h2 className="text-4xl font-bold mb-2">
    Kata Mereka Tentang Kami
  </h2>
  <p className="text-gray-600 mb-10">
    Review Pelanggan Tentang Pelayanan Kami
  </p>
  <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
    {testimonials.map((item, index) => (
      <div
        key={index}
        className="bg-gray-100 rounded-xl shadow-md p-6 text-left max-w-md flex-1"
      >
        <div className="flex justify-between items-center mb-2">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.location}</p>
          </div>
          {/* Rating Stars */}
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className={i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
        <p className="mt-2 text-gray-700">&ldquo;{item.review}&rdquo;</p>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}
