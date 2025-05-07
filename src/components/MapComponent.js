"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, useRef } from "react";

// Fix icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function MapComponent({ pengiriman = [] }) {
  const [isMounted, setIsMounted] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      setIsMounted(false);
    };
  }, []);

  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  if (!isMounted) {
    return <div className="h-[600px] w-full rounded-xl shadow-lg bg-gray-100 flex items-center justify-center">Loading map...</div>;
  }

  return (
    <div className="h-[600px] w-full rounded-xl shadow-lg z-0 relative">
<MapContainer
  ref={mapRef}
  center={[-2.548926, 118.0148634]} // Pusat Indonesia
  zoom={5} // atau coba 4
  scrollWheelZoom={true}
  style={{ height: '100%', width: '100%', borderRadius: '0.75rem' }}
  whenCreated={(map) => {
    mapRef.current = map;
  }}
>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pengiriman.map((item, index) => (
          item.latitude && item.longitude && (
            <Marker
              key={`${item.latitude}-${item.longitude}-${index}`}
              position={[item.latitude, item.longitude]}
              icon={customIcon}
            >
              <Popup>
                <h1><strong>{item.ke}</strong></h1>
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
}
