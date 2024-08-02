import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import s from "./style.module.css";

// Importation de l'image de marqueur
import markerIcon from "../../assets/images/marker.svg";

function Maps({ lat, lon, name }) {
  useEffect(() => {
    // Crée une icône personnalisée pour le marqueur
    const customIcon = L.icon({
      iconUrl: markerIcon,
      iconSize: [32, 32], // Taille de l'icône
      iconAnchor: [16, 32], // Point de l'icône qui sera positionné sur les coordonnées
      popupAnchor: [0, -32], // Point à partir duquel le popup apparaîtra
    });

    // Initialise la carte
    const map = L.map("map").setView([lat, lon], 4);

    // Ajoute un fond de carte
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);

    // Ajouter un marqueur
    L.marker([lat, lon], { icon: customIcon })
      .addTo(map)
      .bindPopup(name)
      .openPopup();

    // Ajuste la vue de la carte pour centrer le marqueur
    map.setView([lat, lon], 10); // Ajuster le niveau de zoom si nécessaire

    // Nettoyage de la carte lorsque le composant est démonté
    return () => {
      map.remove();
    };
  }, [lat, lon, name]);

  return <div id="map" className={s.map}></div>;
}

export default Maps;
