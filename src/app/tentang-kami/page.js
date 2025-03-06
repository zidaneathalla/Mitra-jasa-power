export default function Page() {
    return (
      <div className="flex flex-col bg-[#FFFFFF]">
        <div className="self-stretch h-[924px]">
          <div className="flex items-start self-stretch bg-[#FFFFFF] px-[112px]">
            <div className="flex flex-1 flex-col items-start relative mt-[120px] mb-[104px] mr-[64px]">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/JLPlDhJ5JR/iafd4e38.png"
                className="w-[471px] h-[700px] rounded-[10px] object-fill"
                alt="Tentang Kami"
              />
              <div className="flex flex-col bg-[#E6E6E6] w-[477px] absolute bottom-[59px] right-0 rounded-[10px]">
                <div className="flex items-start self-stretch mt-[19px] mb-[19px] ml-[36px] mr-[154px]">
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/JLPlDhJ5JR/v17nbbfg.png"
                    className="w-[54px] h-[54px] mr-[25px] object-fill"
                    alt="Founder"
                  />
                  <div className="flex flex-1 flex-col items-start mt-[15px] mb-[3px]">
                    <span className="text-[#090909] text-[18px] font-bold mb-[4px]">
                      Viezh Robert
                    </span>
                    <span className="text-[#486283] text-[14px] ml-[2px] mr-[2px]">
                      Founder PT MITRA JASA POWER
                    </span>
                  </div>
                </div>
                <span className="text-[#000000] text-[16px] mb-[23px] ml-[36px] mr-[36px]">
                  “PT Mitra Jasa Power hadir untuk memberikan layanan pengiriman yang aman, cepat, dan terpercaya. Kami siap menjadi mitra logistik terbaik untuk kebutuhan bisnis Anda.”
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start pt-[16px] pb-[3px] mt-[360px] mb-[280px]">
              <span className="text-[60px] font-bold mb-[25px]">Tentang Kami</span>
              <span className="text-[#000000] text-[20px] w-[510px]">
                PT Mitra Jasa Power adalah perusahaan logistik yang berfokus pada pengiriman skala besar, termasuk kendaraan, alat berat, cargo proyek, dan barang industri ke seluruh Indonesia.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}
