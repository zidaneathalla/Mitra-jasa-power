export default function ServiceCards() {
    const services = [
      { title: "Pengiriman Kendaraan", image: "/images/kendaraan.jpg" },
      { title: "Pengiriman Alat Berat", image: "/images/alat_berat.jpg" },
      { title: "Pengiriman cargo", image: "/Cargo.jpg" },
      { title: "Pengiriman Via Laut dan Darat", image: "/images/lautan.jpg" },
      { title: "Pengiriman Kontainer", image: "/images/kontainer.jpg" },
      { title: "Pengiriman Kapal", image: "/kapal.jpg" } 

    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="overlay">
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }
  