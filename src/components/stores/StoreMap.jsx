"use client";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function FlyToLocation({ lat, lng }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo([lat, lng], 14, {
      duration: 1.5,
    });
  }, [lat, lng, map]);

  return null;
}

export default function StoreMap({ store }) {
    
  return (
    
    <MapContainer
        center={[
            store.location.lat || 3.139,
            store.location.lng || 101.6869,
        ]}
        zoom={12}
        className="h-[600px] w-full rounded-2xl"
        >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FlyToLocation
            lat={store.location.lat || 3.139}
            lng={store.location.lng || 101.6869}
        />

        <Marker
            position={[
            store.location.lat || 3.139,
            store.location.lng || 101.6869,
            ]}
        >
            <Popup>{store.name}</Popup>
        </Marker>
    </MapContainer>
  );
}