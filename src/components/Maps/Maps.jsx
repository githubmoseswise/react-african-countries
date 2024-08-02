/* eslint-disable react/prop-types */
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import s from "./style.module.css";

function Maps({ lat, lon, name }) {
  useEffect(() => {
    // Initialise la carte
    const map = L.map("map").setView([lat, lon], 5);

    // Ajoute un fond de carte
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);

    // Ajoute un marqueur
    L.marker([lat, lon]).addTo(map).bindPopup(name).openPopup();

    // Nettoyage de la carte lorsque le composant est démonté
    return () => {
      map.remove();
    };
  }, [lat, lon]);

  return <div id="map" className={s.map}></div>;
}

export default Maps;
