"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Truck, Wrench, Package } from 'lucide-react';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("pickup");

  const services = [
    { title: "Pengiriman Kendaraan", image: "/Kendaraan.jpg" },
    { title: "Pengiriman Alat Berat", image: "/Alat_Berat.jpg" },
    { title: "Pengiriman Cargo Project", image: "/Cargo.jpg" },
    { title: "Pengiriman Via Kapal Roro", image: "/Kapal.jpg" },
    { title: "Pengiriman Via Truck (Trucking)", image: "/Trucking.jpg" },
    { title: "Pengiriman Via Laut Dan Darat", image: "/Laut_Darat.jpg" },
    { title: "Pengiriman Via Kontainer", image: "/kontainer.jpg" },
    { title: "Pengiriman Via Kapal Kargo", image: "/Kapal_Kargo.jpg" },
  ];

  return (
    <><div className="bg-white text-gray-900 min-h-screen flex flex-col">
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
                      Kami adalah perusahaan yang bergerak di bidang jasa pengiriman logistik alat berat ke seluruh wilayah Indonesia.
                  </p>
                  <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-md">
                      Layanan Kami
                  </button>
              </div>
              <div className="relative w-full h-64 md:h-96">
                  <Image src="/gudang.jpg" alt="Warehouse" fill className="rounded-lg shadow-lg object-cover" />
              </div>
          </div>

          <div className="flex justify-center items-center bg-[#FBE6B3] py-8">
              <div className="flex bg-white rounded-xl shadow-lg overflow-hidden">
                  <div
                      className={`p-6 flex items-center gap-2 cursor-pointer transition-all ${selectedOption === "pickup" ? "bg-[#F4B43A]" : "bg-white"} rounded-l-xl`}
                      onClick={() => setSelectedOption("pickup")}
                  >
                      <input type="radio" checked={selectedOption === "pickup"} readOnly />
                      <span className="font-semibold">Pick - Up</span>
                  </div>
                  <div
                      className={`p-6 flex items-center gap-2 cursor-pointer transition-all ${selectedOption === "dropoff" ? "bg-[#F4B43A]" : "bg-white"} rounded-r-xl`}
                      onClick={() => setSelectedOption("dropoff")}
                  >
                      <input type="radio" checked={selectedOption === "dropoff"} readOnly />
                      <span className="font-semibold">Drop - Off</span>
                  </div>
              </div>
          </div>

          <div className="flex justify-center items-center bg-[#FBE6B3] pb-8">
              <div className="flex bg-white p-6 rounded-xl shadow-lg gap-6">
                  <div>
                      <p className="font-bold">Locations</p>
                      <select className="mt-1 border-b-2 border-gray-400 focus:outline-none">
                          <option>Select your city</option>
                      </select>
                  </div>
                  <div>
                      <p className="font-bold">Date</p>
                      <select className="mt-1 border-b-2 border-gray-400 focus:outline-none">
                          <option>Select your date</option>
                      </select>
                  </div>
                  <div>
                      <p className="font-bold">Time</p>
                      <select className="mt-1 border-b-2 border-gray-400 focus:outline-none">
                          <option>Select your time</option>
                      </select>
                  </div>
                  <button className="bg-black text-[#F4B43A] font-bold px-6 py-2 rounded-md self-end">
                      Search
                  </button>
              </div>
          </div>

          <div className="px-8 md:px-16 py-12">
              <h2 className="text-center text-3xl md:text-4xl font-bold italic mb-8">
                  Jasa Ekspedisi Kami
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {services.map((service, index) => (
                      <Link key={index} href="/layanan">
                          <div className="relative rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                              <Image src={service.image} alt={service.title} width={400} height={250} className="w-full h-64 object-cover" />
                              <div className="absolute bottom-0 w-full bg-black/50 text-white p-3">
                                  <p className="text-sm italic">Pengiriman</p>
                                  <p className="text-lg font-semibold">{service.title.replace("Pengiriman ", "")}</p>
                              </div>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      </div>
      <div className="bg-white px-16 py-12">
      <h2 className="text-center text-3xl md:text-4xl font-bold italic mb-8">
                  Kenapa Harus Memilih Kami?
              </h2>
              <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                  Kami adalah solusi logistik terpercaya untuk kebutuhan skala besar. Dengan armada lengkap, tim berpengalaman, dan layanan profesional, kami memastikan setiap pengiriman aman, tepat waktu, dan efisien.
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
                      <div className="flex items-start gap-4">
                          <div className="bg-yellow-400 p-3 rounded-lg">
                              <Truck size={32} className="text-black" />
                          </div>
                          <div>
                              <h3 className="text-xl font-semibold">Pengiriman Cepat & Terjamin</h3>
                              <p className="text-gray-600">
                                  Kami memastikan setiap pengiriman dilakukan sesuai jadwal, aman, dan tanpa hambatan.
                              </p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4">
                          <div className="bg-yellow-400 p-3 rounded-lg">
                              <Wrench size={32} className="text-black" />
                          </div>
                          <div>
                              <h3 className="text-xl font-semibold">Armada Lengkap & Terawat</h3>
                              <p className="text-gray-600">
                                  Kami memiliki berbagai jenis armada, termasuk truk, kapal Roro, dan kontainer, yang selalu siap untuk pengiriman.
                              </p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4">
                          <div className="bg-yellow-400 p-3 rounded-lg">
                              <Package size={32} className="text-black" />
                          </div>
                          <div>
                              <h3 className="text-xl font-semibold">Layanan Profesional</h3>
                              <p className="text-gray-600">
                                  Siap memberikan solusi terbaik dan menangani setiap pengiriman dengan penuh tanggung jawab.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div></>

  );     
}
