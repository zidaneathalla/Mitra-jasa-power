'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Pengiriman",
    highlight: "Kendaraan",
    description:
      "Kami melayani pengiriman mobil, motor, truk, dan kendaraan niaga dengan metode towing, car carrier, kapal Roro, dan kontainer. Pengiriman dilengkapi pelacakan real-time dan asuransi untuk keamanan maksimal.",
    image: "/Kendaraan.jpg",
  },
  {
    title: "Pengiriman",
    highlight: "Alat Berat",
    description:
      "Kami menyediakan layanan pengiriman alat berat seperti excavator, crane, dan bulldozer dengan keamanan tinggi dan asuransi.",
    image: "/Alat_Berat.jpg",
  },
  {
    title: "Pengiriman",
    highlight: "Cargo Proyek",
    description:
      "Layanan pengiriman cargo proyek untuk kebutuhan industri dan konstruksi dengan solusi logistik terbaik.",
    image: "/cargo.jpg",
  },
];

export default function Layanan() {
  return (
    <section className="relative w-full flex flex-col items-center text-center">
      {/* Background Image */}
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/kota.png"
            alt="Background Layanan"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
        </div>
        <div className="relative z-10 text-white px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f59e0b]">
            Lebih Mengenal Layanan Kami
          </h2>
          <p className="mt-4 text-lg max-w-3xl">
            Kami menyediakan berbagai layanan pengiriman kendaraan, alat berat, cargo, dan
            kontainer ke seluruh Indonesia dengan keamanan terbaik.
          </p>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="relative max-w-7xl w-full mx-auto mt-12 px-6 pb-24">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="relative w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                {/* Gambar */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={slide.image}
                    alt={slide.highlight}
                    className="w-full md:w-[550px] h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                {/* Teks */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                    <span className="italic text-[#425A78]">{slide.title}</span>{" "}
                    <span className="text-[#F4B74D]">{slide.highlight}</span>
                  </h2>
                  <p className="text-[#333] text-lg md:text-xl leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tombol Navigasi */}
        <button className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 !text-black font-extrabold">
  <ChevronLeft size={100} />
</button>
<button className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 !text-black font-extrabold">
  <ChevronRight size={100} />
</button>
      </div>
    </section>
  );
}
