export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF]">
      <div className="self-stretch h-auto">
        <div className="flex flex-col md:flex-row items-start bg-[#FFFFFF] px-6 md:px-[112px]">
          {/* Bagian Gambar */}
          <div className="flex flex-1 flex-col items-start relative mt-[80px] mb-[60px] md:mt-[120px] md:mb-[104px] md:mr-[64px]">
            <img
              src="tentangkami.png"
              className="w-full md:w-[471px] h-[500px] md:h-[700px] rounded-[10px] object-cover"
              alt="Tentang Kami"
            />
            {/* Box Quote */}
            <div className="flex flex-col bg-[#E6E6E6] w-full md:w-[477px] absolute bottom-4 md:bottom-[59px] right-0 rounded-[10px] p-4">
              <div className="flex items-center">
                <img
                  src="owner.jpeg"
                  className="w-[54px] h-[54px] mr-4 object-cover rounded-full"
                  alt="Founder"
                />
                <div>
                  <span className="text-[#090909] text-[18px] font-bold">Viezh Robert</span>
                  <p className="text-[#486283] text-[14px]">Founder PT MITRA JASA POWER</p>
                </div>
              </div>
              <p className="text-[#000000] text-[16px] mt-2">
                “PT Mitra Jasa Power hadir untuk memberikan layanan pengiriman yang aman, cepat, dan terpercaya. Kami siap menjadi mitra logistik terbaik untuk kebutuhan bisnis Anda.”
              </p>
            </div>

          </div>

          {/* Bagian Teks */}
          <div className="flex flex-col items-start pt-4 mt-10 md:mt-[360px] mb-10 md:mb-[280px]">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="italic text-[#425A78]">Tentang</span>{" "}
              <span className="text-[#F4B74D]">Kami</span>
            </h2>
            <p className="text-[#000000] text-lg md:text-xl w-full md:w-[510px]">
              PT Mitra Jasa Power adalah perusahaan logistik yang berfokus pada pengiriman skala besar, termasuk kendaraan, alat berat, cargo proyek, dan barang industri ke seluruh Indonesia.
            </p>
          </div>
        </div>

        {/* Bagian Komitmen Kami */}
        <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-6 md:p-16 gap-8">
  {/* Teks Komitmen */}
  <div className="w-full md:w-1/2">
    <h2 className="text-4xl md:text-6xl font-bold mb-6">
      <span className="italic text-[#425A78]">Komitmen</span>{" "}
      <span className="text-[#F4B74D]">Kami</span>
    </h2>
    <ul className="mt-4 space-y-2 text-gray-700">
      <li className="flex items-center"><span className="mr-2">✅</span> Keamanan Terjamin</li>
      <li className="flex items-center"><span className="mr-2">✅</span> Tepat Waktu</li>
      <li className="flex items-center"><span className="mr-2">✅</span> Layanan Profesional</li>
      <li className="flex items-center"><span className="mr-2">✅</span> Jangkauan Luas</li>
      <li className="flex items-center"><span className="mr-2">✅</span> Solusi Fleksibel</li>
    </ul>
  </div>


          {/* Gambar */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img 
              src="/kurir.png" 
              alt="Kurir mengantar paket" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
          {/* Bagian Komitmen Kami */}
          <div className="flex flex-col md:flex-row-reverse items-start md:items-center justify-between bg-white p-6 md:p-16">
  {/* Teks Komitmen */}
  <div className="flex flex-col items-start pt-4 mt-10 md:mt-[360px] mb-10 md:mb-[280px]">
    <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
      <span className="italic text-[#425A78] ">Tujuan</span>{" "}
      <span className="text-[#F4B74D]">Kami</span>
    </h2>
    <p className="text-[#000000] text-lg md:text-xl w-full md:w-[510px]">
      PT Mitra Jasa Power adalah perusahaan logistik yang berfokus pada pengiriman skala besar, termasuk kendaraan, alat berat, cargo proyek, dan barang industri ke seluruh Indonesia.
    </p>
  </div>
  {/* Gambar */}
  <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
    <img 
      src="/kurir2.png" 
      alt="Kurir mengantar paket" 
      className="w-full max-w-md rounded-lg shadow-lg"
    />
  </div>
          </div>
      </div>
    </div>
  );
}
